# Home Page Images Update Summary

## Overview
Updated the home page components to match the HomeCanvas.com design and added image support throughout the marketing sections.

## Changes Made

### 1. Hero Banner (`src/components/marketing/HeroBanner.tsx`)
- ✅ Updated tagline to match HomeCanvas: "Thoughtful Design, Joyful Living."
- ✅ Added the three taglines:
  - "For the curators of craftsmanship."
  - "For the connoisseurs of creativity."
  - "For the celebrators of stories."
- ✅ Added background image support (`/images/hero/hero-bg.jpg`)
- ✅ Improved typography and spacing to match the website style

### 2. Category Tiles (`src/components/marketing/CategoryTiles.tsx`)
- ✅ Integrated Next.js Image component for category images
- ✅ Added proper image paths:
  - `/images/categories/furniture.jpg`
  - `/images/categories/lighting.jpg`
  - `/images/categories/decor.jpg`
  - `/images/categories/garden.jpg`
- ✅ Added hover effects and proper image optimization

### 3. Collections Carousel (`src/components/marketing/CollectionsCarousel.tsx`)
- ✅ Added Next.js Image component for collection images
- ✅ Uses `collection.image` field from database
- ✅ Proper image sizing and hover effects

### 4. Shop the Look Grid (`src/components/marketing/ShopTheLookGrid.tsx`)
- ✅ Added Next.js Image component for look images
- ✅ Uses `look.image` field from database
- ✅ Responsive image sizing for different screen sizes

### 5. Site Configuration (`src/lib/config/site.ts`)
- ✅ Updated tagline to match HomeCanvas exactly: "Thoughtful Design, Joyful Living."

### 6. Image Directory Structure
- ✅ Created directory structure:
  - `public/images/hero/` - Hero background images
  - `public/images/categories/` - Category tile images
  - `public/images/collections/` - Collection carousel images
  - `public/images/looks/` - Shop the Look images
- ✅ Added README.md with image guidelines
- ✅ Added IMAGE_PLACEHOLDERS.md with sourcing suggestions

## Next Steps

### To Complete the Image Integration:

1. **Add Hero Background Image**
   - Place: `public/images/hero/hero-bg.jpg`
   - Recommended: 1920x1080px, warm interior design image

2. **Add Category Images**
   - `public/images/categories/furniture.jpg` (800x800px)
   - `public/images/categories/lighting.jpg` (800x800px)
   - `public/images/categories/decor.jpg` (800x800px)
   - `public/images/categories/garden.jpg` (800x800px)

3. **Add Collection Images**
   - Images are referenced in `src/lib/db/index.ts`
   - Current collections need:
     - `public/images/collections/chandigarh.jpg` (1280x960px)
     - `public/images/collections/nordic.jpg` (1280x960px)

4. **Add Shop the Look Images**
   - Images are referenced in `src/lib/db/index.ts`
   - Current look needs:
     - `public/images/looks/living-room.jpg` (1280x960px)

## Image Sourcing Suggestions

See `public/images/IMAGE_PLACEHOLDERS.md` for detailed guidance on:
- Where to source images (Unsplash, Pexels, etc.)
- Recommended search terms
- Image optimization tips
- File size guidelines

## Design Alignment

The components now match the HomeCanvas.com design:
- ✅ Correct tagline and messaging
- ✅ Image support throughout
- ✅ Proper hover effects and transitions
- ✅ Responsive image sizing
- ✅ Consistent styling with the brand

## Testing

After adding images:
1. Run the development server
2. Check that all images load correctly
3. Verify hover effects work
4. Test responsive behavior on different screen sizes
5. Ensure images are optimized (Next.js handles this automatically)

## Notes

- All images use Next.js Image component for automatic optimization
- Images have proper alt text for accessibility
- Responsive sizing is configured for different viewport sizes
- Fallback backgrounds are in place if images are missing


