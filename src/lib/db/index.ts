// Placeholder for database connection
// Later: Prisma or headless CMS integration

import type { Product, Collection, Look } from '@/lib/types';

// Mock data for development
const mockProducts: Product[] = [
  {
    id: '1',
    handle: 'teak-wooden-chair',
    title: 'Teak Wooden Chair',
    description: 'Handcrafted teak wooden chair with modern design.',
    images: [
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop&q=80',
    ],
    variants: [
      {
        id: 'v1',
        title: 'Default',
        price: { amount: 12999, currency: 'INR' },
        available: true,
        dimensions: { length: 50, width: 50, height: 90, unit: 'cm' },
        material: [{ name: 'Teak Wood', percentage: 100 }],
      },
    ],
    availability: 'READY_TO_SHIP',
    materials: [{ name: 'Teak Wood', percentage: 100 }],
    dimensions: { length: 50, width: 50, height: 90, unit: 'cm' },
    seo: {
      title: 'Teak Wooden Chair',
      description: 'Handcrafted teak wooden chair',
    },
    tags: ['furniture', 'chair', 'teak'],
    collection: 'chandigarh',
  },
  {
    id: '2',
    handle: 'modern-sofa-set',
    title: 'Modern Sofa Set',
    description: 'Luxurious 3-seater sofa with premium upholstery.',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&auto=format&fit=crop&q=80',
    ],
    variants: [
      {
        id: 'v2',
        title: 'Default',
        price: { amount: 45999, currency: 'INR' },
        available: true,
        dimensions: { length: 220, width: 95, height: 85, unit: 'cm' },
        material: [{ name: 'Fabric', percentage: 70 }, { name: 'Wood', percentage: 30 }],
      },
    ],
    availability: 'READY_TO_SHIP',
    materials: [{ name: 'Fabric', percentage: 70 }, { name: 'Wood', percentage: 30 }],
    dimensions: { length: 220, width: 95, height: 85, unit: 'cm' },
    seo: {
      title: 'Modern Sofa Set',
      description: 'Luxurious 3-seater sofa with premium upholstery',
    },
    tags: ['furniture', 'sofa', 'living-room'],
    collection: 'nordic',
  },
];

