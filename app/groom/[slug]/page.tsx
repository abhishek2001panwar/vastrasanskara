import { notFound } from "next/navigation";
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

  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-200">
      <CreativeGallery title={title} images={categoryImages} />
    </main>
  );
}