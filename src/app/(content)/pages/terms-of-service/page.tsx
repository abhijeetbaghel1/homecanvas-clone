import Container from '@/components/common/Container';
import { generateMetadata } from '@/lib/seo/meta';

export const metadata = generateMetadata({
  title: 'Terms of Service',
  description: 'Terms and conditions of use',
});

export default function TermsOfServicePage() {
  return (
    <div className="py-12">
      <Container size="lg">
        <h1 className="text-4xl font-serif font-bold mb-6">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Last updated: {new Date().toLocaleDateString('en-IN')}
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            By accessing and using this website, you agree to be bound by these
            Terms of Service and all applicable laws and regulations.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Use License</h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Permission is granted to temporarily access the materials on
            HomeCanvas&apos;s website for personal, non-commercial use only.
          </p>
        </div>
      </Container>
    </div>
  );
}

