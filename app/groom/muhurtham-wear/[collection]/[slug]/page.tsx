import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { muhurthamCollections } from "@/data/muhurtham";
import LookImageCarousel from "../../../../components/LookImageCarousel";

type Props = {
  params: Promise<{
    collection: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return muhurthamCollections.flatMap((collection) =>
    collection.looks.map((look) => ({
      collection: collection.slug,
      slug: look.slug,
    }))
  );
}

export default async function LookDetailPage({ params }: Props) {
  const {
    collection: collectionSlug,
    slug,
  } = await params;

  const collection = muhurthamCollections.find(
    (item) => item.slug === collectionSlug
  );

  if (!collection) {
    notFound();
  }

  const lookIndex = collection.looks.findIndex(
    (item) => item.slug === slug
  );

  if (lookIndex === -1) {
    notFound();
  }

  const look = collection.looks[lookIndex];

  const images = Array.isArray(look.images)
    ? look.images.filter(Boolean)
    : [];

  const previousLook =
    collection.looks[
      (lookIndex - 1 + collection.looks.length) %
        collection.looks.length
    ];

  const nextLook =
    collection.looks[
      (lookIndex + 1) % collection.looks.length
    ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#1A1816]">

      {/* Back */}
      <div className="fixed left-4 top-24 z-30 md:left-8 md:top-32">

        <Link
          href={`/groom/muhurtham-wear/${collection.slug}`}
          className="group inline-flex items-center gap-2 rounded-full border border-stone-300/70 bg-[#FAF8F5]/90 px-4 py-2 text-[9px] uppercase tracking-[0.28em] text-stone-600 backdrop-blur-md transition hover:border-stone-900 hover:text-stone-950"
        >

          <ArrowLeft
            size={12}
            strokeWidth={1.5}
            className="transition-transform group-hover:-translate-x-1"
          />

          <span className="hidden sm:inline">
           collection
          </span>

          <span className="sm:hidden">
            Back
          </span>

        </Link>

      </div>

      {/* Heading */}
      <section className="px-6 pb-8 pt-24 text-center md:pb-12 md:pt-32">

      

     

        <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-stone-400">
          Vastra Sanskar
        </p>

      </section>

      {/* Images */}
      <section className="pb-16 md:px-8">
        <LookImageCarousel
          images={images}
          altTitle={`${collection.name} — ${look.name}`}
        />
      </section>

      {/* Previous / Next */}
      {collection.looks.length > 1 && (

        <section className="mt-20 border-t border-stone-200 md:mt-32">

          <div className="grid grid-cols-1 divide-y divide-stone-200 md:grid-cols-2 md:divide-x md:divide-y-0">

            {/* Previous */}
            <Link
              href={`/groom/muhurtham-wear/${collection.slug}/${previousLook.slug}`}
              className="group flex items-center gap-6 p-8 transition-colors hover:bg-[#F4F0E8] sm:p-12 md:p-16"
            >

              <div className="relative aspect-[3/4] w-20 shrink-0 overflow-hidden bg-stone-200">
                <Image
                  src={previousLook.hero}
                  alt={previousLook.name}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div>

                <div className="mb-2 flex items-center gap-2 text-stone-400">
                  <ArrowLeft size={14} />

                  <span className="text-[9px] uppercase tracking-[0.3em]">
                    Previous Look
                  </span>
                </div>

              

              </div>

            </Link>

            {/* Next */}
            <Link
              href={`/groom/muhurtham-wear/${collection.slug}/${nextLook.slug}`}
              className="group flex items-center justify-end gap-6 p-8 text-right transition-colors hover:bg-[#F4F0E8] sm:p-12 md:p-16"
            >

              <div>

                <div className="mb-2 flex items-center justify-end gap-2 text-stone-400">

                  <span className="text-[9px] uppercase tracking-[0.3em]">
                    Next Look
                  </span>

                  <ArrowRight size={14} />

                </div>

               

              </div>

              <div className="relative aspect-[3/4] w-20 shrink-0 overflow-hidden bg-stone-200">
                <Image
                  src={nextLook.hero}
                  alt={nextLook.name}
                  fill
                  sizes="80px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

            </Link>

          </div>

        </section>

      )}

    </main>
  );
}