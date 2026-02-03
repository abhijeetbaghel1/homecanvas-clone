# Setup Instructions

## Initial Setup

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Set up Environment Variables**
   ```bash
   cp env.local.example .env.local
   ```
   Edit `.env.local` with your configuration.

3. **Initialize Husky (Git Hooks)**
   ```bash
   pnpm prepare
   ```
   This will set up pre-commit hooks for linting and formatting.

4. **Run Development Server**
   ```bash
   pnpm dev
   ```

## First Commit

After verifying everything works, make your first commit:

```bash
git init
git add .
git commit -m "feat(init): scaffold Next.js app with Tailwind, TypeScript, DX tooling, and core architecture"
```

## Verification Checklist

- [ ] App runs: `pnpm dev` starts without errors
- [ ] Home page loads with announcement bar, hero, and sections
- [ ] Navigation works (collections, products, pages)
- [ ] Cart and wishlist state persists (check localStorage)
- [ ] Forms validate correctly (Contact, Bespoke)
- [ ] ESLint passes: `pnpm lint`
- [ ] Prettier formatted: `pnpm format:check`
- [ ] Tests run: `pnpm test`

## Next Steps

1. Replace mock data in `src/lib/db/index.ts` with real database
2. Add real product images to `/public/images/`
3. Implement payment processing
4. Set up email service for forms
5. Add analytics
6. Configure production deployment


