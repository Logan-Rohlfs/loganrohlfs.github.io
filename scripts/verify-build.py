"""Validate the deployable static site using Python's standard library.

This checks cross-page links, gallery assets, responsive image metadata, accessible
labels, and scripts. It does not replace browser/device QA.
"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
ORIGIN = "https://loganrohlfs.com"
errors = []


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.tags = []
        self.ids = set()
        self.scripts = []
        self.active_script = None
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attr = dict(attrs)
        self.tags.append((tag, attr))
        if attr.get("id"):
            if attr["id"] in self.ids:
                errors.append(f"{self.path.name}: duplicate id {attr['id']}")
            self.ids.add(attr["id"])
        if tag == "script" and not attr.get("src"):
            self.active_script = ""

    def handle_data(self, value):
        if self.active_script is not None:
            self.active_script += value

    def handle_endtag(self, tag):
        if tag == "script" and self.active_script is not None:
            self.scripts.append(self.active_script)
            self.active_script = None

    def select(self, tag):
        return [attr for name, attr in self.tags if name == tag]


expected = ["index.html", "projects.html", "experience.html", "photography.html", "resume.html", "404.html"]
assert all((DIST / path).is_file() for path in expected), "Missing expected output pages. Run npm run build first."
pages = {name: Page(DIST / name) for name in expected}
checked = image_count = 0


def check_reference(page_name, reference):
    global checked
    url = urlparse(urljoin(f"{ORIGIN}/{page_name}", reference))
    if url.scheme not in {"http", "https"} or url.netloc != "loganrohlfs.com":
        return
    filename = unquote(url.path).lstrip("/") or "index.html"
    target = DIST / filename
    checked += 1
    if not target.is_file():
        errors.append(f"{page_name}: missing local target {reference}")
    elif url.fragment and filename in pages:
        if unquote(url.fragment) not in pages[filename].ids:
            errors.append(f"{page_name}: missing anchor {reference}")


for name, page in pages.items():
    if len(page.select("h1")) != 1:
        errors.append(f"{name}: expected one main heading")
    if not any(m.get("name") == "description" and m.get("content") for m in page.select("meta")):
        errors.append(f"{name}: missing description")
    for tag, attrs in page.tags:
        for key in ("href", "src", "poster"):
            if attrs.get(key):
                check_reference(name, attrs[key])
        if tag == "object" and attrs.get("data"):
            check_reference(name, attrs["data"])
        if attrs.get("srcset"):
            for candidate in attrs["srcset"].split(","):
                check_reference(name, candidate.strip().split()[0])
        for key in ("aria-controls", "aria-labelledby", "aria-describedby"):
            for value in attrs.get(key, "").split():
                if value not in page.ids:
                    errors.append(f"{name}: {key} points to absent {value}")
        if tag == "img" and attrs.get("src"):
            image_count += 1
            if not attrs.get("alt"):
                errors.append(f"{name}: missing image alternative text")
            if not all(attrs.get(key) for key in ("width", "height", "sizes", "srcset")):
                errors.append(f"{name}: missing responsive image dimensions/sizes")
        if tag == "video" and attrs.get("preload") != "none":
            errors.append(f"{name}: video must defer download until playback")
    for script in page.scripts:
        result = subprocess.run(["node", "--check", "--input-type=module"], input=script, text=True, capture_output=True)
        if result.returncode:
            errors.append(f"{name}: invalid inline script: {result.stderr}")

home = pages["index.html"]
if not any(a.get("aria-current") == "page" and a.get("href") == "/" for a in home.select("a")):
    errors.append("Home navigation must be marked as the current page")
if sum(img.get("fetchpriority") == "high" for img in home.select("img")) != 1:
    errors.append("Home must prioritize exactly one hero image")
for css in (DIST / "_astro").glob("*.css"):
    for reference in re.findall(r"url\(['\"]?([^'\")]+)", css.read_text()):
        if reference.startswith(("data:", "#")):
            continue
        if reference.startswith("/"):
            target = DIST / reference.lstrip("/")
        else:
            target = css.parent / reference
        if not target.is_file():
            errors.append(f"{css.name}: missing CSS asset {reference}")
if (DIST / "CNAME").read_text().strip() != "loganrohlfs.com":
    errors.append("Custom domain must remain loganrohlfs.com")
if not (DIST / ".nojekyll").exists():
    errors.append("Missing .nojekyll")
if errors:
    raise SystemExit("\n".join(errors))
print(f"Verified {len(pages)} pages, {checked} local references, {image_count} responsive images, and inline scripts.")
