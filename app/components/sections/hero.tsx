"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#e0d3c5] min-h-[500px] lg:min-h-[580px] flex items-center select-none">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full lg:w-[65%] h-full">
          <Image
            src="/bridenew.webp"
            alt="Bespoke Couture - Heritage Redefined"
            fill
            priority
            className="object-cover object-right lg:object-center"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
          
          {/* Subtle Horizontal Gradient overlay to blend background smoothly into text on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#e0d3c5] via-[#e0d3c5]/70 lg:via-[#e0d3c5]/40 to-transparent w-full lg:w-[50%]" />
        </div>
      </div>

      {/* Main Content Overlay Layer */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-12 flex items-center">
        
        {/* Left Side Pagination / Number Selector */}
        <div className="hidden lg:flex flex-col items-center gap-2 text-[#5e5248] text-[11px] font-medium mr-12 shrink-0">
          <button className="text-[#2b241f] font-semibold">01</button>
          <div className="w-3 h-[1px] bg-[#9e8b7a]" />
          <button className="opacity-60 hover:opacity-100 transition-opacity">02</button>
          <button className="opacity-60 hover:opacity-100 transition-opacity">03</button>
        </div>

        {/* Text Content */}
        <div className="max-w-xl">
          
          {/* Small Top Tagline */}
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#6b5d50]">
            BESPOKE COUTURE
          </p>

          {/* Headline */}
          <h1 className="font-serif text-[42px] sm:text-[56px] lg:text-[68px] leading-[1.02] text-[#1c1714] font-normal tracking-tight">
            HERITAGE.
            <br />
            REDEFINED.
          </h1>

          {/* Divider Line with Center Diamond Icon */}
          <div className="my-5 flex items-center gap-3 w-full max-w-[340px]">
            <div className="h-[1px] flex-1 bg-[#b39f8d]" />
            <div className="w-1.5 h-1.5 bg-[#8c7460] rotate-45 shrink-0" />
            <div className="h-[1px] flex-1 bg-[#b39f8d]" />
          </div>

          {/* Description Text */}
          <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#52463b] max-w-md">
            Timeless traditions. Intricate craftsmanship.
            <br className="hidden sm:inline" />
            Modern luxury - curated for your most cherished moments.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Primary Button */}
          
<button className="bg-[#8B0000] hover:bg-[#6e2220] text-[#F6F1EB] border border-[#8C2E2C] px-8 py-3.5 text-xs font-medium tracking-widest uppercase transition-colors shadow-sm">
  Explore Collection
</button>

            {/* Secondary Outline Button */}
            <button className="border border-[#3e342c] hover:bg-[#3e342c] hover:text-white text-[#2c241f] px-6 py-3 text-[11px] font-medium tracking-widest uppercase transition-colors">
              BOOK A CONSULTATION
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}