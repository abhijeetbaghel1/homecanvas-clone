import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { WishlistItem, Product, Variant } from '@/lib/types';

interface WishlistState {
  items: WishlistItem[];
  addItem: (product: Product, variant: Variant) => void;
  removeItem: (productId: string, variantId: string) => void;
  isInWishlist: (productId: string, variantId: string) => boolean;
  clear: () => void;
}

export const useWishlist = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, variant) => {
        set((state) => {
          const exists = state.items.some(
            (item) => item.productId === product.id && item.variantId === variant.id
          );

          if (exists) {
            return state;
          }

          return {
            items: [
              ...state.items,
              {
                productId: product.id,
                variantId: variant.id,
                product,
                variant,
              },
            ],
          };
        });
      },
      removeItem: (productId, variantId) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.productId === productId && item.variantId === variantId)
          ),
        }));
      },
      isInWishlist: (productId, variantId) => {
        return get().items.some(
          (item) => item.productId === productId && item.variantId === variantId
        );
      },
      clear: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'wishlist-storage',
    }
  )
);

