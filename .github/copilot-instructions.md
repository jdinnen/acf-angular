# Copilot Instructions for ACF Angular

## Project Goals

This project is a full remake of [austincelticfestival.com](https://austincelticfestival.com) using Angular 20.3, with a focus on modern Material Design principles and standard Angular coding practices. The goal is to deliver a beautiful, accessible, and high-performance web experience that reflects the festival's brand and content.

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

## Mobile Menu Overlay & Modal Interaction (2025)

### Problem (2025)
- On mobile, the Buy Now button was visible and clickable through the expanded nav menu, even with Angular Material sidenav and custom overlays.
- Multiple z-index and overlay strategies failed due to stacking context and Angular CDK overlay limitations.

### Solution
- **Do NOT use MatSidenav for modal mobile menus if you need to guarantee all interaction is blocked.**
- Use a **MatDialog-based mobile menu** instead:
  - Create a standalone dialog component for the mobile menu (e.g., `MobileMenuDialogComponent`).
  - Open the dialog programmatically from the header (using `MatDialog`).
  - Pass navigation data via `MAT_DIALOG_DATA` and inject it in the dialog component.
  - Style the dialog panel and content to match the desired mobile menu look (dark background, white text, etc.).
  - Remove all custom z-index hacks and overlays for this use case.
- This guarantees the overlay is always above all content, including floating/fixed buttons, and blocks all interaction.

### Best Practices
- **Never include dialog-only components in the `imports` array of the parent unless used in the template.**
- Always inject `MAT_DIALOG_DATA` for dialog data, not `@Input()`.
- Restore/maintain theming for dialog panels as needed (e.g., `.mobile-sidenav-content` for dark backgrounds).
- Remove stray or duplicate closing braces in CSS to avoid build errors.

### Reference Implementation
- See `header.ts`, `mobile-menu-dialog.ts`, and `header.css` for the correct pattern.
- Test on real mobile devices to ensure overlays block all interaction.

## Angular 20+ Template Syntax Best Practices

- **Do NOT use deprecated `*ngIf` or `*ngFor` in templates.**
- Use the new block syntax: `@if (condition) { ... } @else { ... }` and `@for (item of items) { ... }`.
- This ensures compatibility with Angular v20+ and avoids deprecation warnings.
- See `header.html` for a reference implementation.

## Enforced Angular Best Practices (2025)

- Always use **standalone components**; do not use NgModules for new features.
- Use **Angular signals** for reactive state management (`signal()` API) instead of RxJS for local state.
- Prefer **Angular Material** components for UI, following Material Design 3 (M3) guidelines.
- Use **CSS custom properties** and OKLCH color space for theming and color management.
- Ensure **accessibility**: ARIA attributes, keyboard navigation, and color contrast.
- Write **strictly typed** TypeScript; follow project lint and Prettier rules.
- Use **SSR/SSG/hydration** for performance and SEO.
- Optimize images and static assets; store in `public/images/`.
- Use **deferred loading** and **lazy routes** for large features.
- Maintain **high test coverage** with Karma/Jasmine; all logic and UI must have `.spec.ts` tests.
- **Never use deprecated Angular template syntax**: always use `@if`, `@for` blocks, never `*ngIf`, `*ngFor`.
- Co-locate component `.ts`, `.html`

## Responsive Design Best Practice

When creating new pages or components, always ensure responsiveness for tablet, phone, and desktop. All layouts and UI elements must be tested and styled for these breakpoints to guarantee a seamless experience across devices.

### Material Breakpoints Used

- xs (mobile): 0–599px
- sm (small tablet): 600–899px
- md (large tablet / small desktop): 900–1199px
- lg+ (desktop and up): ≥1200px

### Target Devices for Responsive QA

- Apple iPhone 16 / Pro / Pro Max
  - 390×844 (portrait), 844×390 (landscape)
  - 428×926 (portrait), 926×428 (landscape)
- Apple iPad mini 8.3"
  - 744×1133 (portrait), 1133×744 (landscape)
- Apple iPad Pro 11"
  - 834×1194 (portrait), 1194×834 (landscape)

Use Safari Responsive Design Mode or Xcode Simulator to verify layouts at these sizes. Acceptance checks per page:
- ≤1199px: hamburger menu visible; desktop nav hidden; no horizontal scroll
- ≥1200px: desktop nav visible; hamburger hidden
- Images and cards fit container width; comfortable side padding on tablet
- Tap targets ≥44×44; focus states visible; color contrast passes WCAG AA

### Standard Gutters (site-wide)

We use consistent horizontal gutters across all pages using CSS custom properties and Material breakpoints. Do not hard-code left/right padding in page components; set vertical padding only and rely on global gutters.

- Variables (defined in `src/styles.css`):
  - `--gutter-xs: 16px` (0–599px)
  - `--gutter-sm: 24px` (600–899px)
  - `--gutter-md: clamp(24px, 5vw, 40px)` (900–1199px)
  - `--gutter-lg: clamp(32px, 5vw, 64px)` (≥1200px)
- Applied globally to common wrappers: `.performers-main, .animals-main, .schedules-main, .vendors-main, .volunteer-main, .highland-games-main, .host-hotel-main, .footer-content`.
- For components without a page wrapper (e.g., Home grid), apply gutters to the key container (e.g., `.acf-card-grid`) using the same variables.
- Pages should only set `padding-top`/`padding-bottom` on wrappers; leave horizontal gutters to the global rules for consistency.

### Responsive Grid Utilities

Centralize breakpoint behavior and column counts via global utilities in `src/styles.css`:

- Base utility: `.acf-grid` sets responsive `gap` using variables:
  - `--grid-gap-xs: 0.25rem`, `--grid-gap-sm: 0.25rem`, `--grid-gap-md: 0.5rem`, `--grid-gap-lg: 0.5rem`
- Column helpers:
  - `.cols-1-xs` → 1 column at xs (≤599px)
  - `.cols-2-sm` / `.cols-2-sm-up` → 2 columns at sm (600–899px) or sm and up
  - `.cols-2-md`, `.cols-3-md`, `.cols-2-lg`, `.cols-3-lg` for larger ranges

Usage example:

- 1 column on phones, 2 columns from small tablets upward:
  - `<div class="acf-grid cols-1-xs cols-2-sm-up"> ... </div>`

Notes:
- Prefer utilities over per-component media queries so phone/tablet/desktop behaviors are updated in one place.
- Keep page-specific spacing tweaks minimal; use variables where possible.