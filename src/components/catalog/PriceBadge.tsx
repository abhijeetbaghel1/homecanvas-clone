interface PriceBadgeProps {
  price: number;
  compareAtPrice: number;
}

export default function PriceBadge({ price, compareAtPrice }: PriceBadgeProps) {
  const discount = Math.round(((compareAtPrice - price) / compareAtPrice) * 100);

  return (
    <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
      {discount}% OFF
    </span>
  );
}

