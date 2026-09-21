
export type TuxedoLook = {
  id: string;
  slug: string;
  name: string;
  hero: string;
  images: string[];
};

export type TuxedoCollection = {
  slug: string;
  name: string;
  cover: string;
  looks: TuxedoLook[];
};

export const tuxedoCollections: TuxedoCollection[] = [
  {
    slug: "black-tie",
    name: "BLACK TIE",
    cover: "/images/groom/tuxedos/black-tie/cover.jpeg",

    looks: [
      {
        id: "01",
        slug: "look-01",
        name: "Look 01",
        hero: "/images/groom/tuxedos/black-tie/look-01/1.jpeg",
        images: [
          "/images/groom/tuxedos/black-tie/look-01/1.jpeg",
          "/images/groom/tuxedos/black-tie/look-01/2.jpeg",
          "/images/groom/tuxedos/black-tie/look-01/3.jpeg",
          "/images/groom/tuxedos/black-tie/look-01/4.jpeg",
          "/images/groom/tuxedos/black-tie/look-01/5.jpeg",
          "/images/groom/tuxedos/black-tie/look-01/6.jpeg",
        ],
      },

      {
        id: "02",
        slug: "look-02",
        name: "Look 02",
        hero: "/images/groom/tuxedos/black-tie/look-02/1.jpeg",
        images: [
          "/images/groom/tuxedos/black-tie/look-02/1.jpeg",
          "/images/groom/tuxedos/black-tie/look-02/2.jpeg",
          "/images/groom/tuxedos/black-tie/look-02/3.jpeg",
          "/images/groom/tuxedos/black-tie/look-02/4.jpeg",
          "/images/groom/tuxedos/black-tie/look-02/5.jpeg",
          "/images/groom/tuxedos/black-tie/look-02/6.jpeg",
        ],
      },

      {
        id: "03",
        slug: "look-03",
        name: "Look 03",
        hero: "/images/groom/tuxedos/black-tie/look-03/1.jpeg",
        images: [
          "/images/groom/tuxedos/black-tie/look-03/1.jpeg",
          "/images/groom/tuxedos/black-tie/look-03/2.jpeg",
          "/images/groom/tuxedos/black-tie/look-03/3.jpeg",
          "/images/groom/tuxedos/black-tie/look-03/4.jpeg",
          "/images/groom/tuxedos/black-tie/look-03/5.jpeg",
          "/images/groom/tuxedos/black-tie/look-03/6.jpeg",
        ],
      },

      {
        id: "04",
        slug: "look-04",
        name: "Look 04",
        hero: "/images/groom/tuxedos/black-tie/look-04/1.jpeg",
        images: [
          "/images/groom/tuxedos/black-tie/look-04/1.jpeg",
          "/images/groom/tuxedos/black-tie/look-04/2.jpeg",
          "/images/groom/tuxedos/black-tie/look-04/3.jpeg",
          "/images/groom/tuxedos/black-tie/look-04/4.jpeg",
          "/images/groom/tuxedos/black-tie/look-04/5.jpeg",
          "/images/groom/tuxedos/black-tie/look-04/6.jpeg",
        ],
      },

      {
        id: "05",
        slug: "look-05",
        name: "Look 05",
        hero: "/images/groom/tuxedos/black-tie/look-05/1.jpeg",
        images: [
          "/images/groom/tuxedos/black-tie/look-05/1.jpeg",
          "/images/groom/tuxedos/black-tie/look-05/2.jpeg",
          "/images/groom/tuxedos/black-tie/look-05/3.jpeg",
          "/images/groom/tuxedos/black-tie/look-05/4.jpeg",
          "/images/groom/tuxedos/black-tie/look-05/5.jpeg",
          "/images/groom/tuxedos/black-tie/look-05/6.jpeg",
        ],
      },
    ],
  },
];
