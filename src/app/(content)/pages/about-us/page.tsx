import Container from '@/components/common/Container';
import { generateMetadata } from '@/lib/seo/meta';

export const metadata = generateMetadata({
  title: 'About Us',
  description: 'Learn about our story and mission',
});

export default function AboutUsPage() {
  return (
    <div className="py-12">
      <Container size="lg">
        <h1 className="text-4xl font-serif font-bold mb-6">Our Story</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            At HomeCanvas, we believe that furniture is more than just functional
            objects—they are the foundation of your home&apos;s story. Our journey
            began with a simple vision: to bring thoughtfully designed, handcrafted
            furniture to homes across India.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Every piece in our collection is carefully curated, combining timeless
            design with quality craftsmanship. We work with skilled artisans who
            share our passion for creating furniture that stands the test of time.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Our mission is to help you create spaces that reflect your personality
            and bring joy to your everyday life. Welcome to HomeCanvas—where
            thoughtful design meets joyful living.
          </p>
        </div>
      </Container>
    </div>
  );
}

