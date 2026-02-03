export type Availability = 'READY_TO_SHIP' | 'MADE_TO_ORDER';

export interface DimensionsCm {
  length: number;
  width: number;
  height: number;
  unit: 'cm';
}

export interface DimensionsIn {
  length: number;
  width: number;
  height: number;
  unit: 'in';
}

export type Dimensions = DimensionsCm | DimensionsIn;

export interface Material {
  name: string;
  percentage?: number;
}

export interface Price {
  amount: number;
  currency: string;
  compareAtAmount?: number;
}

export interface Seo {
  title: string;
  description: string;
  image?: string;
}

export interface Variant {
  id: string;
  title: string;
  price: Price;
  sku?: string;
  available: boolean;
  dimensions?: Dimensions;
  material?: Material[];
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  images: string[];
  variants: Variant[];
  availability: Availability;
  materials: Material[];
  dimensions?: Dimensions;
  seo: Seo;
  tags: string[];
  collection?: string;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  seo: Seo;
  products?: Product[];
}

export interface Look {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  products: string[]; // Product IDs
  seo: Seo;
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  product: Product;
  variant: Variant;
}

export interface WishlistItem {
  productId: string;
  variantId: string;
  product: Product;
  variant: Variant;
}

