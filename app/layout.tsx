import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { asset } from "@/lib/asset";
import { profile } from "@/data/portfolio";
import "./globals.css";

// Fuentes empaquetadas con npm: el build no depende de Google Fonts.
const serif = localFont({
  src: [
    { path: "../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2", style: "normal" },
    { path: "../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2", style: "italic" },
  ],
  weight: "400",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thechec.github.io"),
  title: `${profile.name} · ${profile.role}`,
  description: profile.summary,
  icons: { icon: asset(profile.avatar) },
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description: profile.summary,
    images: [asset(profile.avatar)],
  },
};

export const viewport: Viewport = { themeColor: "#0c0c0d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
