import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://etcetc.vercel.app'),
  title: "etc.etc",
  description: "Human-focused apps and websites: software that helps you get back to living your life.",
  openGraph: {
    title: "etc.etc",
    description: "Human-focused apps and websites: software that helps you get back to living your life.",
    siteName: "etc.etc",
  },
  twitter: {
    card: "summary_large_image",
    title: "etc.etc",
    description: "Human-focused apps and websites: software that helps you get back to living your life.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
