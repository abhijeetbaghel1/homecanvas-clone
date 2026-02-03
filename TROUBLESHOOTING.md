# Troubleshooting Guide

## TypeScript Errors Before Installation

If you see TypeScript errors like:
- "Cannot find module 'next/link'"
- "Cannot find module 'next/image'"
- "JSX element implicitly has type 'any'"

**Solution**: These errors are expected before running `pnpm install`. After installing dependencies, these should resolve automatically.

## After Installation

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Restart TypeScript server** in your IDE (VS Code: Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server")

3. **Verify setup**:
   ```bash
   pnpm dev
   ```

## Common Issues

### Module Resolution Errors
- Ensure `tsconfig.json` paths are correct: `"@/*": ["./src/*"]`
- Restart your IDE after installation

### ESLint Errors
- Run `pnpm lint` to see actual errors
- Some errors may be false positives until dependencies are installed

### Image Loading
- Placeholder images use `via.placeholder.com` - these work out of the box
- Replace with actual images in `/public/images/` when ready

### Husky Not Working
- Run `pnpm prepare` to initialize husky
- Ensure `.husky/pre-commit` is executable (should be automatic)

## Verification Checklist

After `pnpm install`:
- [ ] No TypeScript errors in IDE
- [ ] `pnpm dev` starts successfully
- [ ] Home page loads at http://localhost:3000
- [ ] Navigation works
- [ ] Cart/wishlist state persists (check localStorage)
- [ ] Forms validate correctly


