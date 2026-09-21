import type { Metadata } from "next";
import "./globals.css";

import { Cormorant_Garamond, Inter, Montserrat } from "next/font/google";
import Navbar from "./components/navbar";
import Top from "./components/sections/top";
export const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  
});
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-montserrat",
  display: "swap",
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
      className={`${sans.variable} ${serif.variable} ${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Top />
        <Navbar />
        {children}</body>
    </html>
  );
}
