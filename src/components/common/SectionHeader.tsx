import { ReactNode } from 'react';
import { cn } from '@/lib/utils/format';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  actions?: ReactNode;
}

export default function SectionHeader({
  title,
  subtitle,
  className,
  actions,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-8', className)}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif font-bold text-fg">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-lg text-neutral-600">{subtitle}</p>
          )}
        </div>
        {actions && <div>{actions}</div>}
      </div>
    </div>
  );
}

