import { siteConfig } from '@/lib/config/site';

export function formatPrice(amount: number, currency: string = siteConfig.currency): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function kebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function slugify(str: string): string {
  return kebabCase(str);
}

export function formatDimensions(dimensions: {
  length: number;
  width: number;
  height: number;
  unit: string;
}): string {
  const { length, width, height, unit } = dimensions;
  return `${length} × ${width} × ${height} ${unit}`;
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

