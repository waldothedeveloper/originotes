# AGENTS.md

Essential information for AI coding assistants working on this Next.js 15 codebase.

## Commands
- `npm run dev` - Development server with Turbopack
- `npm run build` - Production build with Turbopack
- `npm run lint` - ESLint code quality check
- No test framework configured - this is a marketing site

## Architecture
- **Next.js 15 App Router** with TypeScript and Tailwind CSS v4
- **MDX content system**: Blog posts in `src/app/blog/`, case studies in `src/app/work/`
- **Path mapping**: `@/*` resolves to `./src/*`
- **Components**: Atomic design in `src/components/`, Framer Motion animations
- **Content loading**: `src/lib/mdx.ts` handles MDX with metadata

## Code Standards
- **TypeScript**: Strict mode, NEVER use `any` - always use `unknown` instead
- **Formatting**: Prettier with single quotes, no semicolons, Tailwind plugin
- **Naming**: PascalCase components, camelCase functions/variables
- **Imports**: Use `@/` path mapping for src imports
- **Styling**: Tailwind CSS with neutral color palette, dark/light themes
- **Components**: Single-purpose, follow existing patterns in `src/components/`
