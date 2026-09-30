
export type IndoWesternLook = {
  id: string;
  slug: string;
  name: string;
  hero: string;
  images: string[];
};

export type IndoWesternCollection = {
  slug: string;
  name: string;
  cover: string;
  looks: IndoWesternLook[];
};

export const indoWesternCollections: IndoWesternCollection[] = [
  {
    slug: "gen-iq",
    name: "GEN IQ",
    cover: "/images/groom/indo-western/gen-iq/cover.webp",

    looks: [
      {
        id: "01",
        slug: "look-01",
        name: "Look 01",
        hero: "/images/groom/indo-western/gen-iq/look-01/1.webp",
        images: [
          "/images/groom/indo-western/gen-iq/look-01/1.webp",
          "/images/groom/indo-western/gen-iq/look-01/2.webp",
          "/images/groom/indo-western/gen-iq/look-01/3.webp",
       
        ],
      },

      {
        id: "02",
        slug: "look-02",
        name: "Look 02",
        hero: "/images/groom/indo-western/gen-iq/look-02/1.webp",
        images: [
          "/images/groom/indo-western/gen-iq/look-02/1.webp",
          "/images/groom/indo-western/gen-iq/look-02/3.webp",
                    "/images/groom/indo-western/gen-iq/look-02/2.webp",

       
        ],
      },

      {
        id: "03",
        slug: "look-03",
        name: "Look 03",
        hero: "/images/groom/indo-western/gen-iq/look-03/2.webp",
        images: [
          "/images/groom/indo-western/gen-iq/look-03/1.webp",
          "/images/groom/indo-western/gen-iq/look-03/2.webp",
        
        ],
      },

      {
        id: "04",
        slug: "look-04",
        name: "Look 04",
        hero: "/images/groom/indo-western/gen-iq/look-04/1.webp",
        images: [
          "/images/groom/indo-western/gen-iq/look-04/1.webp",
          "/images/groom/indo-western/gen-iq/look-04/2.webp",
          
        ],
      },

     
    ],
  },
];
