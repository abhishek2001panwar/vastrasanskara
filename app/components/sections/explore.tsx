'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Collection {
  id: number;
  title: string;
  image: string;
  link: string;
}

const collections: Collection[] = [
  {
    id: 1,
    title: 'BRIDAL COUTURE',
    // Luxury Indian bride with ornate veil and traditional jewellery
    image: '/bridalculture.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'MUHURTHAM COLLECTION',
    // Elegant Indian woman in a rich silk saree against warm moody backdrop
    image: '/muhurtham.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'MENSWEAR',
    // Groom/man in handcrafted designer Sherwani with embroidery
    image: '/menwear.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'DESIGNER BLOUSES',
    // Intricate zardozi embroidery close-up details on ethnic couture
    image: '/designerblouse.jpg',
    link: '#',
  },
  {
    id: 5,
    title: 'ETHNIC KIDS WEAR',
    // Children in traditional festive ethnic outfits
    image: '/ethnicwear.jpg',
    link: '#',
  },
  {
    id: 6,
    title: 'ACCESSORIES',
    // Royal antique gold necklace and bridal jewellery set on marble
    image: '/accessories.jpg',
    link: '#',
  },
  {
    id: 7,
    title: 'GIFT CARDS',
    // Premium luxury gift packaging with ribbon and gold foil feel
    image: '/image.png',
    link: '#',
  },
];

export default function Explore() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth / 4;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#f8f4ef] py-16 px-6 sm:px-12 lg:px-16 select-none">
      <div className="max-w-[1530px] mx-auto">
        
        {/* Luxury Header Section */}
        <div className="text-center mb-10">
          <p className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] text-[#8c7a6b] uppercase mb-2">
            Curated Lines
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1c1714] tracking-[0.2em] uppercase font-light">
            EXPLORE OUR COLLECTIONS
          </h2>
          <div className="flex items-center justify-center mt-3">
            <div className="h-[1px] w-12 bg-[#b5a392]/40" />
            <div className="w-1.5 h-1.5 bg-[#8c7460] rotate-45 mx-2" />
            <div className="h-[1px] w-12 bg-[#b5a392]/40" />
          </div>
        </div>

        {/* Outer Flex Container ensuring arrows sit entirely OUTSIDE the cards */}
        <div className="flex items-center gap-3 sm:gap-5">
          
          {/* Left Navigation Button */}
          <button
            onClick={() => scroll('left')}
            className="shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#b8a490] bg-[#FAF7F2] text-[#3e342c] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-[#1c1714] hover:text-[#f8f4ef] hover:border-[#1c1714] transition-all duration-300 active:scale-95"
            aria-label="Previous Collection"
          >
            <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Scrollable Track Container */}
          <div className="flex-1 overflow-hidden">
            <div
              ref={sliderRef}
              className="flex overflow-x-auto gap-4 sm:gap-5 scrollbar-hide scroll-smooth w-full py-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {collections.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-15px)] group relative overflow-hidden aspect-[5/6] bg-[#e6ded2] rounded-xs"
                >
                  {/* Background Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center object-top  rounded-md transform transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 transition-opacity" />

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-sm sm:text-base font-serif tracking-[0.2em] uppercase font-normal drop-shadow-sm mb-1.5">
                      {item.title}
                    </h3>
                    {/* <div className="inline-flex items-center text-[10px] tracking-[0.2em] text-white/80 group-hover:text-white uppercase transition-colors">
                      <span>SHOP NOW</span>
                      <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300 font-mono">
                        →
                      </span>
                    </div> */}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={() => scroll('right')}
            className="shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#b8a490] bg-[#FAF7F2] text-[#3e342c] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-[#1c1714] hover:text-[#f8f4ef] hover:border-[#1c1714] transition-all duration-300 active:scale-95"
            aria-label="Next Collection"
          >
            <ChevronRight className="w-5 h-5 stroke-[1.5]" />
          </button>

        </div>

      </div>
    </section>
  );
}