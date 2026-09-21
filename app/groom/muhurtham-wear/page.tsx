"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { muhurthamLooks } from "@/data/muhurtham";

export default function MuhurthamWearPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#171614]">
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className="px-5 pt-28 md:px-8 md:pt-36 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-end justify-between">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-5 text-[9px] uppercase tracking-[0.32em] text-black/40"
              >
                The Groom / Wedding Collection
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  font-serif
                  text-[46px]
                  font-normal
                  leading-[0.95]
                  tracking-[-0.045em]
                  sm:text-[58px]
                  md:text-[72px]
                  lg:text-[88px]
                "
              >
                Muhurtham Wear
              </motion.h1>
            </div>

           
          </div>

          <div className="mt-8 h-px w-full bg-black/10" />
        </div>
      </section>

      {/* =========================================================
          COLLECTION
      ========================================================= */}
      <section className="px-5 pb-32 pt-14 md:px-8 md:pb-44 md:pt-20 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-y-20 md:grid-cols-12 md:gap-x-6 md:gap-y-28">
            {muhurthamLooks.map((look, index) => {
              const image = look.images?.[0];

              if (!image) return null;

              /*
               * Deliberately asymmetric.
               * This prevents the page from feeling like a generic
               * ecommerce product grid.
               */
              const layout =
                index === 0
                  ? "md:col-span-7 md:col-start-1"
                  : index === 1
                    ? "md:col-span-4 md:col-start-9 md:mt-36"
                    : index === 2
                      ? "md:col-span-5 md:col-start-2"
                      : index === 3
                        ? "md:col-span-6 md:col-start-8 md:mt-20"
                        : index === 4
                          ? "md:col-span-5 md:col-start-1 md:mt-12"
                          : "md:col-span-6 md:col-start-7 md:mt-32";

              return (
                <motion.article
                  key={look.id}
                  className={layout}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={`/groom/muhurtham-wear/${look.slug}`}
                    className="group block"
                  >
                    {/* IMAGE */}
                    <div className="relative overflow-hidden bg-[#ebe8e1]">
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={image}
                          alt={look.name}
                          fill
                          priority={index < 2}
                          sizes="
                            (max-width: 768px) 100vw,
                            60vw
                          "
                          className="
                            object-cover
                            transition-transform
                            duration-[1600ms]
                            ease-[cubic-bezier(0.16,1,0.3,1)]
                            group-hover:scale-[1.035]
                          "
                        />

                        {/* subtle image wash */}
                        <div
                          className="
                            absolute inset-0
                            bg-black/[0.025]
                            opacity-0
                            transition-opacity
                            duration-700
                            group-hover:opacity-100
                          "
                        />

                        {/* VIEW ARROW */}
                        <div
                          className="
                            absolute
                            bottom-5
                            right-5
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-[#f8f6f1]
                            opacity-0
                            translate-y-3
                            transition-all
                            duration-500
                            group-hover:translate-y-0
                            group-hover:opacity-100
                          "
                        >
                          <ArrowUpRight
                            size={16}
                            strokeWidth={1.1}
                          />
                        </div>
                      </div>
                    </div>

                    {/* =================================================
                        MINIMAL PRODUCT INFORMATION
                    ================================================= */}
                    <div className="flex items-start justify-between pt-4">
                      <div className="flex items-baseline gap-3">
                        <span className="text-[9px] tracking-[0.18em] text-black/35">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                       
                      </div>

                      <span
                        className="
                          pt-1
                          text-[8px]
                          uppercase
                          tracking-[0.25em]
                          text-black/30
                          transition-colors
                          duration-300
                          group-hover:text-black/70
                        "
                      >
                        View
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          END OF COLLECTION
      ========================================================= */}
      <section className="border-t border-black/10 px-5 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-center justify-between py-8">
            <span className="text-[9px] uppercase tracking-[0.28em] text-black/35">
              Vastra Sanskar
            </span>

            <span className="text-[9px] uppercase tracking-[0.28em] text-black/35">
              Muhurtham Wear
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}