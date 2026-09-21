import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { muhurthamLooks } from "@/data/muhurtham";
import LookImageCarousel from "../../../components/LookImageCarousel";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return muhurthamLooks.map((look) => ({
    slug: look.slug,
  }));
}

export default async function LookDetailPage({ params }: Props) {
  const { slug } = await params;

  const lookIndex = muhurthamLooks.findIndex((item) => item.slug === slug);
  if (lookIndex === -1) notFound();

  const look = muhurthamLooks[lookIndex];
  const images = Array.isArray(look.images) ? look.images.filter(Boolean) : [];

  const previousLook =
    muhurthamLooks[(lookIndex - 1 + muhurthamLooks.length) % muhurthamLooks.length];
  const nextLook =
    muhurthamLooks[(lookIndex + 1) % muhurthamLooks.length];

  return (
    <main className="relative min-h-screen bg-[#FAF8F5] text-[#1A1816] antialiased selection:bg-[#EAE4D9]">
      
      {/* =========================================================
          LEFT-SIDE FLOATING BACK NAVIGATION (Below Top Navbar)
      ========================================================= */}
      <div className="fixed top-24 md:top-32 left-4 md:left-8 z-30 pointer-events-none">
        <Link
          href="/groom/muhurtham-wear"
          className="pointer-events-auto group inline-flex items-center gap-2.5 rounded-full border border-stone-300/70 bg-[#FAF8F5]/85 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.28em] text-stone-600 shadow-[0_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-300 hover:border-stone-900 hover:bg-[#FAF8F5] hover:text-stone-950 hover:shadow-md"
        >
          <ArrowLeft
            size={12}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          <span className="hidden sm:inline">Collection</span>
        </Link>
      </div>

      {/* =========================================================
          TITLE & METADATA
      ========================================================= */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-6 text-center">
        <span className="text-[9px] uppercase tracking-[0.35em] text-stone-400 block mb-3 font-medium">
          Muhurtham Atelier
        </span>
      
        <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-stone-400">
          Vastra Sanskar
        </p>
      </section>

      {/* =========================================================
          SWIPEABLE PORTRAIT CAROUSEL WITH BOTTOM DOTS
      ========================================================= */}
      <section className=" md:px-8 pb-16">
        <LookImageCarousel images={images} altTitle={look.name} />
      </section>

      {/* =========================================================
          ENHANCED EDITORIAL NAVIGATION
      ========================================================= */}
      <section className="mt-20 md:mt-32 border-t border-stone-200">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          
          {/* PREVIOUS */}
          <Link
            href={`/groom/muhurtham-wear/${previousLook.slug}`}
            className="group relative flex items-center justify-between p-8 sm:p-12 md:p-16 transition-colors duration-500 hover:bg-[#F4F0E8]"
          >
            <div className="flex items-center gap-6 md:gap-8 z-10">
              {previousLook.images?.[0] && (
                <div className="relative aspect-[3/4] w-16 sm:w-20 md:w-24 shrink-0 overflow-hidden bg-stone-200 shadow-sm transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={previousLook.images[0]}
                    alt={previousLook.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-400 transition-colors duration-300 group-hover:text-stone-900">
                  <ArrowLeft
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-x-1.5"
                  />
                  <span className="text-[9px] uppercase tracking-[0.3em]">
                    Previous Look
                  </span>
                </div>
             
              </div>
            </div>
          </Link>

          {/* NEXT */}
          <Link
            href={`/groom/muhurtham-wear/${nextLook.slug}`}
            className="group relative flex items-center justify-between p-8 sm:p-12 md:p-16 transition-colors duration-500 hover:bg-[#F4F0E8] md:flex-row-reverse md:text-right"
          >
            <div className="flex items-center gap-6 md:gap-8 z-10 md:flex-row-reverse">
              {nextLook.images?.[0] && (
                <div className="relative aspect-[3/4] w-16 sm:w-20 md:w-24 shrink-0 overflow-hidden bg-stone-200 shadow-sm transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={nextLook.images[0]}
                    alt={nextLook.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-400 transition-colors duration-300 group-hover:text-stone-900 md:justify-end">
                  <span className="text-[9px] uppercase tracking-[0.3em]">
                    Next Look
                  </span>
                  <ArrowRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </div>
               
              </div>
            </div>
          </Link>

        </div>
      </section>

    </main>
  );
}