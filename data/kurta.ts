
export type kurtaLook = {
  id: string;
  slug: string;
  name: string;
  hero: string;
  images: string[];
};

export type kurtaCollection = {
  slug: string;
  name: string;
  cover: string;
  looks: kurtaLook[];
};

export const kurtaCollections: kurtaCollection[] = [
  {
    slug: "celebrito",
    name: "CELEBRITO",
    cover: "/images/groom/kurta-bandhgala/celebrito/cover.webp",

    looks: [
      {
        id: "01",
        slug: "look-01",
        name: "Look 01",
        hero: "/images/groom/kurta-bandhgala/celebrito/look-01/1.webp",
        images: [
          "/images/groom/kurta-bandhgala/celebrito/look-01/1.webp",
          "/images/groom/kurta-bandhgala/celebrito/look-01/2.webp",
          "/images/groom/kurta-bandhgala/celebrito/look-01/3.webp",
        
        ],
      },

      {
        id: "02",
        slug: "look-02",
        name: "Look 02",
        hero: "/images/groom/kurta-bandhgala/celebrito/look-02/1.webp",
        images: [
          "/images/groom/kurta-bandhgala/celebrito/look-02/1.webp",
          "/images/groom/kurta-bandhgala/celebrito/look-02/2.webp",
       
       
        ],
      },

      {
        id: "03",
        slug: "look-03",
        name: "Look 03",
        hero: "/images/groom/kurta-bandhgala/celebrito/look-03/1.webp",
        images: [
          "/images/groom/kurta-bandhgala/celebrito/look-03/1.webp",
          "/images/groom/kurta-bandhgala/celebrito/look-03/2.webp",
          "/images/groom/kurta-bandhgala/celebrito/look-03/3.webp",

        
        ],
      },

      {
        id: "04",
        slug: "look-04",
        name: "Look 04",
        hero: "/images/groom/kurta-bandhgala/celebrito/look-04/1.webp",
        images: [
          "/images/groom/kurta-bandhgala/celebrito/look-04/1.webp",
          "/images/groom/kurta-bandhgala/celebrito/look-04/2.webp",
          "/images/groom/kurta-bandhgala/celebrito/look-04/3.webp",

          
        ],
      },

      // {
      //   id: "05",
      //   slug: "look-05",
      //   name: "Look 05",
      //   hero: "/images/groom/kurta-bandhgala/celebrito/look-05/1.webp",
      //   images: [
      //     "/images/groom/kurta-bandhgala/celebrito/look-05/1.webp",
      //     "/images/groom/kurta-bandhgala/celebrito/look-05/2.webp",
      //     "/images/groom/kurta-bandhgala/celebrito/look-05/3.webp",
      
      //   ],
      // },
    ],
  },
];
