import { Metadata } from 'next';
import { siteConfig } from '@/lib/config/site';

interface GenerateMetadataParams {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  image,
  type = 'website',
  noIndex = false,
}: GenerateMetadataParams): Metadata {
  const siteName = siteConfig.brand;
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const metaDescription = description || siteConfig.tagline;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const ogImage = image || `${siteUrl}/og-image.jpg`;

  return {
    title: fullTitle,
    description: metaDescription,
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: siteUrl,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
      type,
      locale: siteConfig.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

