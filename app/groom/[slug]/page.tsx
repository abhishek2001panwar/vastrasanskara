import { notFound } from "next/navigation";
import Link from "next/link";
import CreativeGallery from "../../components/Creative";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = [
    "muhurtham-wear",
    "indo-western",
    "party-wear-suits",
    "tuxedos",
  ];
  return categories.map((slug) => ({ slug }));
}

function getImagesForCategory(slug: string) {
  if (slug === "muhurtham-wear") {
    // Landscape images: 3, 4, 9, 10, 25, 26 (rest are portrait)
    const landscapeIndices = new Set([3, 4, 9, 10, 25, 26]);

    return Array.from({ length: 31 }, (_, index) => {
      const imgNum = index + 1;
      const isLandscape = landscapeIndices.has(imgNum);

      return {
        id: `muhu-${imgNum}`,
        src: `/muhu/${imgNum}.png`,
        alt: `Muhurtham Wear Look ${imgNum}`,
        orientation: isLandscape ? ("landscape" as const) : ("portrait" as const),
      };
    });
  }

  if (slug === "tuxedos") {
    // 1 to 21 images, all portrait
    return Array.from({ length: 21 }, (_, index) => {
      const imgNum = index + 1;
      return {
        id: `tux-${imgNum}`,
        src: `/tux/${imgNum}.png`,
        alt: `Tuxedo Look ${imgNum}`,
        orientation: "portrait" as const,
      };
    });
  }

  // Fallback default
  return Array.from({ length: 12 }, (_, index) => ({
    id: `${slug}-${index + 1}`,
    src: `/images/groom/${slug}/${index + 1}.jpg`,
    alt: `Groom Style ${index + 1}`,
    orientation: "portrait" as const,
  }));
}

export default async function GroomCategoryPage({ params }: PageProps) {
  const { slug } = await params;

  const validCategories = [
    "muhurtham-wear",
    "indo-western",
    "party-wear-suits",
    "tuxedos",
  ];

  if (!validCategories.includes(slug)) {
    notFound();
  }

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const categoryImages = getImagesForCategory(slug);

  // Toggle this to false when you are ready to reveal the full gallery
  const isUnderConstruction = true;

  if (isUnderConstruction) {
    return (
      <main className="min-h-screen bg-[#FDFDFC] text-neutral-900 flex flex-col items-center justify-center px-6 py-24 text-center selection:bg-neutral-200">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          {/* Atelier Brand Label */}
          <span className="text-[10px] uppercase tracking-[0.45em] text-neutral-400 mb-6">
            Vastrasanskra Atelier
          </span>

          {/* Collection Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-950">
            {title}
          </h1>

          <div className="my-8 h-[1px] w-14 bg-neutral-300" />

          {/* Status Message */}
          <p className="font-serif text-lg sm:text-xl italic text-neutral-600 font-light mb-4">
            We are currently curating this collection.
          </p>
        
          {/* Action Link */}
          <div className="mt-12">
            <Link
              href="/"
              className="inline-block border-b border-neutral-900 pb-1 font-sans text-xs uppercase tracking-[0.25em] text-neutral-900 transition-opacity hover:opacity-60"
            >
              Return To Atelier
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-200">
      <CreativeGallery title={title} images={categoryImages} />
    </main>
  );
}