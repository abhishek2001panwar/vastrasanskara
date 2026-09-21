import Image from "next/image";
import Link from "next/link";

import { tuxedoCollections } from "@/data/tuxedos";

export default function TuxedosPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#171614]">

      <header className="px-6 py-7 md:px-10">
        <Link
          href="/"
          className="text-[10px] tracking-[0.25em] transition-opacity hover:opacity-50"
        >
          VASTRA SANSKAR
        </Link>
      </header>

      <section className="px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-20">
        <p className="mb-5 text-[11px] tracking-[0.18em] text-black/45">
          The Groom / Wedding Collection
        </p>

        <h1 className="text-[42px] font-normal tracking-[-0.025em] md:text-[64px]">
          # TUXEDOS
        </h1>
      </section>

      <section className="px-5 pb-24 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">

          {tuxedoCollections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/groom/tuxedos/${collection.slug}`}
              className="group block md:col-span-7"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E9E5DE]">
                <Image
                  src={collection.cover}
                  alt={collection.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 60vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.25em] text-black/40">
                  01
                </span>

                <span className="text-[10px] tracking-[0.18em]">
                  {collection.name}
                </span>
              </div>
            </Link>
          ))}

        </div>
      </section>

    </main>
  );
}