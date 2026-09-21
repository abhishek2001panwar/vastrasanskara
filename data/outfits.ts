export interface OutfitShot {
  src: string;
  alt: string;
  type: "hero" | "front" | "fabric" | "craft" | "back" | "editorial" | "signature" | "silhouette";
  caption: string;
}

export interface Outfit {
  id: string;
  categorySlug: string;
  name: string;
  subtitle: string;
  price?: string;
  description: string;
  fabricDetails: string[];
  heroImage: string;
  gallery: OutfitShot[];
}

export const OUTFITS: Outfit[] = [
  {
    id: "bespoke-black-tie-tuxedo",
    categorySlug: "tuxedos",
    name: "The Nocturne Black Tie",
    subtitle: "Midnight Wool & Mulberry Silk Grosgrain",
    price: "Price Upon Request",
    description:
      "Hand-canvassed single-breasted tuxedo featuring a sculpted shawl collar in pure mulberry silk grosgrain, framed with razor-cut bespoke trousers.",
    fabricDetails: [
      "Super 150s Merino Wool",
      "Mulberry Silk Grosgrain Lapels",
      "Hand-Stitched Horn Buttons",
      "Full Floating Canvas Construction",
    ],
    heroImage: "/tux/1.jpg",
    gallery: [
      { src: "/tux/1.jpg", alt: "Hero Full Look", type: "hero", caption: "01 / The Full Look" },
      { src: "/tux/2.jpg", alt: "Front Silhouette & Fit", type: "front", caption: "02 / Silhouette & Construction" },
      { src: "/tux/3.jpg", alt: "Merino Wool Fabric Texture", type: "fabric", caption: "03 / Fabric & Weave" },
      { src: "/tux/4.jpg", alt: "Silk Lapel & Button Craftsmanship", type: "craft", caption: "04 / Lapel & Button Artistry" },
      { src: "/tux/5.jpg", alt: "Back Tailoring & Drape", type: "back", caption: "05 / Rear Tailoring" },
      { src: "/tux/6.jpg", alt: "Editorial Character Mood", type: "editorial", caption: "06 / Atmospheric Editorial" },
      { src: "/tux/7.jpg", alt: "Signature Cuff & Lining Detail", type: "signature", caption: "07 / Signature Accent" },
      { src: "/tux/8.jpg", alt: "Full Evening Silhouette", type: "silhouette", caption: "08 / Evening Silhouette" },
    ],
  },
];