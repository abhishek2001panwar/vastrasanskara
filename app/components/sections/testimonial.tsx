"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  reviewInfo?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I had given my bridal blouse and saree here, the blouse was super perfect!! Amazing work and fitting. The entire idea and work was made by them only. I was super impressed! Even my fiancé's muhurtham dress was given here for stitching and embroidery. That was also on point. We are definitely sure we will come back to Ajith for any events further. Totally worth the money!!",
    author: "Charitha Urs",
    location: "Local Guide",
    reviewInfo: "23 reviews • 8 photos",
  },
  {
    id: 2,
    quote:
      "Ajit's signature style combines rich Indian heritage with a modern, fashion-forward sensibility, making his pieces ideal for weddings, festive events, and high-profile occasions. I am really glad to have my dresses for my wedding fixation ceremony from Ajit.",
    author: "Amal Thankachan",
    location: "Verified Customer",
    reviewInfo: "3 reviews • 11 photos",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Scroll detection trigger
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  // Next testimonial
  const handleNext = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  // Previous testimonial
  const handlePrev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 px-6 overflow-hidden"
    >
      <div className="max-w-4xl w-full mx-auto text-center flex flex-col items-center">

        {/* ================= TOP TAGLINE ================= */}
        <motion.span
          initial={{ opacity: 0, y: -15 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -15 }
          }
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-xs tracking-[0.25em] uppercase text-[#8C7355] font-semibold mb-6"
        >
          Client Experiences
        </motion.span>

        {/* ================= DECORATIVE QUOTE ICON ================= */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  scale: 0.8,
                }
          }
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mb-5 text-[#D4AF37]/80"
        >
          <Quote
            size={42}
            className="stroke-[1.5]"
          />
        </motion.div>

        {/* ================= TESTIMONIAL DISPLAY ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="min-h-[380px] sm:min-h-[320px] lg:min-h-[280px] flex items-center justify-center relative w-full"
        >
          <AnimatePresence mode="wait">

            <motion.div
              key={current.id}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="flex flex-col items-center w-full max-w-3xl"
            >

              {/* ================= REVIEW TEXT ================= */}
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-neutral-800 leading-relaxed font-normal mb-8">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* ================= REVIEWER INFO ================= */}
              <div className="flex flex-col items-center gap-2">

                <h4 className="text-sm font-medium tracking-[0.15em] uppercase text-neutral-900">
                  {current.author}
                </h4>

                <p className="text-xs text-neutral-500 tracking-wide">
                  {current.location}
                
                </p>

              </div>

            </motion.div>

          </AnimatePresence>
        </motion.div>

        {/* ================= NAVIGATION CONTROLS ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="flex items-center gap-6 mt-8"
        >

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="p-2 rounded-full text-[#8C7355] hover:text-neutral-900 hover:bg-[#EDE7DF] transition-all focus:outline-none"
          >
            <ChevronLeft size={20} />
          </button>

          {/* ================= DOTS ================= */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() =>
                  setCurrentIndex(index)
                }
                aria-label={`Go to review ${
                  index + 1
                }`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-6 bg-[#8C7355]"
                    : "w-2 bg-[#D8CFC4] hover:bg-[#A89885]"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="p-2 rounded-full text-[#8C7355] hover:text-neutral-900 hover:bg-[#EDE7DF] transition-all focus:outline-none"
          >
            <ChevronRight size={20} />
          </button>

        </motion.div>

      </div>
    </section>
  );
}