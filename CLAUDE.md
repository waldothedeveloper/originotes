# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a Next.js 15 application using the App Router built as a marketing site template called "Studio" from Tailwind Plus. Key architectural patterns:

### Content Management

- **MDX-based content**: Blog posts and case studies are written in MDX files located in `src/app/blog/` and `src/app/work/` directories
- **Dynamic content loading**: The `src/lib/mdx.ts` file provides utilities to load MDX entries with metadata, automatically sorted by date
- **Content types**: Two main content types defined - `Article` (blog posts) and `CaseStudy` (work portfolio)

### Component Architecture

- **Atomic design**: Components are organized in `src/components/` with reusable UI elements
- **Custom MDX components**: `src/components/MDXComponents.tsx` provides styled components for MDX content
- **Layout system**: Uses a complex animated navigation system in `RootLayout.tsx` with Framer Motion for transitions

### Styling & Design

- **Tailwind CSS v4**: Uses the latest Tailwind CSS with custom configuration
- **Design system**: Consistent use of `neutral` color palette with dark/light themes
- **Typography**: Custom font loading with Mona Sans variable font
- **Animation**: Extensive use of Framer Motion for page transitions and interactive elements

### Key Technical Details

- **TypeScript**: Strict TypeScript configuration with path mapping (`@/*` → `./src/*`)
- **Image optimization**: Uses Next.js Image component with custom `GrayscaleTransitionImage` wrapper
- **Client-side interactivity**: Navigation menu uses React context for state management
- **Build optimization**: Configured for Turbopack in both dev and build modes

### File Structure Patterns

- Pages follow Next.js App Router conventions with `page.tsx` files
- MDX content files are named `page.mdx` in subdirectories under `blog/` and `work/`
- Components use PascalCase naming and are typically single-purpose
- Utility functions are in `src/lib/` directory

### Development Notes

- The site uses typed routes (`typedRoutes: true` in Next.js config)
- Prettier is configured with single quotes and no semicolons
- Images and assets are organized in `src/images/` with logical subdirectories

### TypeScript Coding Standards

- **NEVER use `any` type**: Always use `unknown` instead of `any` for type safety
- When type casting is necessary, prefer `unknown` and proper type guards over `any`
- Ask questions if uncertain about proper TypeScript patterns rather than defaulting to `any`
