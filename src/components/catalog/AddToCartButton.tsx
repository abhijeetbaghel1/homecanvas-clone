'use client';

import { useCart } from '@/state/cart';
import Button from '@/components/common/Button';
import type { Product, Variant } from '@/lib/types';
import { useState } from 'react';

interface AddToCartButtonProps {
  product: Product;
  variant: Variant;
}

export default function AddToCartButton({
  product,
  variant,
}: AddToCartButtonProps) {
  const addItem = useCart((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addItem(product, variant, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Button onClick={handleClick} size="lg" className="flex-1">
      {added ? 'Added to Cart!' : 'Add to Cart'}
    </Button>
  );
}

