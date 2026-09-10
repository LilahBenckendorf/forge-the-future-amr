'use client';

import { Check, Share2 } from 'lucide-react';
import { useState } from 'react';

export function ShareButton({ compact = false }: { compact?: boolean }) {
  const [shared, setShared] = useState(false);

  async function shareEvent() {
    const shareData = {
      title: 'Forge the Future — Berkeley',
      text: 'Join engineers at The Glade in Berkeley on Thursday, Sep. 10 at 6:00 PM for advanced manufacturing, metallurgy, AI, and robotics. No invitation required.',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShared(true);
        window.setTimeout(() => setShared(false), 2200);
      }
    } catch {
      // Closing the native share sheet is an intentional no-op.
    }
  }

  if (compact) {
    return (
      <button type="button" onClick={shareEvent} className="cursor-pointer transition hover:text-white">
        {shared ? 'Copied' : 'Share'}
      </button>
    );
  }

  return (
    <button type="button" onClick={shareEvent} className="inline-flex h-9 cursor-pointer items-center gap-2 border border-white/20 px-3 text-[10px] font-bold uppercase tracking-[0.14em] transition hover:border-copper hover:bg-copper hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-scan" aria-label="Share this event">
      {shared ? <Check className="h-3.5 w-3.5" /> : <Share2 className="h-3.5 w-3.5" />}
      <span className="hidden sm:inline">{shared ? 'Copied' : 'Share'}</span>
    </button>
  );
}
