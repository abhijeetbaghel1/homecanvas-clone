'use client';

import { useEffect, useState } from 'react';
import { getCollections } from '@/lib/db';
import Container from '@/components/common/Container';
import SectionHeader from '@/components/common/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';

interface Collection {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string | null;
}

export default function CollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getCollections();
        setCollections(data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div className="py-12">
      <Container>
        <SectionHeader
          title="Our Collections"
          subtitle="Curated designs for every space and style"
        />
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/3] bg-neutral-100 rounded-lg mb-4"></div>
                <div className="h-6 bg-neutral-100 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-neutral-100 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100 mb-4">
                  {collection.image ? (
                    <div className="w-full h-full relative">
                      <Image
                        src={collection.image}
                        alt={collection.title}
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 3}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/images/placeholder.jpg';
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center">
                      <span className="text-neutral-400 text-sm font-medium">No image</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-accent-walnut transition-colors">
                  {collection.title}
                </h3>
                <p className="text-neutral-600">{collection.description}</p>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

