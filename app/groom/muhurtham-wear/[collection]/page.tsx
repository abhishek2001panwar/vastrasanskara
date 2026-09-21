import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import { muhurthamCollections } from "@/data/muhurtham";

type Props = {
  params: Promise<{
    collection: string;
  }>;
};

export function generateStaticParams() {
  return muhurthamCollections.map((collection) => ({
    collection: collection.slug,
  }));
}

export default async function CollectionPage({ params }: Props) {
  const { collection: collectionSlug } = await params;

  const collection = muhurthamCollections.find(
    (item) => item.slug === collectionSlug
  );

  if (!collection) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#171614]">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-7 md:px-10">

        <Link
          href="/groom/muhurtham-wear"
          className="text-[10px] tracking-[0.25em] transition-opacity hover:opacity-50"
        >
          ← Back
        </Link>

      

      </header>

      {/* Collection Heading */}
      <section className="px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-24">

        <div className="max-w-[700px]">

          <p className="mb-5 text-[11px] tracking-[0.18em] text-black/45">
            The Groom / Wedding Collection
          </p>

          <h1 className="text-[42px] font-serif leading-[1.05] tracking-[-0.025em] md:text-[64px]">
            Muhurtham Wear
          </h1>

        </div>

      </section>

      {/* Looks */}
      <section className="px-5 pb-24 md:px-10">

        <div className="grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-12 md:gap-y-28">

          {collection.looks.map((look, index) => (

            <Link
              key={look.slug}
              href={`/groom/muhurtham-wear/${collection.slug}/${look.slug}`}
              className={[
                "group block",
                index === 0
                  ? "md:col-span-7"
                  : index === 1
                    ? "md:col-span-4 md:col-start-9 md:mt-28"
                    : index === 2
                      ? "md:col-span-5 md:col-start-2"
                      : index === 3
                        ? "md:col-span-6 md:col-start-7 md:mt-20"
                        : "md:col-span-5 md:col-start-3",
              ].join(" ")}
            >

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E9E5DE]">

                <Image
                  src={look.hero}
                  alt={`${collection.name} ${look.name}`}
                  fill
                  sizes="(max-width: 768px) 92vw, 60vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.4}
                  />
                </div>

              </div>

              {/* Look Info */}
              <div className="mt-4 flex items-center justify-between">

                <span className="text-[9px] tracking-[0.25em] text-black/40">
                  {look.id}
                </span>

                <span className="text-[10px] tracking-[0.18em]">
                  view
                </span>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}