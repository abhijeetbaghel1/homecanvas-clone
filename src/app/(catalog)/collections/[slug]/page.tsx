import { notFound } from 'next/navigation';
import { getCollection, getProducts, getCollections } from '@/lib/db';
import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import ProductGrid from '@/components/catalog/ProductGrid';
import FiltersPanel from '@/components/catalog/FiltersPanel';
import { generateMetadata as genMeta } from '@/lib/seo/meta';
import type { Metadata } from 'next';

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = await getCollection(slug);

  if (!collection) {
    return genMeta({ title: 'Collection Not Found' });
  }

  return genMeta({
    title: collection.title,
    description: collection.description,
  });
}

export async function generateStaticParams() {
  const collections = await getCollections();
  return collections.map((collection) => ({
    slug: collection.slug,
  }));
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = await getCollection(slug);

  if (!collection) {
    notFound();
  }

  // TypeScript now knows collection is not null after the check
  // Using non-null assertion since we've verified collection exists above
  const products = await getProducts({ collection: slug });
  const title = collection!.title;
  const description = collection!.description;

  return (
    <div className="py-12">
      <Container>
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <FiltersPanel />
          </aside>
          <div className="lg:col-span-3">
            <ProductGrid products={products} />
          </div>
        </div>
      </Container>
    </div>
  );
}

