"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-80px" });

  const founderRef = useRef(null);
  const isFounderInView = useInView(founderRef, { once: true, margin: "-80px" });

  const quoteRef = useRef(null);
  const isQuoteInView = useInView(quoteRef, { once: true, margin: "-80px" });

  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (customDelay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: customDelay, ease: [0.16, 1, 0.3, 1] as const }
    })
  };

  return (
    <div className="bg-[#e0d3c5] text-[#1c1714] min-h-screen selection:bg-[#8B0000] selection:text-[#F6F1EB] overflow-x-hidden">
      
      {/* ================= HEADER BANNER ================= */}
      <section className="relative w-full py-10 px-6 sm:px-12 bg-[#e0d3c5] border-b border-[#c8b8a8]/40">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-block"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#6b5d50] px-4 py-1.5 border border-[#b39f8d]/40 rounded-full">
              ABOUT
            </p>
          </motion.div>
          
          {/* Logo Brand Name Header */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
            className="flex justify-center items-center py-2"
          >
            <div className="relative w-[260px] sm:w-[360px] h-[170px] sm:h-[280px]">
              <Image
                src="/logo.png" 
                alt="Vastrasanskara Logo"
                fill
                priority
                className="object-cover filter"
              />
            </div>
          </motion.div>
          
          {/* Creative Minimalist Animated Line */}
           {/* Creative Minimalist Animated Line */}

          <motion.div

            initial={{ scaleX: 0, opacity: 0 }}

            animate={{ scaleX: 1, opacity: 1 }}

            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}

            className="my-6 flex items-center justify-center gap-3 origin-center"

          >

            <div className="w-16 h-[1px] bg-[#b39f8d]" />

            <div className="w-1.5 h-1.5 bg-[#8B0000] rotate-45 shrink-0" />

            <div className="w-16 h-[1px] bg-[#b39f8d]" />

          </motion.div>



          <motion.p

            initial="hidden"

            animate="visible"

            custom={0.4}

            variants={fadeUp}

            className="text-xs sm:text-sm text-[#52463b] tracking-[0.25em] uppercase font-light"

          >

              Established 2014 • Bengaluru

          </motion.p>
        

        
        </div>
      </section>

      {/* ================= BRAND STORY SECTION ================= */}
     {/* ================= BRAND STORY SECTION ================= */}
      <section ref={storyRef} className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Main Philosophy & Narrative */}
          <motion.div 
            initial="hidden"
            animate={isStoryInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0.1}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            <div className="space-y-3">
              <span className="text-[15px] tracking-[0.3em] uppercase text-[#8B0000] font-medium block">
                OUR PHILOSOPHY
              </span>
            
            </div>
            
            <div className="w-12 h-[1px] bg-[#8c7460]" />

            <div className="space-y-4 sm:space-y-5 text-[#52463b] text-sm sm:text-base leading-relaxed font-light">
              <p>
                <strong className="font-normal text-[#1c1714]">Vastrasanskara</strong> began with a fascination for what Indian clothing could become. Our work comes from a deep admiration for Indian textiles, silhouettes and timeless craftsmanship, and we believe heritage lives through its ability to evolve.
              </p>
              <p>
                We create bridalwear and groom’s wear, sarees, blouses, lehengas, menswear and occasional wear. At the heart of every piece is an understanding of the textile, the silhouette, the nuances of proportion and the singularity of the person it is created for. From the hand that shapes it to the finest detailing that completes it, the craft is intrinsic to the character of every garment.
              </p>
              <p>
                For us, the making matters as much as the final expression. Every textile has its own temperament. Some fall with fluidity, some gather into graceful folds, while others hold their form with quiet strength. We let the garment respond to that nature, allowing it to move with the body while retaining its character.
              </p>
              <p>
                A tradition, reimagined through a contemporary eye. A time-honoured technique can assume a new character. A familiar silhouette can be given an entirely different presence through proportion alone. A traditional textile can acquire a new character through the cut, the soul of the craft and the art of how it is worn.
              </p>
              <p>
                At times, the most beautiful designs are the ones waiting to unfold. At the heart of Vastrasanskara lies an enduring curiosity to question, reinterpret, and let tradition evolve.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Fully Responsive & Sticky Essence Feature Box */}
          <motion.div 
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={isStoryInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="relative w-full bg-[#f6f1eb] p-6 sm:p-8 lg:p-10 border border-[#c8b8a8] shadow-xl sm:shadow-2xl overflow-hidden group">
              {/* Contained decorative glows */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#8B0000]/5 rounded-full blur-xl pointer-events-none transition-transform duration-700 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#8B0000]/10 to-transparent pointer-events-none" />
              
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8B0000] block mb-3 sm:mb-4 font-medium">
                THE ESSENCE
              </span>
              
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1714] mb-3 sm:mb-4">
                Effortless Presence
              </h3>
              
              <div className="space-y-3.5 text-xs sm:text-sm text-[#52463b] leading-relaxed mb-6 sm:mb-8 font-light">
                <p>
                  Luxury, to us, is not about excess. It is about timeless craftsmanship you get to experience and a fitting that feels effortless.
                </p>
                <p>
                  Most importantly, what we create should feel right when it is worn. It should become part of the person, rather than overpower them.
                </p>
              </div>

              {/* Bottom tag bar */}
              <div className="pt-4 sm:pt-6 border-t border-[#c8b8a8]/60 flex flex-wrap gap-2 items-center justify-between text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#2c241f] font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000] shrink-0" />
                  Vastrasanskara
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= CINEMATIC QUOTE BREAK ================= */}
      <section ref={quoteRef} className="py-16 bg-[#d8c8b6]/40 border-y border-[#c8b8a8]/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isQuoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-lg sm:text-xl lg:text-2xl text-[#2c241f] italic leading-relaxed"
          >
            &ldquo;Sometimes you start with a fabric, sometimes with a silhouette, sometimes with just an idea. The alchemy lies in discovering the mood it carries, the presence it creates, and the aura that slowly becomes its own.&rdquo;
          </motion.p>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isQuoteInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="block mt-4 text-[10px] tracking-[0.3em] uppercase text-[#8B0000] font-medium"
          >
             - Ajit Sree Ravi
          </motion.span>
        </div>
      </section>

      {/* ================= FOUNDER SECTION ================= */}
      <section ref={founderRef} className="bg-[#f6f1eb] py-16 px-6 sm:px-12 border-b border-[#c8b8a8]/40">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            animate={isFounderInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#6b5d50] mb-3">
              THE VISIONARY BEHIND THE BRAND
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1c1714]">
              The Founder
            </h2>
            <div className="my-5 flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-[#b39f8d]" />
              <div className="w-1.5 h-1.5 bg-[#8B0000] rotate-45" />
              <div className="w-12 h-[1px] bg-[#b39f8d]" />
            </div>
          </motion.div>

          {/* Founder Bio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Founder Profile Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={isFounderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 bg-[#e0d3c5] p-8 sm:p-10 border border-[#c8b8a8] shadow-lg sticky top-8"
            >
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1c1714] mb-1">
                Ajit Sree Ravi
              </h3>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8B0000] mb-6">
                Founder & Creative Director
              </p>

              <div className="w-full h-[1px] bg-[#c8b8a8] my-6" />

              <p className="text-xs sm:text-sm text-[#52463b] tracking-wider uppercase font-medium leading-relaxed">
                Styling & Couture Practice <span className="text-[#1c1714]">• Since 2014</span>
              </p>

              <div className="mt-8 pt-6 border-t border-[#c8b8a8]/60 text-[11px] tracking-[0.2em] uppercase text-[#6b5d50]">
                Cinema • Weddings • Bespoke
              </div>
            </motion.div>

            {/* Founder Story Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={isFounderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 text-[#52463b] text-sm sm:text-base leading-relaxed font-light"
            >
              <p>
                Ajit Sree Ravi began his journey in styling for cinema and couture in 2014. Over a decade, his work across cinema, weddings and bespoke clothing has shaped the way he perceives fashion.
              </p>

              <p>
                For Ajit, clothing has always been closely connected to character and presence. The way someone carries themselves, the occasion, the setting and the finer details that make them distinct, all influence the way he approaches a garment.
              </p>

              <p>
                His work in cinema and couture has given him a particular interest in how clothing behaves beyond the silhouette. His work is rooted in rich Indian textiles and timeless craftsmanship, exploring how tradition can be redefined. A shift in silhouette, an unexpected combination of textures or a subtle change in proportion can transform the entire character of a garment.
              </p>

              <p>
                Over time, this way of working became the foundation for Vastrasanskara. A design practice where rich Indian textiles and craftsmanship meet a more personal approach to silhouette without being dictated by trends.
              </p>

              <p>
                The story begins with a conversation and an understanding of the persona, unfolding through fabric, the fitting, and all the gestures that shape the journey along the way. Each becomes part of the Vastrasanskara experience.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section ref={ctaRef} className="py-24 sm:py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-[500px] h-[200px] bg-[#c8b8a8]/30 blur-3xl rounded-full" />
        </div>

        <motion.div 
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="max-w-2xl mx-auto space-y-6 relative z-10"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#6b5d50]">
            EXPERIENCE BESPOKE LUXURY
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1c1714]">
            Begin Your Couture Journey With Us
          </h2>
          <div className="pt-4">
            <Link
              href="mailto:vastrasanskara@gmail.com?subject=Inquiry%20Regarding%20Couture%20Collection"
              className="inline-block bg-[#8B0000] hover:bg-[#6e2220] text-[#F6F1EB] border border-[#8C2E2C] px-10 py-4 text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              Email Us
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}