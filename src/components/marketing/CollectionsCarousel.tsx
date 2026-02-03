'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import { getCollections } from '@/lib/db';
import type { Collection } from '@/lib/types';

export default function CollectionsCarousel() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setIsLoading(true);
        const data = await getCollections();
        setCollections(data);
      } catch (err) {
        console.error('Failed to load collections:', err);
        setError('Failed to load collections. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (isLoading) {
    return (
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeader
            title="Our Collections"
            subtitle="Curated designs for every space"
          />
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-shrink-0 w-80">
                <div className="aspect-[4/3] bg-neutral-200 rounded-lg mb-4 animate-pulse" />
                <div className="h-6 bg-neutral-200 rounded w-3/4 mb-2 animate-pulse" />
                <div className="h-4 bg-neutral-200 rounded w-1/2 animate-pulse" />
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeader
            title="Our Collections"
            subtitle="Curated designs for every space"
          />
          <div className="text-center py-8 text-red-600">
            {error}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 bg-neutral-50">
      <Container>
        <SectionHeader
          title="Our Collections"
          subtitle="Curated designs for every space"
        />
        {collections.length > 0 ? (
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {collections.map((collection: Collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="flex-shrink-0 w-80 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-200 mb-4">
                  {collection.image ? (
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="320px"
                      priority={false}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/images/placeholder.jpg';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                      <span className="text-neutral-400">No image</span>
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-1 group-hover:text-accent-walnut transition-colors">
                  {collection.title}
                </h3>
                <p className="text-neutral-600 text-sm">{collection.description}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-neutral-600">
            No collections found.
          </div>
        )}
      </Container>
    </section>
  );
}

