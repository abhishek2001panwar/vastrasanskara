import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const look = {
  slug: "the-heirloom",
  number: "01",
  name: "The Heirloom",
  collection: "The Collection",
  description:
    "A study in timeless Indian craftsmanship, where refined texture, intricate detail and considered silhouette come together.",
};

const images = [
  {
    src: "/tux/1.jpg",
    label: "The Look",
    title: "The complete expression",
  },
  {
    src: "/tux/2.jpg",
    label: "The Silhouette",
    title: "Form & proportion",
  },
  {
    src: "/tux/3.jpg",
    label: "The Fabric",
    title: "Texture in detail",
  },
  {
    src: "/tux/4.jpg",
    label: "The Craft",
    title: "Made by hand",
  },
  {
    src: "/tux/5.jpg",
    label: "The Construction",
    title: "From every angle",
  },
  {
    src: "/tux/6.jpg",
    label: "The Mood",
    title: "Beyond the garment",
  },
  {
    src: "/tux/7.jpg",
    label: "The Signature",
    title: "The defining detail",
  },
  {
    src: "/tux/8.jpg",
    label: "The Detail",
    title: "Closer still",
  },
];

export default async function LookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== look.slug) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f6f3ed] text-[#171614]">

      {/* =========================
          TOP / TITLE
      ========================== */}

      <section className="px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-12 flex items-center justify-between">
            <Link
              href="/collection"
              className="group text-[10px] uppercase tracking-[0.3em] text-black/45"
            >
              <span className="mr-3 transition-transform duration-300 group-hover:-translate-x-1 inline-block">
                ←
              </span>
              Collection
            </Link>

            <span className="text-[10px] uppercase tracking-[0.3em] text-black/35">
              {look.number} / 05
            </span>
          </div>

          <div className="grid items-end gap-10 md:grid-cols-12">

            <div className="md:col-span-8">

              <p className="mb-7 text-[10px] uppercase tracking-[0.35em] text-black/40">
                {look.collection}
              </p>

              <h1 className="font-serif text-[clamp(4.5rem,10vw,10rem)] font-light leading-[0.78] tracking-[-0.06em]">
                The
                <br />
                <span className="italic">
                  Heirloom
                </span>
              </h1>

            </div>

            <div className="md:col-span-3 md:col-start-10">
              <p className="text-xs leading-7 text-black/50 md:text-sm">
                {look.description}
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          01 — HERO
      ========================== */}

      <section className="px-5 md:px-10">

        <div className="mx-auto max-w-[1500px]">

          <div className="relative mx-auto aspect-[3/4] w-full max-w-[1050px] overflow-hidden">

            <Image
              src="/tux/1.jpg"
              alt="The Heirloom — full look"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 75vw"
              className="object-cover"
            />

            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/80">
                Look 01
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          INTRO
      ========================== */}

      <section className="px-5 py-28 md:px-10 md:py-44">

        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12">

          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
              The silhouette
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-5">

            <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-[-0.03em] md:text-6xl">
              A silhouette shaped by{" "}
              <span className="italic text-black/45">
                proportion.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-xs leading-7 text-black/45 md:text-sm">
              Every element has been considered to create a balance between
              traditional craftsmanship and contemporary form.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          02 — FRONT
      ========================== */}

      <section className="px-5 md:px-10">

        <div className="mx-auto max-w-[1500px]">

          <div className="ml-auto w-full md:w-[48%]">

            <div className="relative aspect-[3/4] overflow-hidden">

              <Image
                src="/tux/2.jpg"
                alt="The Heirloom front view"
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                className="object-cover transition-transform duration-1000 hover:scale-[1.02]"
              />

            </div>

            <div className="mt-5 flex justify-between">

              <p className="text-[9px] uppercase tracking-[0.3em] text-black/40">
                01 / Silhouette
              </p>

              <p className="font-serif text-lg">
                Form & proportion
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          03 — FABRIC
      ========================== */}

      <section className="px-5 py-32 md:px-10 md:py-52">

        <div className="mx-auto grid max-w-[1500px] items-center gap-16 md:grid-cols-12">

          <div className="md:col-span-4">

            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-black/40">
              02 / The Fabric
            </p>

            <h2 className="font-serif text-5xl font-light leading-[0.95] md:text-7xl">
              Texture
              <br />
              <span className="italic text-black/45">
                in detail.
              </span>
            </h2>

            <p className="mt-8 max-w-sm text-xs leading-7 text-black/45">
              The weave, texture and finish become part of the identity of the
              garment.
            </p>

          </div>


          <div className="md:col-span-5 md:col-start-8">

            <div className="relative aspect-[3/4] overflow-hidden">

              <Image
                src="/tux/3.jpg"
                alt="Fabric detail"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          04 — CRAFT
      ========================== */}

      <section className="bg-[#1c1b19] px-5 py-32 text-[#f6f3ed] md:px-10 md:py-52">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-10 md:grid-cols-12">

            <div className="md:col-span-5">

              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-white/40">
                03 / The Craft
              </p>

              <h2 className="font-serif text-5xl font-light leading-[0.9] md:text-8xl">
                Made
                <br />
                <span className="italic text-white/45">
                  by hand.
                </span>
              </h2>

            </div>

            <div className="md:col-span-3 md:col-start-10 md:pt-20">

              <p className="text-xs leading-7 text-white/45">
                The smallest details carry the identity of the garment.
              </p>

            </div>

          </div>


          <div className="mt-20 flex justify-center md:mt-32">

            <div className="relative aspect-[3/4] w-full max-w-[700px] overflow-hidden">

              <Image
                src="/tux/4.jpg"
                alt="Craftsmanship detail"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          05 — BACK / SIDE
      ========================== */}

      <section className="px-5 py-32 md:px-10 md:py-52">

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-14 flex items-end justify-between">

            <div>

              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-black/40">
                04 / Construction
              </p>

              <h2 className="font-serif text-5xl font-light md:text-7xl">
                From every{" "}
                <span className="italic text-black/45">
                  angle.
                </span>
              </h2>

            </div>

          </div>


          <div className="flex justify-end">

            <div className="relative aspect-[3/4] w-full md:w-[55%]">

              <Image
                src="/tux/5.jpg"
                alt="Back and side view"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          06 — EDITORIAL
      ========================== */}

      <section className="px-5 pb-32 md:px-10 md:pb-52">

        <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12">

          <div className="md:col-span-7">

            <div className="relative aspect-[3/4] overflow-hidden">

              <Image
                src="/tux/6.jpg"
                alt="The Heirloom editorial"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />

            </div>

          </div>


          <div className="flex items-end md:col-span-4 md:col-start-9">

            <div>

              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-black/40">
                05 / The Mood
              </p>

              <h2 className="font-serif text-5xl font-light leading-[0.95] md:text-7xl">
                Beyond
                <br />
                <span className="italic text-black/45">
                  the garment.
                </span>
              </h2>

              <p className="mt-8 text-xs leading-7 text-black/45">
                A moment, a mood, a memory — the look comes alive beyond the
                details.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          07 — SIGNATURE
      ========================== */}

      <section className="border-y border-black/10 px-5 py-32 md:px-10 md:py-52">

        <div className="mx-auto grid max-w-[1500px] items-center gap-16 md:grid-cols-12">

          <div className="md:col-span-4">

            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-black/40">
              06 / The Signature
            </p>

            <h2 className="font-serif text-5xl font-light leading-[0.95] md:text-7xl">
              The detail
              <br />
              that{" "}
              <span className="italic text-black/45">
                defines it.
              </span>
            </h2>

          </div>


          <div className="md:col-span-5 md:col-start-8">

            <div className="relative aspect-[3/4] overflow-hidden">

              <Image
                src="/tux/7.jpg"
                alt="Signature detail"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          08 — FINAL DETAIL
      ========================== */}

      <section className="px-5 py-32 md:px-10 md:py-52">

        <div className="mx-auto grid max-w-[1500px] items-center gap-16 md:grid-cols-12">

          <div className="md:col-span-5">

            <div className="relative aspect-[3/4] overflow-hidden">

              <Image
                src="/tux/8.jpg"
                alt="Final detail"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />

            </div>

          </div>


          <div className="md:col-span-4 md:col-start-8">

            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-black/40">
              The final detail
            </p>

            <h2 className="font-serif text-5xl font-light leading-[0.95] md:text-7xl">
              Quietly
              <br />
              <span className="italic text-black/45">
                distinct.
              </span>
            </h2>

          </div>

        </div>

      </section>


      {/* =========================
          NEXT
      ========================== */}

      <section className="border-t border-black/10">

        <Link
          href="/collection"
          className="group block px-5 py-28 md:px-10 md:py-44"
        >

          <div className="mx-auto flex max-w-[1500px] items-end justify-between">

            <div>

              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-black/40">
                Continue exploring
              </p>

              <h2 className="font-serif text-5xl font-light tracking-[-0.04em] md:text-8xl">
                The Collection
              </h2>

            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/20 transition-all duration-500 group-hover:bg-black group-hover:text-white">
              →
            </div>

          </div>

        </Link>

      </section>

    </main>
  );
}