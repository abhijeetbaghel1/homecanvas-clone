'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/config/site';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (!siteConfig.announcement.enabled || dismissed) {
    return null;
  }

  return (
    <div className="bg-accent-walnut text-white py-2 relative">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>{siteConfig.announcement.text}</p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