const mockCollections: Collection[] = [
  // Featured Collections
  {
    id: 'col-new-arrivals',
    slug: 'new-arrivals',
    title: 'New Arrivals',
    description: 'Discover our latest furniture and decor pieces',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seo: {
      title: 'New Arrivals - Latest Furniture & Decor',
      description: 'Explore our newest furniture and home decor arrivals',
    },
  },
  {
    id: 'col-best-sellers',
    slug: 'best-sellers',
    title: 'Best Sellers',
    description: 'Our most loved furniture and decor pieces',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seo: {
      title: 'Best Sellers - Top Rated Furniture',
      description: 'Shop our most popular furniture and home decor items',
    },
  },
  {
    id: 'col-featured',
    slug: 'featured',
    title: 'Featured',
    description: 'Handpicked selection of our finest pieces',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seo: {
      title: 'Featured Collection - Curated Selection',
      description: 'Discover our featured furniture and home decor items',
    },
  },
  
  // Furniture
  {
    id: 'col-furniture',
    slug: 'furniture',
    title: 'Furniture',
    description: 'Stylish and functional furniture for every room',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seo: {
      title: 'Furniture Collection - Modern & Stylish',
      description: 'Explore our wide range of modern furniture',
    },
  },
  {
    id: 'col-sofas',
    slug: 'sofas',
    title: 'Sofas',
    description: 'Comfortable and stylish sofas for your living space',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seo: {
      title: 'Sofas - Comfortable & Stylish',
      description: 'Browse our collection of modern sofas',
    },
  },
  {
    id: 'col-chairs',
    slug: 'chairs',
    title: 'Chairs',
    description: 'Elegant chairs for dining, working, and relaxing',
    image: 'https://images.pexels.com/photos/1337373/pexels-photo-1337373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seo: {
      title: 'Chairs - Modern & Ergonomic',
      description: 'Discover our collection of stylish chairs',
    },
  },
  {
    id: 'col-tables',
    slug: 'tables',
    title: 'Tables',
    description: 'Dining, coffee, and side tables for every need',
    image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seo: {
      title: 'Tables - Dining & Coffee Tables',
      description: 'Find the perfect table for your space',
    },
  },
  {
    id: 'col-beds',
    slug: 'beds',
    title: 'Beds',
    description: 'Comfortable and stylish beds for a good night\'s sleep',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seo: {
      title: 'Beds - Comfortable & Stylish',
      description: 'Explore our collection of modern beds',
    },
  },
  {
    id: 'col-storage',
    slug: 'storage',
    title: 'Storage',
    description: 'Smart storage solutions for your home',
    image: 'https://images.pexels.com/photos/1337373/pexels-photo-1337373.jpeg?auto=compress&cs=tinysrgb&w=1200',
    seo: {
      title: 'Storage Solutions - Cabinets & Shelves',
      description: 'Find the perfect storage for your space',
    },
  },
  
  // Lighting
  {
    id: 'col-lighting',
    slug: 'lighting',
    title: 'Lighting',
    description: 'Illuminate your space with our lighting collection',
    image: 'https://images.pexels.com/photos/1722899/pexels-photo-1722899.jpeg?auto=compress&cs=tinysrgb&w=1200',
    seo: {
      title: 'Lighting - Modern & Decorative',
      description: 'Find the perfect lighting for your home',
    },
  },
  {
    id: 'col-ceiling-lights',
    slug: 'ceiling-lights',
    title: 'Ceiling Lights',
    description: 'Elegant ceiling lighting solutions',
    image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seo: {
      title: 'Ceiling Lights - Modern & Stylish',
      description: 'Browse our ceiling light collection',
    },
  },
  {
    id: 'col-table-lamps',
    slug: 'table-lamps',
    title: 'Table Lamps',
    description: 'Stylish table lamps for any room',
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    seo: {
      title: 'Table Lamps - Decorative & Functional',
      description: 'Find the perfect table lamp',
    },
  },
  {
    id: 'col-floor-lamps',
    slug: 'floor-lamps',
    title: 'Floor Lamps',
    description: 'Statement floor lamps for your space',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Floor Lamps - Modern & Stylish',
      description: 'Browse our floor lamp collection',
    },
  },
  {
    id: 'col-wall-lights',
    slug: 'wall-lights',
    title: 'Wall Lights',
    description: 'Decorative wall lighting solutions',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Wall Lights - Modern & Functional',
      description: 'Find the perfect wall lighting',
    },
  },
  
  // Decor
  {
    id: 'col-decor',
    slug: 'decor',
    title: 'Decor',
    description: 'Beautiful decor pieces to enhance your space',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Home Decor - Decorative Accents',
      description: 'Find the perfect decor pieces for your home',
    },
  },
  {
    id: 'col-wall-art',
    slug: 'wall-art',
    title: 'Wall Art',
    description: 'Beautiful artwork for your walls',
    image: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Wall Art - Modern & Decorative',
      description: 'Browse our wall art collection',
    },
  },
  {
    id: 'col-mirrors',
    slug: 'mirrors',
    title: 'Mirrors',
    description: 'Stylish mirrors for any space',
    image: 'https://images.pexels.com/photos/5824843/pexels-photo-5824843.jpeg?auto=compress&cs=tinysrgb&w=1200',
    seo: {
      title: 'Mirrors - Decorative & Functional',
      description: 'Find the perfect mirror for your space',
    },
  },
  {
    id: 'col-cushions',
    slug: 'cushions',
    title: 'Cushions',
    description: 'Comfortable and stylish cushions',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    seo: {
      title: 'Cushions - Decorative & Comfortable',
      description: 'Browse our cushion collection',
    },
  },
  {
    id: 'col-vases',
    slug: 'vases',
    title: 'Vases',
    description: 'Beautiful vases for your flowers and decor',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Vases - Decorative & Functional',
      description: 'Find the perfect vase for your flowers',
    },
  },
  
  // Garden
  {
    id: 'col-garden',
    slug: 'garden',
    title: 'Garden',
    description: 'Outdoor furniture and decor for your garden',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Garden Furniture & Decor',
      description: 'Outdoor furniture and decor for your garden',
    },
  },
  {
    id: 'col-outdoor-furniture',
    slug: 'outdoor-furniture',
    title: 'Outdoor Furniture',
    description: 'Durable and stylish outdoor furniture',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Outdoor Furniture - Durable & Stylish',
      description: 'Browse our outdoor furniture collection',
    },
  },
  {
    id: 'col-planters',
    slug: 'planters',
    title: 'Planters',
    description: 'Beautiful planters for your indoor and outdoor plants',
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Planters - Indoor & Outdoor',
      description: 'Find the perfect planter for your plants',
    },
  },
  {
    id: 'col-garden-decor',
    slug: 'garden-decor',
    title: 'Garden Decor',
    description: 'Decorative pieces for your garden',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Garden Decor - Outdoor Decoration',
      description: 'Enhance your garden with our decor pieces',
    },
  },
  
  // Shop By Style
  {
    id: 'col-shop-by-style',
    slug: 'shop-by-style',
    title: 'Shop By Style',
    description: 'Find your perfect style',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Shop By Style - Find Your Style',
      description: 'Browse furniture by style',
    },
  },
  {
    id: 'col-modern',
    slug: 'modern',
    title: 'Modern',
    description: 'Contemporary and sleek designs',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Modern Furniture - Contemporary Design',
      description: 'Browse our modern furniture collection',
    },
  },
  {
    id: 'col-contemporary',
    slug: 'contemporary',
    title: 'Contemporary',
    description: 'Current and on-trend designs',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Contemporary Furniture - Trendy Designs',
      description: 'Browse our contemporary furniture collection',
    },
  },
  {
    id: 'col-minimalist',
    slug: 'minimalist',
    title: 'Minimalist',
    description: 'Simple and functional designs',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Minimalist Furniture - Simple & Functional',
      description: 'Browse our minimalist furniture collection',
    },
  },
  {
    id: 'col-scandinavian',
    slug: 'scandinavian',
    title: 'Scandinavian',
    description: 'Nordic-inspired designs',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Scandinavian Furniture - Nordic Design',
      description: 'Browse our Scandinavian furniture collection',
    },
  },
  
  // Clearance Sale
  {
    id: 'col-clearance-sale',
    slug: 'clearance-sale',
    title: 'Clearance Sale',
    description: 'Limited time offers on selected items',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Clearance Sale - Limited Time Offers',
      description: 'Shop our clearance sale for great deals',
    },
  },
  {
    id: 'col-furniture-deals',
    slug: 'furniture-deals',
    title: 'Furniture Deals',
    description: 'Discounted furniture for your home',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Furniture Deals - Discounted Furniture',
      description: 'Find great deals on furniture',
    },
  },
  {
    id: 'col-lighting-deals',
    slug: 'lighting-deals',
    title: 'Lighting Deals',
    description: 'Discounted lighting for your home with a wide range of stylish options',
    image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=1200',
    seo: {
      title: 'Lighting Deals - Discounted Lighting',
      description: 'Discounted lighting for your home with a wide range of stylish options',
    },
  },
  {
    id: 'col-decor-deals',
    slug: 'decor-deals',
    title: 'Decor Deals',
    description: 'Discounted home decor',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&auto=format&fit=crop&q=80',
    seo: {
      title: 'Decor Deals - Discounted Home Decor',
      description: 'Find great deals on home decor',
    },
  },
];

