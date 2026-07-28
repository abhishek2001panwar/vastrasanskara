"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-80px" });

  const founderRef = useRef(null);
  const isFounderInView = useInView(founderRef, { once: true, margin: "-80px" });

  const quoteRef = useRef(null);
  const isQuoteInView = useInView(quoteRef, { once: true, margin: "-80px" });

  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  // Fixed TypeScript-compatible Framer Motion variants
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
      <section className="relative w-full py-16 px-6 sm:px-12 bg-[#e0d3c5] border-b border-[#c8b8a8]/40">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-block"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#6b5d50] px-4 py-1.5 border border-[#b39f8d]/40 rounded-full">
              ESTABLISHED 2016 • BENGALURU
            </p>
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-[#1c1714] font-normal tracking-tight"
          >
            ABOUT VASTRASANSKARA
          </motion.h1>
          
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
            Heritage Redefined
          </motion.p>
        </div>
      </section>

      {/* ================= BRAND STORY SECTION ================= */}
      <section ref={storyRef} className="max-w-6xl mx-auto px-6 sm:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial="hidden"
            animate={isStoryInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={0.1}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8B0000] font-medium block">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1c1714] leading-[1.15]">
                A Decade of Handcrafted Excellence & Timeless Design
              </h2>
            </div>
            
            <div className="w-12 h-[1px] bg-[#8c7460]" />

            <div className="space-y-5 text-[#52463b] text-sm sm:text-base leading-relaxed font-light">
              <p>
                Founded in 2016, <strong className="font-normal text-[#1c1714]">Vastrasanskara</strong> is a luxury couture house based in the prestigious neighbourhood of Sadashivanagar, Bengaluru. What began as a humble one-room production studio has grown into a destination for bespoke bridal, groom, and occasion wear, celebrated for its handcrafted excellence and timeless design philosophy.
              </p>
              <p>
                At Vastrasanskara, every garment is created as a work of art - where heritage, craftsmanship, and individuality come together. Rooted in India’s rich textile traditions and inspired by temple architecture, hand embroidery, and cultural artistry, each creation is meticulously tailored to reflect the personality and story of the wearer.
              </p>
              <p>
                For a decade, we have remained committed to preserving traditional craftsmanship while embracing contemporary silhouettes, creating heirloom-quality couture that transcends trends. From intimate bridal moments to cinematic costume design, every stitch embodies precision, passion, and purpose.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Creative Floating Milestone Feature Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={isStoryInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative bg-[#f6f1eb] p-8 sm:p-12 border border-[#c8b8a8] shadow-2xl overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#8B0000]/5 rounded-full blur-2xl transition-all duration-700 group-hover:scale-125" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#8B0000]/10 to-transparent pointer-events-none" />
              
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8B0000] block mb-4 font-medium">
                MILESTONE DECADE
              </span>
              
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1c1714] mb-4">
                Celebrating 10 Years
              </h3>
              
              <p className="text-xs sm:text-sm text-[#52463b] leading-relaxed mb-8 font-light">
                As we mark a decade of craftsmanship, Vastrasanskara continues to redefine heritage through bespoke luxury, handcrafted elegance, and an unwavering dedication to excellence.
              </p>

              <div className="pt-6 border-t border-[#c8b8a8]/60 flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#2c241f] font-medium">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B0000]" />
                  Sadashivanagar
                </span>
                <span className="text-[#8B0000]">Bengaluru</span>
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
            className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2c241f] italic leading-relaxed"
          >
            &ldquo;Fashion is not just about what we wear; it is about preserving culture, celebrating craftsmanship, and creating stories that live for generations.&rdquo;
          </motion.p>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isQuoteInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="block mt-4 text-[10px] tracking-[0.3em] uppercase text-[#8B0000] font-medium"
          >
             -  Ajit Sree Ravi
          </motion.span>
        </div>
      </section>

      {/* ================= FOUNDER SECTION ================= */}
      <section ref={founderRef} className="bg-[#f6f1eb] py-10 px-6 sm:px-12 border-b border-[#c8b8a8]/40">
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
            <h1 className="font-serif text-3xl sm:text-5xl text-[#1c1714]">
              About the Founder
            </h1>
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
                Chief Costume Associate  -  <span className="text-[#1c1714]">Kantara: Chapter 1</span>
              </p>

              <div className="mt-8 pt-6 border-t border-[#c8b8a8]/60 text-[11px] tracking-[0.2em] uppercase text-[#6b5d50]">
                Cinema • Couture • Heritage
              </div>
            </motion.div>

            {/* Founder Story Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={isFounderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 text-[#52463b] text-sm sm:text-base leading-relaxed font-light"
            >
              <p className="font-serif text-xl sm:text-2xl text-[#1c1714] italic font-normal">
                Every great journey begins with a vision.
              </p>
              
              <p>
                In 2013, when fashion styling was still an emerging profession in South India, Ajit Sree Ravi became the only student in a batch of 42 to pursue styling as his career. While many viewed it as an unconventional path, he saw it as his calling.
              </p>

              <p>
                His professional journey began behind the scenes at Bangalore Fashion Week, followed by his contribution to Khadi fashion presentations in 2014, where he explored fashion choreography and creative direction. Starting from the very foundation of the industry as an office assistant in a renowned designer’s studio, Ajit spent years mastering every aspect of couture - from fabric selection and garment construction to bespoke craftsmanship and client experience.
              </p>

              <p>
                Over the years, his dedication led him into the Kannada film industry, where he has contributed to the costume design of more than 30 feature films. His journey reached a defining milestone when he served as the Chief Costume Associate for the Pan-Indian film <strong className="font-normal text-[#1c1714]">Kantara: Chapter 1</strong>, reflecting his ability to blend authentic Indian craftsmanship with cinematic storytelling.
              </p>

              <p>
                From leather craftsmanship to luxury couture, Ajit’s work is defined by versatility, innovation, and a deep respect for traditional artisanship. In 2016, he founded Vastrasanskara with a simple vision - to create garments that honour India’s cultural heritage while expressing the individuality of every client.
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
              href="https://wa.me/918088316661?text=Hello,%20I%20would%20like%20to%20explore%20your%20couture%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#8B0000] hover:bg-[#6e2220] text-[#F6F1EB] border border-[#8C2E2C] px-10 py-4 text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              Connect On WhatsApp
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}