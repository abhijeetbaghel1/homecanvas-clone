import Container from '@/components/common/Container';
import { generateMetadata } from '@/lib/seo/meta';

export const metadata = generateMetadata({
  title: 'Shipping Policy',
  description: 'Our shipping and delivery policy',
});

export default function ShippingPolicyPage() {
  return (
    <div className="py-12">
      <Container size="lg">
        <h1 className="text-4xl font-serif font-bold mb-6">Shipping Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            We offer free shipping PAN India on all orders. All prices are
            inclusive of taxes.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Delivery Times</h2>
          <ul className="list-disc list-inside text-lg text-neutral-700 space-y-2">
            <li>Ready to Ship items: 5-7 business days</li>
            <li>Made to Order items: 4-6 weeks</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

