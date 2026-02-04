import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProduct, getProducts } from '@/lib/db';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { formatPrice, formatDimensions } from '@/lib/utils/format';
import { generateMetadata as genMeta } from '@/lib/seo/meta';
import AddToCartButton from '@/components/catalog/AddToCartButton';
import AddToWishlistButton from '@/components/catalog/AddToWishlistButton';
import type { Metadata } from 'next';

interface ProductPageProps {
  params: Promise<{ handle: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    return genMeta({ title: 'Product Not Found' });
  }

  return genMeta({
    title: product.title,
    description: product.description,
    type: 'article',
  });
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    handle: product.handle,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    notFound();
  }

  const variant = product.variants[0];
  const mainImage = product.images[0] || 'https://via.placeholder.com/800x800?text=Product';

  return (
    <div className="py-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-neutral-100 mb-4">
              <Image
                src={mainImage}
                alt={product.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(1, 5).map((image, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square overflow-hidden rounded bg-neutral-100"
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${idx + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 25vw, 12.5vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-serif font-bold mb-4">
              {product.title}
            </h1>
            <div className="mb-6">
              <p className="text-3xl font-semibold text-accent-walnut">
                {formatPrice(variant.price.amount, variant.price.currency)}
              </p>
              {variant.price.compareAtAmount && (
                <p className="text-lg text-neutral-500 line-through">
                  {formatPrice(
                    variant.price.compareAtAmount,
                    variant.price.currency
                  )}
                </p>
              )}
            </div>

            <div className="mb-6">
              <p className="text-neutral-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Dimensions */}
            {variant.dimensions && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Dimensions</h3>
                <p className="text-neutral-600">
                  {formatDimensions(variant.dimensions)}
                </p>
              </div>
            )}

            {/* Materials */}
            {product.materials.length > 0 && (
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Materials</h3>
                <ul className="list-disc list-inside text-neutral-600">
                  {product.materials.map((material, idx) => (
                    <li key={idx}>
                      {material.name}
                      {material.percentage && ` (${material.percentage}%)`}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Availability */}
            <div className="mb-6">
              <p className="font-semibold mb-2">Availability</p>
              <p className="text-neutral-600">
                {product.availability === 'READY_TO_SHIP'
                  ? 'Ready to Ship (5-7 days)'
                  : 'Made to Order (4-6 weeks)'}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-6">
              <AddToCartButton product={product} variant={variant} />
              <AddToWishlistButton product={product} variant={variant} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

