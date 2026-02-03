'use client';

import { useEffect } from 'react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">
            Something went wrong!
          </h1>
          <p className="text-neutral-600 mb-8">
            {error.message || 'An unexpected error occurred'}
          </p>
          <Button onClick={reset} size="lg">
            Try again
          </Button>
        </div>
      </Container>
    </div>
  );
}


