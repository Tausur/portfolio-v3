# Replit Agent Guide

## Overview

This is a personal portfolio website for a cybersecurity learner (Tausur Rahaman). It's a dark-themed, single-page application with a cyber/hacker aesthetic, featuring sections for hero, about, skills, learning journey, roadmap, and a contact form. The site includes a simple admin panel for content management. The project uses a fullstack TypeScript architecture with React on the frontend and Express on the backend, connected to a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, built using Vite
- **Routing**: Wouter (lightweight client-side router) — two routes: `/` (Home portfolio) and `/admin` (content management)
- **UI Components**: shadcn/ui component library (new-york style) built on Radix UI primitives with Tailwind CSS
- **Styling**: Tailwind CSS with CSS custom properties for theming (dark mode default with light mode support via `next-themes`). The design uses a "cyber green" color scheme (HSL 135 70% 50% for primary)
- **Animations**: Framer Motion for scroll reveals and page animations; `typewriter-effect` for terminal-style typing in the hero section
- **State Management**: TanStack React Query for server state; React Hook Form with Zod validation for forms
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (via tsx)
- **Server**: HTTP server created from Express app; in development, Vite dev server is attached as middleware for HMR
- **API Pattern**: Routes defined in `server/routes.ts`, with a shared route contract in `shared/routes.ts` that defines method, path, input schema, and response schemas using Zod. This ensures type-safe API contracts between client and server.
- **Current API endpoints**:
  - `POST /api/contact` — accepts name, email, message; stores in database

### Data Layer
- **Database**: PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema** (in `shared/schema.ts`):
  - `messages` table: id (serial), name (text), email (text), message (text), createdAt (timestamp)
- **Migrations**: Managed via `drizzle-kit push` (`npm run db:push`)
- **Storage Pattern**: `server/storage.ts` exports a `DatabaseStorage` class implementing an `IStorage` interface, providing an abstraction layer over database operations

### Build System
- **Development**: `tsx server/index.ts` with Vite middleware for hot module replacement
- **Production Build**: Custom build script (`script/build.ts`) that runs Vite for the client and esbuild for the server, outputting to `dist/`. Server dependencies in an allowlist are bundled to reduce cold start times.
- **Output**: Client assets go to `dist/public/`, server bundle to `dist/index.cjs`

### Admin Panel
- Simple client-side admin at `/admin` with hardcoded password authentication stored in localStorage (not production-grade security — demo only)
- Content editing saved to localStorage

## External Dependencies

### Database
- **PostgreSQL** — required, connection string via `DATABASE_URL` environment variable
- **connect-pg-simple** — available for session storage (not currently used for sessions)

### Key NPM Packages
- **drizzle-orm** + **drizzle-kit** — ORM and migration tooling for PostgreSQL
- **express** v5 — HTTP server framework
- **@tanstack/react-query** — async state management on the client
- **framer-motion** — animation library
- **typewriter-effect** — typing animation for hero section
- **next-themes** — theme (dark/light mode) management
- **wouter** — lightweight client-side routing
- **zod** + **drizzle-zod** — runtime validation and schema-to-validator generation
- **react-hook-form** + **@hookform/resolvers** — form handling with Zod integration
- **shadcn/ui ecosystem** — Radix UI primitives, class-variance-authority, clsx, tailwind-merge, lucide-react icons

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal** — runtime error overlay in development
- **@replit/vite-plugin-cartographer** — development tooling (dev only)
- **@replit/vite-plugin-dev-banner** — development banner (dev only)