# Mohammed Alghifari — Portfolio

React + Vite + TypeScript + Tailwind CSS.

## Commands

```bash
npm install      # first time only
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint     # lint with oxlint
```

## Where to edit things

| What | File |
| --- | --- |
| Name, brand, intro, email, social links, CV versions | `src/data/profile.ts` |
| Skills | `src/data/skills.ts` |
| Projects | `src/data/projects.ts` |
| Header nav links | `src/data/navigation.ts` |
| Interface wording (buttons, headings) in English and Arabic | `src/i18n/ui.ts` |
| Fonts and colors, light and dark | `src/styles/index.css` (`:root` and `[data-theme='dark']` blocks) |
| Tech logos and UI icons | `src/components/icons/shapes.ts` (`techIcons` maps a tech name to its logo) |

Any text field in `src/data` can be a plain string (same in both languages) or `{ en: '…', ar: '…' }`.
| CV files (3 versions) | `public/cv/` (listed in `cvs` in `src/data/profile.ts`) |
| Project images | `public/images/projects/` |

Field shapes for all data files are defined in `src/types/content.ts`.
