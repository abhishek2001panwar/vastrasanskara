import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { muhurthamLooks } from "@/data/muhurtham";

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

  // Dynamic rhythm: 1 Center -> 2 Side-by-Side -> 1 Center -> 2 Side-by-Side...
  const layoutSections: { type: "single" | "pair"; items: string[] }[] = [];
  let i = 0;
  let expectSingle = true;

  while (i < images.length) {
    if (expectSingle) {
      layoutSections.push({ type: "single", items: [images[i]] });
      i += 1;
      expectSingle = false;
    } else {
      layoutSections.push({
        type: "pair",
        items: images.slice(i, i + 2),
      });
      i += 2;
      expectSingle = true;
    }
  }

  return (
    <main className="relative min-h-screen bg-[#FAF8F5] text-[#1A1816] antialiased selection:bg-[#EAE4D9]">
      
      {/* =========================================================
          LEFT-SIDE COLLECTION BACK NAVIGATION
          (Positioned below your global top navbar, floating sticky)
      ========================================================= */}
      <div className="fixed top-24 md:top-42 left-4 md:left-8 z-30 pointer-events-none">
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
          TITLE & LABEL
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
          1 -> 2 -> 1 EDITORIAL RHYTHM (ALL PORTRAIT, 1px GAP)
      ========================================================= */}
      <div className="mx-auto max-w-5xl px-3 md:px-6">
        {layoutSections.map((section, sIndex) => {
          if (section.type === "single") {
            const singleImg = section.items[0];
            return (
              <div
                key={`single-${sIndex}`}
                className={`${sIndex > 0 ? "mt-[1px]" : ""}`}
              >
                <div className="relative mx-auto aspect-[3/4] md:aspect-[4/5] w-full max-w-[1020px] overflow-hidden bg-stone-200/50">
                  <Image
                    src={singleImg}
                    alt={`${look.name} editorial ${sIndex + 1}`}
                    fill
                    priority={sIndex === 0}
                    sizes="(max-width: 1024px) 100vw, 1020px"
                    className="object-cover"
                  />
                </div>
              </div>
            );
          }

          return (
            <div
              key={`pair-${sIndex}`}
              className={`mt-[1px] grid gap-[1px] ${
                section.items.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 max-w-[1020px] mx-auto"
              }`}
            >
              {section.items.map((imgSrc, pIndex) => (
                <div
                  key={`${imgSrc}-${pIndex}`}
                  className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-stone-200/50"
                >
                  <Image
                    src={imgSrc}
                    alt={`${look.name} detail ${sIndex}-${pIndex}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 ease-out hover:scale-[1.015]"
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* =========================================================
          ENHANCED EDITORIAL NAVIGATION
      ========================================================= */}
      <section className="mt-28 md:mt-40 border-t border-stone-200">
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