import Container from '@/components/common/Container';
import { generateMetadata } from '@/lib/seo/meta';

export const metadata = generateMetadata({
  title: 'In the News',
  description: 'Press coverage and media mentions',
});

export default function InTheNewsPage() {
  return (
    <div className="py-12">
      <Container size="lg">
        <h1 className="text-4xl font-serif font-bold mb-6">In the News</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-neutral-700 leading-relaxed">
            Check back soon for our latest press coverage and media mentions.
          </p>
        </div>
      </Container>
    </div>
  );
}

