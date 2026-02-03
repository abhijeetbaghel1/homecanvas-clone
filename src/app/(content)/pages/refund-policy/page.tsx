import Container from '@/components/common/Container';
import { generateMetadata } from '@/lib/seo/meta';

export const metadata = generateMetadata({
  title: 'Refund Policy',
  description: 'Our refund and return policy',
});

export default function RefundPolicyPage() {
  return (
    <div className="py-12">
      <Container size="lg">
        <h1 className="text-4xl font-serif font-bold mb-6">Refund Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Last updated: {new Date().toLocaleDateString('en-IN')}
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            We want you to be completely satisfied with your purchase. If you are
            not satisfied, you may return eligible items within 7 days of delivery
            for a full refund.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Return Conditions</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Items must be in their original condition, unused, and in their
            original packaging. Custom-made items are not eligible for return.
          </p>
        </div>
      </Container>
    </div>
  );
}

