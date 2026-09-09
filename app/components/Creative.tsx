"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface GalleryImage {
  id?: string;
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
}

interface CreativeGalleryProps {
  title: string;
  images: GalleryImage[];
}

// Editorial Card Reveal Animation
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    clipPath: "inset(12% 0% 0% 0%)", // Unfolds gently from bottom to top
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 1.1,
      ease: [0.19, 1, 0.22, 1], // Luxury decelerate curve
    },
  },
};

export default function CreativeGallery({ title, images }: CreativeGalleryProps) {
  return (
    <div className="relative w-full min-h-screen bg-[#FDFDFC] text-neutral-950 pb-36">
      {/* Atelier Minimal Header */}
      <header className="relative pt-24 pb-16 md:pt-32 md:pb-24 text-center px-4 overflow-hidden">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="block font-sans text-[10px] uppercase tracking-[0.45em] text-neutral-400 mb-3.5"
        >
          Vastrasanskra Atelier
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-950"
        >
          {title}
        </motion.h1>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="mx-auto mt-6 h-[1px] w-14 bg-neutral-300"
        />
      </header>

      {/* Main Gallery Canvas */}
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-14 sm:gap-x-10 lg:gap-x-14 [grid-auto-flow:dense]">
          {images.map((img, idx) => {
            const isLandscape = img.orientation === "landscape";

            // Grid distribution: landscapes take 8 cols, portraits take 4 cols
            const gridSpan = isLandscape
              ? "lg:col-span-8 md:col-span-2"
              : "lg:col-span-4 md:col-span-1";

            // Organic vertical staggering
            const shiftUp = idx % 3 === 1;
            const shiftDown = idx % 5 === 2;

            return (
              <motion.div
                key={img.id || img.src || idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }} // Triggers when scrolling 60px into view
                className={`group relative ${gridSpan} ${
                  shiftUp ? "lg:-translate-y-6" : ""
                } ${shiftDown ? "lg:translate-y-12" : ""}`}
              >
                {/* Museum Print Plaque Card */}
                <div className="relative bg-white border border-neutral-100 p-2.5 sm:p-3.5 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-700 ease-out">
                  
                  {/* Image Holder with subtle scale on reveal */}
                  <div
                    className={`relative w-full overflow-hidden bg-neutral-100 ${
                      isLandscape ? "aspect-[16/10]" : "aspect-[3/4.4]"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes={
                        isLandscape
                          ? "(max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 1024px) 100vw, 33vw"
                      }
                      className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                      loading={idx < 4 ? "eager" : "lazy"}
                    />

                    {/* Gentle light sheen wash on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-neutral-900/0 transition-colors duration-500 group-hover:bg-neutral-900/[0.04]" />
                  </div>

                  {/* Clean Editorial Caption */}
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}