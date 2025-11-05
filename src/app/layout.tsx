import type { Metadata } from "next";
import {
  Playfair_Display as PlayfairDisplay,
  Work_Sans as WorkSans,
} from "next/font/google";
import "./globals.css";

const sans = WorkSans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = PlayfairDisplay({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Velvet Brew — Artisanal Coffee & Elevated Moments",
  description:
    "Discover Velvet Brew, a boutique coffee house serving contemporary flavors, experiential tastings, and curated rituals in the heart of the city.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
