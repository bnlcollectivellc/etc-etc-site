'use client';

import { useEffect, useState } from 'react';
import { TikTokIcon, InstagramIcon, XIcon } from './SocialIcons';

export default function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past the description (roughly 200px)
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/5 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="w-full px-6 py-4 md:px-12 lg:px-16 flex items-center justify-between">
        <span className="text-lg tracking-tight">etc.etc</span>
        <div className="flex items-center gap-4">
          <a
            href="https://www.tiktok.com/@etc.etc950"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:opacity-60 transition-opacity"
          >
            <TikTokIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/etc.etc702"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-60 transition-opacity"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/etcetc702"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:opacity-60 transition-opacity"
          >
            <XIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
