# HomeCanvas Clone

A production-ready Next.js e-commerce application for furniture, inspired by HomeCanvas. Built with modern best practices, clean architecture, and strong developer experience.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **UI Components**: Headless UI + Radix UI
- **State Management**: Zustand (cart/wishlist)
- **Forms**: react-hook-form + Zod
- **Testing**: Vitest + Testing Library + Playwright
- **Linting**: ESLint (Airbnb + Next.js rules)
- **Formatting**: Prettier
- **Git Hooks**: Husky + lint-staged

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd homecanvas-clone
```

2. Install dependencies:
```bash
pnpm install
```

3. Copy environment variables:
```bash
cp .env.local.example .env.local
```

4. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/src
  /app                    # Next.js App Router pages
    /(marketing)          # Marketing pages (home)
    /(catalog)            # Catalog pages (products, collections)
    /(content)            # Content pages (about, contact, policies)
    /api                  # API routes
  /components            # React components
    /layout              # Layout components (Navbar, Footer)
    /common              # Reusable components
    /catalog             # Product-related components
    /marketing           # Marketing components
    /forms               # Form components
  /lib                   # Utilities and configurations
    /config              # Site configuration
    /utils               # Helper functions
    /types               # TypeScript types
    /validation          # Zod schemas
    /seo                 # SEO helpers
    /db                  # Database/API layer (placeholder)
  /state                 # Zustand stores
  /styles                # Global styles and theme
  /tests                 # Test files
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm test` - Run unit tests with Vitest
- `pnpm e2e` - Run end-to-end tests with Playwright

## Features

### Implemented

- ✅ Next.js App Router with TypeScript
- ✅ Tailwind CSS with design system (CSS variables)
- ✅ Responsive layout (mobile-first)
- ✅ Announcement bar (dismissible, configurable)
- ✅ Navigation with cart/wishlist badges
- ✅ Product catalog pages
- ✅ Collection pages
- ✅ Product detail pages
- ✅ Cart and wishlist state management (Zustand + localStorage)
- ✅ Form validation (react-hook-form + Zod)
- ✅ API route stubs (newsletter, bespoke, search)
- ✅ SEO metadata helpers
- ✅ Content pages (About, Contact, Policies)
- ✅ ESLint + Prettier configuration
- ✅ Husky pre-commit hooks
- ✅ Basic test setup

### Design System

The app uses a design system with CSS variables defined in `src/styles/theme.css`:

- **Colors**: Warm neutrals with walnut and sand accents
- **Typography**: Inter (sans) + Playfair Display (serif)
- **Spacing**: 4px base scale
- **Border Radius**: 4px, 8px, 12px
- **Shadows**: Subtle card shadows

### Configuration

Site configuration is centralized in `src/lib/config/site.ts`:

- Brand name
- Currency (INR)
- Locale (en-IN)
- Announcement bar text
- Navigation links
- Footer links

## Architecture Notes

### State Management

- **Server Components**: Used by default for better performance
- **Client State**: Zustand stores for cart and wishlist (persisted to localStorage)
- **Forms**: Client components with react-hook-form

### Data Layer

Currently uses mock data in `src/lib/db/index.ts`. Replace with:
- Prisma + PostgreSQL/MySQL
- Headless CMS (Contentful, Strapi)
- E-commerce platform API (Shopify, Medusa)

### API Routes

All API routes are stubs that log data. Implement:
- Database integration
- Email service (SendGrid, Resend)
- Payment processing (Stripe, Razorpay)
- Search service (Algolia, Typesense)

## Testing

### Unit Tests

Run unit tests with Vitest:
```bash
pnpm test
```

### E2E Tests

Run Playwright tests:
```bash
pnpm e2e
```

## Code Quality

### Pre-commit Hooks

Husky runs lint-staged on commit:
- ESLint on staged `.ts`/`.tsx` files
- Prettier on all staged files

### Linting

ESLint configuration:
- Next.js recommended rules
- Airbnb style guide
- TypeScript support

## Deployment

### Build

```bash
pnpm build
```

### Environment Variables

Required environment variables (see `.env.local.example`):
- `NEXT_PUBLIC_SITE_URL` - Site URL
- `NEXT_PUBLIC_SITE_NAME` - Site name

## Contributing

1. Follow conventional commits
2. Run linting and tests before committing
3. Ensure all tests pass
4. Follow the existing code style

## License

MIT


