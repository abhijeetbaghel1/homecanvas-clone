import { notFound } from 'next/navigation';
import { getLook, getProducts } from '@/lib/db';
import Container from '@/components/common/Container';
import ProductGrid from '@/components/catalog/ProductGrid';
import { generateMetadata as genMeta } from '@/lib/seo/meta';
import type { Metadata } from 'next';

interface LookPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: LookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const look = await getLook(slug);

  if (!look) {
    return genMeta({ title: 'Look Not Found' });
  }

  return genMeta({
    title: look.title,
    description: look.description,
  });
}

export default async function LookPage({ params }: LookPageProps) {
  const { slug } = await params;
  const look = await getLook(slug);

  if (!look) {
    notFound();
  }

  // TypeScript now knows look is not null after the check
  // Using non-null assertion since we've verified look exists above
  const products = await getProducts();
  const title = look!.title;
  const description = look!.description;
  const lookProductIds = look!.products;
  const lookProducts = products.filter((p) => lookProductIds.includes(p.id));

  return (
    <div className="py-12">
      <Container>
        <div className="mb-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-neutral-200 mb-6">
            <div className="w-full h-full bg-neutral-300" />
          </div>
          <h1 className="text-4xl font-serif font-bold mb-4">{title}</h1>
          <p className="text-lg text-neutral-600 max-w-3xl">
            {description}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-bold mb-6">
            Products in this Look
          </h2>
          <ProductGrid products={lookProducts} />
        </div>
      </Container>
    </div>
  );
}

