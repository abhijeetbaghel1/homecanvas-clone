import Link from 'next/link';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl font-serif font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-neutral-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/">
            <Button size="lg">Go Home</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}


