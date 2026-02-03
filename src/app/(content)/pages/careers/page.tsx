import Container from '@/components/common/Container';
import { generateMetadata } from '@/lib/seo/meta';

export const metadata = generateMetadata({
  title: 'Careers',
  description: 'Join our team',
});

export default function CareersPage() {
  return (
    <div className="py-12">
      <Container size="lg">
        <h1 className="text-4xl font-serif font-bold mb-6">Careers</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            We&apos;re always looking for talented individuals to join our team. If
            you&apos;re passionate about design, craftsmanship, and creating beautiful
            spaces, we&apos;d love to hear from you.
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed">
            Please send your resume and portfolio to{' '}
            <a
              href="mailto:careers@homecanvas.com"
              className="text-accent-walnut hover:underline"
            >
              careers@homecanvas.com
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}

