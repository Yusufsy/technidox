# TechniDox Frontend Assignment

Nuxt 3 and TailwindCSS implementation of the supplied TechniDox marketing pages.

## Pages

- `/`
- `/about`
- `/docs`
- `/pricing`

## Hosted URL

- https://technidox-63f78.web.app

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run generate
```

## Notes

- Shared header and footer are reused across all pages.
- Mobile navigation and the docs quick-start carousel provide the required interaction.
- A desktop Pixelay comparison is included in `pixelay/pixelay-desktop.png`.
- No mobile Pixelay comparison is included because no mobile design was available in the supplied Figma.

## Tradeoffs

- The assignment brief focused on the home page, but the implementation also includes `/about`, `/docs`, and `/pricing` to keep the navigation complete.
- Tailwind is compiled ahead of Nuxt in this repo to avoid local dev/build inconsistencies encountered during the assignment.
- Pixelay validation was completed against the desktop reference only; a mobile reference was not available in Figma, so there is no mobile overlay comparison in the repo.

## With More Time

- Tighten section-by-section visual fidelity further using the desktop Pixelay overlay until spacing drift is minimal.
- Optimize the large background image assets to reduce payload size on first load.
- Add a small deployment note and final submission checklist covering Pixelay evidence and review steps.
