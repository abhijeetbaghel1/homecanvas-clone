'use client';

import { useWishlist } from '@/state/wishlist';
import Button from '@/components/common/Button';
import type { Product, Variant } from '@/lib/types';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface AddToWishlistButtonProps {
  product: Product;
  variant: Variant;
}

export default function AddToWishlistButton({
  product,
  variant,
}: AddToWishlistButtonProps) {
  const addItem = useWishlist((state) => state.addItem);
  const removeItem = useWishlist((state) => state.removeItem);
  const isInWishlist = useWishlist((state) =>
    state.isInWishlist(product.id, variant.id)
  );

  const handleClick = () => {
    if (isInWishlist) {
      removeItem(product.id, variant.id);
    } else {
      addItem(product, variant);
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant={isInWishlist ? 'secondary' : 'outline'}
      size="lg"
      className="px-4"
    >
      {isInWishlist ? (
        <HeartSolidIcon className="w-5 h-5" />
      ) : (
        <HeartIcon className="w-5 h-5" />
      )}
    </Button>
  );
}

