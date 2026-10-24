# AGENTS.md

Grocify — single-page grocery storefront. React 19 + Vite 8 + Tailwind CSS v4, plain JSX (no TypeScript).

Flow: `index.html` → `src/main.jsx` → `src/App.jsx` (`BrowserRouter` + shared `Navbar`) → routes `/` (`Home`: `Hero`, `Products`) and `/products/:productId` (`ProductDetails`).

## Commands

- `npm run dev` — Vite dev server (localhost:5173)
- `npm run lint` — oxlint, configured in `.oxlintrc.json`
- `npm run build` — `vite build` to `dist/`
- `npm run preview` — serve the production build

There is no test runner, typecheck, or formatter script. Do not assume `npm test` works.

## Conventions

- Components live in `src/components/<PascalCase>/<PascalCase>.jsx`, default export, function named after the file.
- Styling is Tailwind utility classes inline in JSX. Tailwind v4 is wired only through `@tailwindcss/vite`; there is no `tailwind.config.js`. Theme customization belongs in `src/index.css` via `@theme`, not a v3-style JS config.
- Icons come from `react-icons`. Images are ES-module imports from `src/assets`.
- Product catalog is data-driven from `src/components/Products/productsData.js` (`CATEGORIES`, `CATEGORY_INFO`, `PRODUCTS_DATA`). A product's `category` must exist in both `CATEGORIES` and `CATEGORY_INFO`; badge colours are resolved by `badgeType` through `src/components/Products/badgeStyles.js` (unknown values fall back to orange).
- Routing uses `react-router-dom` v7 with `BrowserRouter` (real paths, not hash routing). Use `Link`/`useParams` for internal navigation; `ScrollToTop` resets scroll and resolves `/#products` hash links.
- Routes are declared in `src/App.jsx`, and `Navbar` sits outside `Routes`. Page sections must add top padding for the fixed header (e.g. `pt-32 md:pt-40`); `Home` relies on `Hero`'s built-in spacing.
- Product cards link to `/products/:id`; `ProductDetails` renders a not-found state for unknown IDs, and the wildcard route falls back to `Home`.
- Cart and wishlist interactions are local component state only — there is no persistence or cart store yet.
- `Button` takes its label via the `content` prop, not `children`.

## Gotchas

- **Case-only path mismatch:** Git tracks `src/components/home/Home.jsx` and `src/components/navbar/Navbar.jsx`, but the directories on disk and all imports are capitalized (`Home`, `Navbar`). This resolves on macOS but breaks on case-sensitive Linux/CI. Fix with `git mv` through a temporary name; a Finder/VSCode rename does not update the index on this case-insensitive filesystem.
- `src/assets/` is ~333 MB of oversized PNGs and `dist/` is ~164 MB. Avoid adding new large images or new asset imports casually; builds are asset-dominated.
- No backend, API, or environment variables — all data is local/static.
- `dist/` and `node_modules/` are gitignored; `.DS_Store` files appear in `src/` but are ignored.
