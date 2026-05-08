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
- `pixelay/notes.md` is included as a placeholder, but Pixelay screenshots still need to be generated locally after dependency install.

## Tradeoffs

- The assignment brief focused on the home page, but the implementation also includes `/about`, `/docs`, and `/pricing` to keep the navigation complete.
- Tailwind is compiled ahead of Nuxt in this repo to avoid local dev/build inconsistencies encountered during the assignment.
- Pixelay capture images still need to be generated locally and added to the `pixelay/` folder before final submission.

## With More Time

- Tighten section-by-section visual fidelity further using Pixelay on both desktop and mobile until spacing drift is minimal.
- Optimize the large background image assets to reduce payload size on first load.
- Add a small deployment note and final submission checklist covering Pixelay evidence and review steps.
