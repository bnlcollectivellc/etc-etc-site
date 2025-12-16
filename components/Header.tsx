import { TikTokIcon, InstagramIcon } from './SocialIcons';

export default function Header() {
  return (
    <header className="w-full px-6 py-8 md:px-12 lg:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-start">
        {/* Column 1: Wordmark */}
        <div>
          <h1 className="text-2xl md:text-3xl tracking-tight">etc.etc</h1>
        </div>

        {/* Column 2: Description (spans 2 columns on desktop) */}
        <div className="col-span-1 md:col-span-2">
          <p className="text-2xl md:text-3xl text-black/70 leading-tight tracking-tight">
            Human-focused apps and websites: software that helps you get back to living your life.
          </p>
        </div>

        {/* Column 4: Social icons */}
        <div className="flex items-start justify-end gap-4">
          <a
            href="https://tiktok.com/@etc.etc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:opacity-60 transition-opacity"
          >
            <TikTokIcon className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/etc.etc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-60 transition-opacity"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
