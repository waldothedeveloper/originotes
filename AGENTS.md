# Repository Guidelines

## Project Structure & Modules
- Source: `src/` with Next.js App Router in `src/app/`
- Content (MDX): blog at `src/app/blog/`, work at `src/app/work/`
- Components: atomic design in `src/components/` (PascalCase files)
- Utilities: `src/lib/` (e.g., `src/lib/mdx.ts` for MDX loading)
- Assets: `public/` (images, fonts). Import with `/asset.png`
- Path mapping: use `@/` for imports (e.g., `import X from '@/components/X'`)

## Build, Test, and Development
- `npm run dev`: start local dev with Turbopack
- `npm run build`: production build (Turbopack)
- `npm run lint`: run ESLint per repo rules
- No test framework configured; see Testing Guidelines below

## Coding Style & Naming
- Language: TypeScript (strict). Never use `any`; prefer `unknown` with narrowing
- Formatting: Prettier (single quotes, no semicolons). Tailwind plugin enabled
- Indentation: 2 spaces; keep lines focused and small components single‑purpose
- Naming: PascalCase React components; camelCase functions/variables; kebab‑case files only for routes
- Styling: Tailwind CSS v4, neutral palette; support light/dark themes
- Imports: prefer `@/` mapped paths over relative climbs

## Testing Guidelines
- There is currently no test runner. For changes:
  - Exercise affected pages locally (`npm run dev`) and check console/network
  - Ensure `npm run lint` passes
  - Add lightweight runtime guards when helpful (e.g., prop validation via types)

## Commit & Pull Requests
- Current history is informal; adopt Conventional Commits going forward:
  - Examples: `feat: add pricing CTA`, `fix(blog): correct reading time`
- PRs should include:
  - Clear description, linked issue (e.g., `Closes #123`)
  - Before/after screenshots for UI changes
  - Notes on content migrations (blog/work) and any config/env changes

## Architecture Notes & Tips
- Next.js 15 App Router with MDX content pipeline; Framer Motion animations present
- Keep components small and composable; avoid shared mutable state
- Secrets: use `.env.local` and never commit secrets
- Accessibility: validate landmarks, color contrast, and focus states for UI changes
