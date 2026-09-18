"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export interface GalleryImage {
  id?: string;
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
}

interface CreativeGalleryProps {
  title: string;
  images?: GalleryImage[];
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    clipPath: "inset(8% 0% 0% 0%)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function CreativeGallery({
  title,
  images = [],
}: CreativeGalleryProps) {
  const safeImages = Array.isArray(images) ? images : [];
  const totalCount = safeImages.length;

  return (
    <div className="relative min-h-screen w-full bg-[#FBFBFA] pb-44 text-neutral-950 selection:bg-neutral-200">
      {/* Editorial Header */}
      <header className="relative overflow-hidden px-4 pb-20 pt-28 text-center md:pb-28 md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 block font-sans text-[10px] uppercase tracking-[0.45em] text-neutral-400"
        >
          Vastrasanskra Atelier
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl font-light tracking-tight text-neutral-950 sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 h-[1px] w-14 bg-neutral-300"
        />
      </header>

      {/* Main Exhibition Grid */}
      <div className="mx-auto max-w-[1550px] px-4 sm:px-6 md:px-10 lg:px-16">
        {safeImages.length > 0 ? (
          <div className="[grid-auto-flow:dense] grid grid-cols-1 gap-x-8 gap-y-20 sm:gap-x-12 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-32">
            {safeImages.map((img, idx) => {
              const isLandscape = img.orientation === "landscape";

              // 8-col landscape, 4-col portrait
              const gridSpan = isLandscape
                ? "lg:col-span-8 md:col-span-2"
                : "lg:col-span-4 md:col-span-1";

              // Subtle organic vertical stagger for asymmetry without cropping
              const shiftClass =
                idx % 4 === 1
                  ? "lg:-translate-y-8"
                  : idx % 4 === 3
                  ? "lg:translate-y-8"
                  : "";

              return (
                <motion.div
                  key={img.id || img.src || idx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className={`group relative ${gridSpan} ${shiftClass}`}
                >
                  {/* Clean Edge Frame - No box, padding, or shadows */}
                  <div
                    className={`relative w-full overflow-hidden bg-neutral-200/50 ${
                      isLandscape ? "aspect-[16/10]" : "aspect-[4/5.2]"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      quality={95}
                      sizes={
                        isLandscape
                          ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1550px) 70vw, 1200px"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1550px) 35vw, 600px"
                      }
                      // object-top prevents model heads/turbans from ever being cut off
                      className="object-cover object-top transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                      loading={idx < 4 ? "eager" : "lazy"}
                      priority={idx < 2}
                    />

                    {/* Subtle warm luxury sheen on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-neutral-900/0 transition-colors duration-700 group-hover:bg-neutral-900/[0.03]" />
                  </div>

                  {/* Atelier Look Label (e.g., Look 01 / 31) */}
                  <div className="mt-3.5 flex items-center justify-between font-sans text-[11px] tracking-[0.2em] text-neutral-400">
                  
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="py-24 text-center font-serif text-lg italic text-neutral-400">
            No garments currently cataloged in this collection.
          </div>
        )}
      </div>
    </div>
  );
}