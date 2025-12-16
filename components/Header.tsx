import { TikTokIcon, InstagramIcon } from './SocialIcons';

export default function Header() {
  return (
    <header className="w-full px-6 py-8 md:px-12 lg:px-16">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl md:text-3xl tracking-tight">etc.etc</h1>
          <p className="text-4xl md:text-5xl text-black/70 max-w-2xl leading-tight">
            Human-focused apps and websites: software that helps you get back to living your life.
          </p>
        </div>
        <div className="flex items-center gap-4">
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
