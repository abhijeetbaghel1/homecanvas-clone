import Container from '@/components/common/Container';
import { generateMetadata } from '@/lib/seo/meta';

export const metadata = generateMetadata({
  title: 'Privacy Policy',
  description: 'Our privacy policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12">
      <Container size="lg">
        <h1 className="text-4xl font-serif font-bold mb-6">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Last updated: {new Date().toLocaleDateString('en-IN')}
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            At HomeCanvas, we are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your
            personal information.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            We collect information that you provide directly to us, such as when
            you create an account, make a purchase, or contact us for support.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            We use the information we collect to process your orders, communicate
            with you, and improve our services.
          </p>
        </div>
      </Container>
    </div>
  );
}

