"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  images: string[];
  altTitle: string;
};

export default function LookImageCarousel({ images, altTitle }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Synchronize active dot with scroll position
  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const scrollPosition = el.scrollLeft;
    const slideWidth = el.offsetWidth;
    if (slideWidth === 0) return;
    const newIndex = Math.round(scrollPosition / slideWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < images.length) {
      setActiveIndex(newIndex);
    }
  }, [activeIndex, images.length]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSlide = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({
      left: index * el.offsetWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToSlide(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < images.length - 1) {
      scrollToSlide(activeIndex + 1);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  if (!images.length) return null;

  return (
    <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px] lg:max-w-[600px] select-none">
      
      {/* =========================================================
          IMAGE FRAME (WITH DESKTOP CENTER OVERLAY ICONS)
      ========================================================= */}
      <div className="relative overflow-hidden bg-stone-200/40 shadow-[0_12px_36px_rgba(0,0,0,0.04)]">
        
        {/* Swipable Carousel Track */}
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]"
        >
          {images.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="w-full shrink-0 snap-center"
            >
              <div className="relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={src}
                  alt={`${altTitle} - Look ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 560px, 600px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Desktop-Only Center Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous image"
              className={`hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-[#FAF8F5]/85 text-stone-800 backdrop-blur-md transition-all duration-300 shadow-sm hover:bg-white hover:scale-105 ${
                activeIndex === 0
                  ? "opacity-0 pointer-events-none"
                  : "opacity-90 active:scale-95"
              }`}
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === images.length - 1}
              aria-label="Next image"
              className={`hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-[#FAF8F5]/85 text-stone-800 backdrop-blur-md transition-all duration-300 shadow-sm hover:bg-white hover:scale-105 ${
                activeIndex === images.length - 1
                  ? "opacity-0 pointer-events-none"
                  : "opacity-90 active:scale-95"
              }`}
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </>
        )}
      </div>

      {/* =========================================================
          CONTROLS BAR
          - Mobile: Arrows on sides + Dots in center
          - Desktop: Only Dots centered (arrows are centered on image)
      ========================================================= */}
      {images.length > 1 && (
        <div className="mt-5 flex items-center justify-between md:justify-center px-3 md:px-0">
          
          {/* Mobile Bottom-Left Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous image"
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 bg-white/80 text-stone-700 transition-all disabled:opacity-20 disabled:pointer-events-none active:scale-95"
          >
            <ArrowLeft size={13} strokeWidth={1.5} />
          </button>

          {/* Indicator Dots */}
          <div className="flex items-center gap-2">
            {images.map((_, dotIdx) => (
              <button
                key={`dot-${dotIdx}`}
                type="button"
                onClick={() => scrollToSlide(dotIdx)}
                aria-label={`Go to photo ${dotIdx + 1}`}
                className="group p-1"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === dotIdx
                      ? "w-6 bg-stone-900"
                      : "w-1.5 bg-stone-300 group-hover:bg-stone-500"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Bottom-Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === images.length - 1}
            aria-label="Next image"
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 bg-white/80 text-stone-700 transition-all disabled:opacity-20 disabled:pointer-events-none active:scale-95"
          >
            <ArrowRight size={13} strokeWidth={1.5} />
          </button>

        </div>
      )}

      {/* Photo Counter */}
      {/* <div className="mt-2 text-center text-[9px] uppercase tracking-[0.3em] text-stone-400">
        {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div> */}

    </div>
  );
}