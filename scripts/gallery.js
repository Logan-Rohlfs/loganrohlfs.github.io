/* Project media galleries: balance the media column against the copy
   beside it, and open any tile in a lightbox. */
(function () {
    /* ---------------------------------------------------------------
       Balance
       Pick the column count whose natural gallery height lands closest
       to the height of the text column. The CSS rows are 1fr, so once
       the count is set the tiles stretch to fill the column exactly.
       --------------------------------------------------------------- */
    const GAP = 8;
    const PAD = 8;
    const MIN_ROW = 72;
    const TILE_RATIO = 0.72; // rendered tile height / width
    const MAX_COLS = 4;

    const STACK_BREAKPOINT = 860;

    const applied = new WeakMap();
    let writing = false;

    function balance(section) {
        const media = section.querySelector(".project-media");
        const content = section.querySelector(".project-content");
        if (!media || !content) return;

        /* Below the breakpoint the columns stack, so there is nothing to
           balance against; hand sizing back to the stylesheet. */
        if (window.innerWidth <= STACK_BREAKPOINT) {
            if (applied.get(media)) {
                writing = true;
                media.style.removeProperty("height");
                media.style.removeProperty("--gallery-cols");
                writing = false;
                applied.delete(media);
            }
            return;
        }

        const tiles = media.querySelectorAll(".gallery-item");
        const count = tiles.length;
        if (!count) return;

        /* Both columns are stretched grid items, so each one's offsetHeight is
           just the row height. Collapse them first to read what the copy and
           the gallery actually want, otherwise the measurement is circular. */
        const previousAlign = content.style.alignSelf;
        const previousHeight = media.style.height;
        content.style.alignSelf = "start";
        media.style.height = "0px";
        const target = content.offsetHeight;
        const width = media.clientWidth - PAD * 2;
        content.style.alignSelf = previousAlign;
        media.style.height = previousHeight;

        if (width <= 0) return;

        let best = null;
        for (let cols = 1; cols <= Math.min(MAX_COLS, count); cols++) {
            const rows = Math.ceil(count / cols);
            const tileWidth = (width - (cols - 1) * GAP) / cols;
            const natural = rows * tileWidth * TILE_RATIO + (rows - 1) * GAP;
            /* A gallery that cannot compress below the text height would push
               the section taller and leave a gap under the copy. */
            const floor = rows * MIN_ROW + (rows - 1) * GAP;
            const score =
                Math.abs(natural - target) + (floor > target ? 1e6 : 0);
            if (!best || score < best.score) {
                best = { cols, score, floor };
            }
        }

        /* `1fr` rows only distribute space when the container has a definite
           height, so set it rather than letting the images size the column. */
        const height = Math.round(Math.max(target, best.floor + PAD * 2));
        const previous = applied.get(media);
        if (previous && previous.cols === best.cols && previous.height === height) {
            return;
        }
        applied.set(media, { cols: best.cols, height: height });
        writing = true;
        media.style.setProperty("--gallery-cols", best.cols);
        media.style.height = height + "px";
        writing = false;
    }

    function balanceAll() {
        document.querySelectorAll(".project-section").forEach(balance);
    }

    let pending;
    function scheduleBalance() {
        cancelAnimationFrame(pending);
        pending = requestAnimationFrame(balanceAll);
    }

    balanceAll();
    window.addEventListener("resize", scheduleBalance);
    window.addEventListener("load", scheduleBalance);
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(scheduleBalance);
    }
    /* Markdown blocks are rendered after this script parses, so re-run
       once the text column has its final height. */
    if (window.ResizeObserver) {
        const observer = new ResizeObserver(() => {
            if (!writing) scheduleBalance();
        });
        document
            .querySelectorAll(".project-section .project-content")
            .forEach((el) => observer.observe(el));
    }

    /* ---------------------------------------------------------------
       Lightbox
       --------------------------------------------------------------- */
    const box = document.createElement("div");
    box.className = "lightbox";
    box.hidden = true;
    box.innerHTML = `
        <button class="lightbox-btn lightbox-close" aria-label="Close">&times;</button>
        <button class="lightbox-btn lightbox-prev" aria-label="Previous image">&#8249;</button>
        <button class="lightbox-btn lightbox-next" aria-label="Next image">&#8250;</button>
        <img alt="" />
        <p class="lightbox-caption"></p>
        <span class="lightbox-counter"></span>`;
    document.body.appendChild(box);

    const image = box.querySelector("img");
    const caption = box.querySelector(".lightbox-caption");
    const counter = box.querySelector(".lightbox-counter");

    let group = [];
    let index = 0;
    let lastFocus = null;

    function render() {
        const item = group[index];
        const source = item.querySelector("img");
        image.src = source.getAttribute("src");
        image.alt = source.getAttribute("alt") || "";
        caption.textContent =
            item.dataset.caption || source.getAttribute("alt") || "";
        counter.textContent = `${index + 1} / ${group.length}`;
        const multiple = group.length > 1;
        box.querySelector(".lightbox-prev").hidden = !multiple;
        box.querySelector(".lightbox-next").hidden = !multiple;
    }

    function open(item) {
        const scope = item.closest(".project-media, .timeline-figures");
        group = Array.from(scope.querySelectorAll(".gallery-item"));
        index = group.indexOf(item);
        lastFocus = document.activeElement;
        box.hidden = false;
        document.body.style.overflow = "hidden";
        render();
        box.querySelector(".lightbox-close").focus();
    }

    function close() {
        box.hidden = true;
        document.body.style.overflow = "";
        image.removeAttribute("src");
        if (lastFocus) lastFocus.focus();
    }

    function step(delta) {
        index = (index + delta + group.length) % group.length;
        render();
    }

    document.querySelectorAll(".gallery-item").forEach((item) => {
        item.addEventListener("click", () => open(item));
    });

    box.querySelector(".lightbox-close").addEventListener("click", close);
    box.querySelector(".lightbox-prev").addEventListener("click", () => step(-1));
    box.querySelector(".lightbox-next").addEventListener("click", () => step(1));
    box.addEventListener("click", (event) => {
        if (event.target === box) close();
    });

    document.addEventListener("keydown", (event) => {
        if (box.hidden) return;
        if (event.key === "Escape") close();
        if (event.key === "ArrowLeft") step(-1);
        if (event.key === "ArrowRight") step(1);
    });
})();
