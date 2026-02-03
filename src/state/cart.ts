import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product, Variant } from '@/lib/types';

interface CartState {
  items: CartItem[];
  addItem: (product: Product, variant: Variant, quantity?: number) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clear: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, variant, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.productId === product.id && item.variantId === variant.id
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.productId === product.id && item.variantId === variant.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                productId: product.id,
                variantId: variant.id,
                quantity,
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
      updateQuantity: (productId, variantId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, variantId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId && item.variantId === variantId
              ? { ...item, quantity }
              : item
          ),
        }));
      },
      clear: () => {
        set({ items: [] });
      },
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.variant.price.amount * item.quantity,
          0
        );
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);

