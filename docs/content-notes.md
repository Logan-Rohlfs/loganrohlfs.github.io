# Content notes

## Confirmed direction

- Recruiter audience, with emphasis on aerospace internships and co-ops.
- Computer Engineering at Texas Tech, graduating Fall 2027.
- Photo-led home page inspired by Kefan Wu; project presentation inspired by Derek Ike.
- Separate, continuously scrollable Projects and Experience pages with direct section links.
- GitHub Pages, existing `loganrohlfs.com` domain.

## Dates and factual boundaries

- The current résumé lists **March 2025–Present** for avionics leadership. This includes interim leadership followed by the current role; the website retains that progression.
- The IREC 2026 result belongs to the **vehicle/team**. The site does not attribute the 10,004 ft apogee to successful airbrakes control: the estimator oscillated and the braking contribution is unknown.
- APEX Revision A was an **unfabricated ESP32-S3 design**. Its block diagram and routing images are labeled as earlier design work. The **Teensy 4.1 / Cortex-M7 REV1** photo represents the flown board.
- HORIZON flew with working telemetry, **manual tracking**, and **no video downlink** after antenna damage. Planned automation is distinguished from flown functionality.
- Firefly descriptions stay within the responsibilities documented on the supplied website and résumé. No additional proprietary or quantified claims have been added.
- The résumé PDF is copied unchanged into `public/resume.pdf`.

## Future additions

- The offered flight-computer STEP file is not yet present. A 3D viewer or animation should use a model converted from the real design, with a static fallback and deferred loading. The current site uses the real flight-hardware photograph.
- More precise preferred internship/co-op dates can be added to `src/data/site.ts` when supplied.
- Update project next-step descriptions as work progresses.

## Preserved source

The full original HTML, gallery script, CSS, and existing uncommitted patch were saved before editing to `/private/tmp/portfolio-before-rebuild/`. Existing project/experience prose is also retained in `docs/original-content.md` for reference. These files are not part of the static website output.
