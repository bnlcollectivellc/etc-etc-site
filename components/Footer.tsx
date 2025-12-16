import { TikTokIcon, InstagramIcon } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 md:px-12 lg:px-16 mt-auto">
      <div className="flex items-center justify-between">
        <span className="text-lg tracking-tight">etc.etc</span>
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
    </footer>
  );
}
