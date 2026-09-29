
export type SherwaniLook = {
  id: string;
  slug: string;
  name: string;
  hero: string;
  images: string[];
};

export type SherwaniCollection = {
  slug: string;
  name: string;
  cover: string;
  looks: SherwaniLook[];
};

export const sherwaniCollections: SherwaniCollection[] = [
  {
    slug: "varahi",
    name: "VARAHI",
    cover: "/images/groom/sherwani/varahi/cover.jpg",

    looks: [
      {
        id: "01",
        slug: "look-01",
        name: "Look 01",
        hero: "/images/groom/sherwani/varahi/look-01/1.webp",
        images: [
          "/images/groom/sherwani/varahi/look-01/1.webp",
          "/images/groom/sherwani/varahi/look-01/2.webp",
          "/images/groom/sherwani/varahi/look-01/3.webp",
            "/images/groom/sherwani/varahi/look-01/4.webp",
        
        ],
      },

      {
        id: "02",
        slug: "look-02",
        name: "Look 02",
        hero: "/images/groom/sherwani/varahi/look-02/1.webp",
        images: [
          "/images/groom/sherwani/varahi/look-02/1.webp",
          "/images/groom/sherwani/varahi/look-02/2.webp",
           "/images/groom/sherwani/varahi/look-02/3.webp",
            "/images/groom/sherwani/varahi/look-02/4.webp",
             "/images/groom/sherwani/varahi/look-02/5.webp",
            "/images/groom/sherwani/varahi/look-02/6.webp",

       
       
        ],
      },

      {
        id: "03",
        slug: "look-03",
        name: "Look 03",
        hero: "/images/groom/sherwani/varahi/look-03/1.webp",
        images: [
          "/images/groom/sherwani/varahi/look-03/1.webp",
          "/images/groom/sherwani/varahi/look-03/2.webp",
          "/images/groom/sherwani/varahi/look-03/3.webp",

        
        ],
      },

      {
        id: "04",
        slug: "look-04",
        name: "Look 04",
        hero: "/images/groom/sherwani/varahi/look-04/1.webp",
        images: [
          "/images/groom/sherwani/varahi/look-04/1.webp",
          "/images/groom/sherwani/varahi/look-04/2.webp",
          "/images/groom/sherwani/varahi/look-04/3.webp",
           "/images/groom/sherwani/varahi/look-04/4.webp",
          "/images/groom/sherwani/varahi/look-04/5.webp",
          "/images/groom/sherwani/varahi/look-04/6.webp",
           "/images/groom/sherwani/varahi/look-04/7.webp",
          "/images/groom/sherwani/varahi/look-04/8.webp",
          "/images/groom/sherwani/varahi/look-04/9.webp",
          "/images/groom/sherwani/varahi/look-04/10.webp",

            

          
        ],
      },

      {
        id: "05",
        slug: "look-05",
        name: "Look 05",
        hero: "/images/groom/sherwani/varahi/look-05/1.webp",
        images: [
          "/images/groom/sherwani/varahi/look-05/1.webp",
          "/images/groom/sherwani/varahi/look-05/2.webp",
          "/images/groom/sherwani/varahi/look-05/3.webp",
             "/images/groom/sherwani/varahi/look-05/4.webp",
          "/images/groom/sherwani/varahi/look-05/5.webp",
          "/images/groom/sherwani/varahi/look-05/6.webp",
      
        ],
      },
    ],
  },
];
