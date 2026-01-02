import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/site-nav";
import TargetCursor from "@/components/TargetCursor";
import { Footer } from "@/components/footer";
import { SITE_CONFIG } from "@/lib/config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_CONFIG.metadata.title,
  description: SITE_CONFIG.metadata.description,
  icons: {
    icon: [
      { url: "/IOSD.jpg", href: "/IOSD.jpg" },
    ],
  },
  openGraph: {
    title: SITE_CONFIG.metadata.title,
    description: SITE_CONFIG.metadata.description,
    url: "https://iosd.tech",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/IOSD.jpg",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.metadata.title,
    description: SITE_CONFIG.metadata.description,
    images: ["/IOSD.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased dark`}
      >
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
        {children}
        <Footer />
        <SiteNav />
      </body>
    </html>
  );
}