const mockLooks: Look[] = [
  {
    id: '1',
    slug: 'modern-living-room',
    title: 'Modern Living Room',
    description: 'Complete living room setup',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1200&auto=format&fit=crop&q=80',
    products: ['1', '2'],
    seo: {
      title: 'Modern Living Room',
      description: 'Complete living room setup with modern furniture',
    },
  },
  {
    id: '2',
    slug: 'scandinavian-bedroom',
    title: 'Scandinavian Bedroom',
    description: 'Minimalist and cozy bedroom design',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop&q=80',
    products: [],
    seo: {
      title: 'Scandinavian Bedroom',
      description: 'Minimalist and cozy bedroom design',
    },
  },
];

export async function getProduct(handle: string): Promise<Product | null> {
  // Placeholder: later fetch from database
  return mockProducts.find((p) => p.handle === handle) || null;
}

export async function getProducts(filters?: {
  collection?: string;
  availability?: string;
}): Promise<Product[]> {
  // Placeholder: later fetch from database
  let products = [...mockProducts];
  if (filters?.collection) {
    products = products.filter((p) => p.collection === filters.collection);
  }
  if (filters?.availability) {
    products = products.filter((p) => p.availability === filters.availability);
  }
  return products;
}

export async function getCollection(slug: string): Promise<Collection | null> {
  // Placeholder: later fetch from database
  return mockCollections.find((c) => c.slug === slug) || null;
}

export async function getCollections(): Promise<Collection[]> {
  // Placeholder: later fetch from database
  return mockCollections;
}

export async function getLook(slug: string): Promise<Look | null> {
  // Placeholder: later fetch from database
  return mockLooks.find((l) => l.slug === slug) || null;
}

export async function getLooks(): Promise<Look[]> {
  // Placeholder: later fetch from database
  return mockLooks;
}

export async function searchProducts(query: string): Promise<Product[]> {
  // Placeholder: later implement proper search
  const lowerQuery = query.toLowerCase();
  return mockProducts.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

