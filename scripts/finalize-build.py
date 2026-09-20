"""Remove unreferenced originals that Astro emits alongside optimized images.

Only build-generated raster assets in dist/_astro are eligible. Anything named in
HTML/CSS/JS stays; source images and public files are never modified.
"""
from pathlib import Path

root = Path(__file__).resolve().parents[1] / "dist"
references = "\n".join(
    path.read_text() for path in root.rglob("*")
    if path.is_file() and path.suffix in {".html", ".css", ".js"}
)
count = saved = 0
for asset in (root / "_astro").iterdir():
    if asset.suffix.lower() in {".jpg", ".jpeg", ".png"} and asset.name not in references:
        saved += asset.stat().st_size
        count += 1
        asset.unlink()
print(f"Removed {count} unreferenced source-image copies ({saved / 1024 / 1024:.1f} MB) from build output.")
