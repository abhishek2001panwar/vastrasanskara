import type { Metadata } from "next";
import "./globals.css";

import { Cormorant_Garamond, Inter } from "next/font/google";
export const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "vastrasanskara",
  description: "VASTRASANSKARA - Bespoke Couture, Bridal Wear, and Luxury Fashion. Redefining heritage with timeless elegance and personalized craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
