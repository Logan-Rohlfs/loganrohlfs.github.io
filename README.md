# Logan Rohlfs — Portfolio

A static Astro portfolio for **loganrohlfs.com**, hosted on GitHub Pages. Dark by default, with a saved light-theme preference. No application server or API keys.

## Develop

Use Node 24 LTS (minimum 22.12), npm, and Python 3 (standard library only, for static-output checks).

```sh
npm ci
npm run dev
```

Astro prints the local preview address. With Astro 7, the dev server runs in the background; `npx astro dev stop` stops it.

```sh
npm run check        # Type-check components and content
npm run build        # Static HTML and responsive WebP images → dist/
npm run verify       # Check routes, anchors, assets, image dimensions, and metadata
npm run preview     # Serve the production output locally
npm run format      # Format source files
```

Set `ASTRO_TELEMETRY_DISABLED=1` when running in a restricted environment that cannot write Astro preferences.

## Edit content

- `src/data/site.ts`: contact information, availability, graduation, navigation, and skills.
- `src/data/projects.ts`: project summaries, technical sections, stats, timelines, galleries, and related links.
- `src/data/experience.ts`: employment and leadership, shared by Home and Experience.
- `src/data/photography.ts`: photography selection and captions.
- `public/resume.pdf`: replace this file to update both the preview and download.
- `images/`: original image sources, optimized during builds. These originals are not copied wholesale into the deployed site.

Each project/experience entry uses the `Entry` interface in `src/data/types.ts`. Set a stable `id`, then the overview card and section links use it automatically. Preserve existing IDs when revising content so old links keep working.

Images use paths relative to `images/`. After each production build, a small cleanup script removes unreferenced source-image copies from `dist/_astro`, retaining the optimized variants and any originals explicitly linked from the site. Set `fit: 'contain'` for boards, CAD, or interfaces that must be shown whole. Photographs can use `position: '50% 40%'` to choose a focal point in cropped cards. The Photography page preserves natural proportions. All gallery images open in a keyboard-accessible lightbox with previous/next controls; without JavaScript, links still open the larger image.

The telemetry recording is in `public/media/telemetry.mp4` and uses `preload="none"` to avoid downloading it before playback. Shared photo assets are emitted at multiple widths in WebP format. Fonts are bundled locally.

## Structure

- `src/layouts/Layout.astro`: shared document, metadata, navigation, footer, and lightbox.
- `src/components/`: reusable image, card, experience row, case study, section index, and interface primitives.
- `src/pages/`: page composition. Routes retain `.html` URLs for compatibility with the original site.
- `src/scripts/site.ts`: theme preference, mobile menu, section highlighting, and lightbox.
- `src/styles/foundations.css`: palette, theme tokens, type, and shared controls.
- Other files in `src/styles/`: styles grouped by feature. `responsive.css` contains layout changes at 1100, 800, and 540 pixels. `motion.css` contains progressive CSS animation.

The overview and detailed project pages read the same objects. There is no runtime Markdown parser, gallery manifest fetch, or client-side routing dependency. CSS view transitions and scroll animation enhance supported browsers; all content remains available without either feature. Reduced-motion preferences disable motion.

## Contact form

The form prepares a `mailto:` draft with an encoded subject and body. The visitor must send it from their email app. It does **not** silently submit or deliver messages. A direct email link and copy-address button provide fallbacks. True in-page delivery would require an external mail service or backend.

## GitHub Pages

1. In the repository's **Settings → Pages**, select **GitHub Actions** as the build source.
2. Merge/push to `main`, or run **Deploy portfolio to GitHub Pages** manually.
3. Keep the existing custom domain set to `loganrohlfs.com`. The build includes `public/CNAME`.

The workflow builds and validates the site before publishing `dist/`. It does not serve source files, dependencies, or the full original image directory. This rebuild does not require a separate hosting account.

## Content provenance

Copy was condensed from the existing website and current résumé, with internship/co-op goals and Fall 2027 graduation confirmed in conversation. See `docs/content-notes.md` for factual boundaries and future additions. The résumé PDF is unchanged.
