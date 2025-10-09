# Copilot Instructions for ACF Angular

## Project Goals

This project is a full remake of [austincelticfestival.com](https://austincelticfestival.com) using Angular 20.3, with a focus on modern Material Design principles and standard Angular coding practices. The goal is to deliver a beautiful, accessible, and high-performance web experience that reflects the festival’s brand and content.

## Modern Angular & Material Design Best Practices (2025)

- **Use standalone components** for all UI features; avoid NgModules.
- **Leverage Angular signals** for reactive state management and fine-grained updates.
- **Adopt Material Design 3 (M3) principles**:
  - Use Angular Material components for consistent, accessible, and responsive UI.
  - Apply theming via CSS custom properties and OKLCH color space.
  - Prioritize accessibility (ARIA, keyboard navigation, color contrast).
  - Ensure mobile-first layouts and touch-friendly interactions.
- **Organize code modularly**: keep components, styles, and templates co-located.
- **Strict TypeScript config**: enforce strict typing and code style (see `tsconfig.json`, Prettier).
- **Performance**:
  - Use SSR, SSG, and hydration for fast initial loads and SEO.
  - Optimize images and static assets; store all images in `public/images/` (already done).
  - Use deferred loading and lazy routes for large features.
- **Testing**: maintain high coverage with Karma/Jasmine; write `.spec.ts` for all logic and UI.
- **Accessibility**: audit regularly with tools (Lighthouse, axe) and follow Material guidelines.
- **Designer-developer collaboration**: use Figma or Material tools for design handoff; keep UI consistent with Material specs.

## Project Overview

This is a modern Angular 20.3 application with SSR (Server-Side Rendering) capabilities, using the latest standalone component architecture and Angular's new zoneless change detection.

## Architecture Patterns

### Component Structure
- Uses **standalone components** (no NgModules) - see `src/app/app.ts`
- Component files use `.ts` extension with separate `.html` and `.css` files
- Root component is `App` class (not `AppComponent`) in `src/app/app.ts`
- Uses Angular signals for reactive state management (`signal()` API)

### Configuration System
- **Bootstrap configs**: Split between `app.config.ts` (client) and `app.config.server.ts` (server)
- Uses `mergeApplicationConfig()` to combine client/server configurations
- **Zoneless change detection** enabled via `provideZonelessChangeDetection()`
- **Event replay** for hydration: `provideClientHydration(withEventReplay())`

### SSR Setup
- **Server entry**: `src/server.ts` with Express.js integration
- **Server routes**: `app.routes.server.ts` defines render modes (currently prerendering all routes)
- **Build output**: Uses `outputMode: "server"` in `angular.json`
- **Production serving**: `npm run serve:ssr:acf-angular` runs the Express server

## Development Workflows

### Key Commands
- `npm start` or `ng serve` - Development server (client-only)
- `npm run build` - Production build with SSR
- `npm run serve:ssr:acf-angular` - Serve SSR build locally
- `npm test` - Run Karma/Jasmine tests
- `ng generate component <name>` - Generate new standalone component

### File Organization
- Components in `src/app/` with co-located `.ts`, `.html`, `.css` files
- Server configuration in `src/main.server.ts` and `src/server.ts`
- Static assets in `public/` directory (not `src/assets/`)

## Code Conventions

### TypeScript Configuration
- **Strict mode** enabled with additional strict flags in `tsconfig.json`
- Uses `ES2022` target with `module: "preserve"`
- **Experimental decorators** enabled for Angular features

### Styling
- Uses **CSS custom properties** (CSS variables) extensively - see `app.html` inline styles
- **OKLCH color space** for modern color definitions
- **Prettier** configured with 100 character line width and single quotes

### Import Patterns
- Import Angular APIs from specific modules: `@angular/core`, `@angular/platform-browser`, etc.
- Use `RouterOutlet` for routing (imported in standalone components)
- Server-specific imports from `@angular/ssr` and `@angular/ssr/node`

## Integration Points

### Express Server Integration
- Custom Express app in `src/server.ts` handles static files and Angular SSR
- API routes can be added before the Angular catch-all handler
- Uses `AngularNodeAppEngine` for SSR processing

### Build System
- Uses Angular's new `@angular/build:application` builder
- Supports both client and server builds in single configuration
- Bundle budgets configured for performance monitoring

## Testing Setup
- **Karma + Jasmine** for unit tests
- Test files use `.spec.ts` extension
- Configuration in `tsconfig.spec.json` and `angular.json` test architect

When working with this codebase, always use standalone components, leverage Angular signals for state, and ensure both client and server configurations are updated when adding new providers or routes.