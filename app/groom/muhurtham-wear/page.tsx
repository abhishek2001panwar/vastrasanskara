'use client';
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const collection = {
  slug: "royal-hemme",
  name: "Royal Hemme",
  cover: "/images/groom/muhurtham-wear/royal-hemme/cover.jpeg",
};

export default function MuhurthamWearPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F2] text-[#1B1917] antialiased selection:bg-[#1B1917] selection:text-[#F9F7F2]">
      
      {/* Top Header */}
      {/* <header className="flex items-center justify-between px-6 py-8 sm:px-12 md:px-16">
        <Link
          href="/groom"
          className="font-sans text-[9px] uppercase tracking-[0.38em] text-[#1B1917]/40 transition-colors duration-300 hover:text-[#1B1917]"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          The Groom
        </Link>

        <span
          className="font-sans text-[9px] uppercase tracking-[0.38em] text-[#1B1917]/30"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Muhurtham Wear
        </span>
      </header> */}

      {/* Main Showcase */}
      <section className="px-6 pb-28 pt-6 sm:px-12 md:px-16 md:pt-10">
        <div className="mx-auto max-w-[640px]">
          
          {/* Editorial Display Heading */}
          <div className="mb-14 text-center md:mb-5">
            <span
              className="inline-block font-sans text-[9px] uppercase tracking-[0.45em] text-[#1B1917]/45 mb-3"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Collection . 
            </span>

            {/* High-fashion Cormorant display title */}
            <h1
              className="text-[48px] sm:text-[64px] md:text-[76px] upp font-light leading-[0.98] tracking-[-0.015em] text-[#1B1917]"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Royal <span className="italic font-normal">Hemme</span>
            </h1>
          </div>

          {/* Portrait Image Stage */}
          <div className="group">
            <Link
              href={`/groom/muhurtham-wear/${collection.slug}`}
              className="relative block aspect-[3/4] w-full overflow-hidden bg-[#ECE6DC] shadow-sm"
            >
              <Image
                src={collection.cover}
                alt={collection.name}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 640px"
                className="object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
              />

              {/* Gentle ambient luxury vignette */}
              <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </Link>

            {/* Caption & Action Bar */}
            <div className="mt-7 flex items-center justify-between border-b border-[#1B1917]/15 pb-5">
              <div>
               
                <span
                  className="mt-1 block text-[22px] font-normal tracking-wide text-[#1B1917]"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Royal Hemme
                </span>
              </div>

              <Link
                href={`/groom/muhurtham-wear/${collection.slug}`}
                className="group/btn inline-flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.32em] text-[#1B1917] transition-colors"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                <span>View Edit</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1B1917]/25 transition-all duration-500 group-hover/btn:border-[#1B1917] group-hover/btn:bg-[#1B1917] group-hover/btn:text-[#F9F7F2]">
                  <ArrowUpRight size={13} strokeWidth={1.2} />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </section>
      {/* Responsive Stroke Helper */}
      <style jsx>{`
        @media (max-width: 640px) {
          .stroke-heading {
            -webkit-text-stroke: 0.8px #1B1917 !important;
          }
        }
      `}</style>
    </main>
  );
}