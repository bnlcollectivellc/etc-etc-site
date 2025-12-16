import { TikTokIcon, InstagramIcon, XIcon } from './SocialIcons';

export default function Header() {
  return (
    <header className="w-full px-6 py-8 md:px-12 lg:px-16">
      {/* Mobile layout */}
      <div className="md:hidden">
        {/* Row 1: Wordmark + Social icons */}
        <div className="flex items-start justify-between">
          <h1 className="text-2xl tracking-tight">etc.etc</h1>
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
        {/* Row 2: Description */}
        <p className="text-2xl text-black/70 leading-tight tracking-tight mt-4">
          Human-focused apps and websites: software that helps you get back to living your life.
        </p>
      </div>

      {/* Desktop layout: 4-column grid */}
      <div className="hidden md:grid grid-cols-4 gap-8 items-start">
        {/* Column 1: Wordmark */}
        <div>
          <h1 className="text-2xl tracking-tight">etc.etc</h1>
        </div>

        {/* Column 2: Description */}
        <div className="col-span-1 overflow-hidden">
          <p className="text-lg text-black/70 leading-tight tracking-tight break-words">
            Human-focused apps and websites: software that helps you get back to living your life.
          </p>
        </div>

        {/* Column 3: Empty */}
        <div></div>

        {/* Column 4: Social icons */}
        <div className="flex items-start justify-end gap-4">
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
    </header>
  );
}
