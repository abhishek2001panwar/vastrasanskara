import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const collection = {
  slug: "royal-hemme",
  name: "ROYAL HEMME",
  cover: "/images/groom/muhurtham-wear/royal-hemme/cover.jpeg",
};

export default function MuhurthamWearPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#171614]">

      {/* Heading */}
      <header className="px-5 pt-10 pb-8 text-center md:pt-14 md:pb-10">
        <h1 className="text-[32px] font-serif tracking-[0.08em] md:text-[42px]">
          {collection.name}
        </h1>
      </header>

      {/* Collection Cover */}
      <section className="flex justify-center px-5 pb-16">

        <Link
          href={`/groom/muhurtham-wear/${collection.slug}`}
          className="group block w-full max-w-[520px]"
        >

          <div className="relative aspect-[3/4] overflow-hidden bg-[#E9E5DE]">

            <Image
              src={collection.cover}
              alt={collection.name}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 520px"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight size={16} strokeWidth={1.4} />
            </div>

          </div>

          {/* Bottom Info */}
          <div className="mt-5 flex items-end justify-between">

            <span className="text-[9px] tracking-[0.22em] text-black/40">
                {collection.name}
            </span>

            <span className="text-[9px] tracking-[0.22em] text-black/40">
              VIEW
            </span>

          </div>

        </Link>

      </section>
    </main>
  );
}