"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  outfitType?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "The craftsmanship on my custom sherwani from Vastrasanskara was absolute perfection. The intricate embroidery and tailored fit made me feel truly royal on my big day.",
    author: "Rohan Mehta",
    location: "Delhi, India",
    outfitType: "Custom Sherwani",
  },
  {
    id: 2,
    quote:
      "Finding authentic, high-quality ethnic wear that fits perfectly usually takes weeks. Vastrasanskara delivered elegance beyond expectations with incredible attention to detail.",
    author: "Ananya Sharma",
    location: "Mumbai, India",
    outfitType: "Lehenga Choli",
  },
  {
    id: 3,
    quote:
      "The fabric quality and subtle grace of their menswear collection are unmatched. It’s rare to find traditional wear that balances heritage with modern comfort so effortlessly.",
    author: "Vikramaditya Rao",
    location: "Bengaluru, India",
    outfitType: "Indo-Western Set",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Scroll detection trigger
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-[#FAF8F5] py-10 flex justify-center items-center overflow-hidden"
    >
      <div className="max-w-3xl w-full text-center flex flex-col items-center">
        
        {/* Top Tagline - Fades down on scroll into view */}
        <motion.span 
          initial={{ opacity: 0, y: -15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs tracking-[0.25em] uppercase text-[#8C7355] font-semibold mb-6"
        >
          Client Experiences
        </motion.span>

        {/* Decorative Quote Icon - Scales up on scroll */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-4 text-[#D4AF37]/80"
        >
          <Quote size={40} className="stroke-[1.5]" />
        </motion.div>

        {/* Dynamic Testimonial Display - Reveals on scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="min-h-[180px] sm:min-h-[140px] flex items-center justify-center relative w-full"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              {/* Quote Text */}
              <p className="font-serif italic text-2xl md:text-3xl text-neutral-800 leading-relaxed font-normal mb-6">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex flex-col items-center gap-1">
                <h4 className="text-sm font-medium tracking-wider uppercase text-neutral-900">
                  {current.author}
                </h4>
                <p className="text-xs text-neutral-500 tracking-wide">
                  {current.location} {current.outfitType && `• ${current.outfitType}`}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation & Controls - Fades up last */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex items-center gap-6 mt-10"
        >
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-2 rounded-full text-[#8C7355] hover:text-neutral-900 transition-colors focus:outline-none"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-6 bg-[#8C7355]"
                    : "w-2 bg-[#D8CFC4] hover:bg-[#A89885]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-2 rounded-full text-[#8C7355] hover:text-neutral-900 transition-colors focus:outline-none"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}