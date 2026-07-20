'use client';
import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const cardsData = [
  {
    id: 1,
    title: 'ETHNIC KIDS WEAR',
    description: 'Timeless ethnic ensembles for your little ones.\n\nTraditional. Elegant. Adorable.',
    features: [],
    buttonText: 'EXPLORE NOW',
    buttonLink: '#',
    imageSrc: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Ethnic Kids Wear'
  },
  {
    id: 2,
    title: 'WEDDING COUTURE PACKAGES',
    subtitle: 'Complete couture solutions for your entire wedding journey.',
    features: [
      'Bride & Groom Outfits',
      'Family Ensembles',
      'Custom Styling & Fittings',
      'Premium Packaging'
    ],
    buttonText: 'EXPLORE PACKAGES',
    buttonLink: '#',
    imageSrc: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Wedding Couture Packages'
  },
  {
    id: 3,
    title: 'BOOK YOUR CONSULTATION',
    subtitle: 'Begin your couture journey with a one-on-one consultation.',
    features: [
      'Personalized Styling',
      'Fabric & Design Guidance',
      'Perfect Fit Assurance'
    ],
    buttonText: 'SCHEDULE NOW',
    buttonLink: '#',
    imageSrc: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Book Your Consultation'
  }
];

export default function Work() {
  return (
    <section className="bg-[#f5efe6] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid: 2 items per row on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="relative flex flex-col justify-center min-h-[340px] rounded-sm overflow-hidden shadow-sm group border border-[#e6ded2]"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  
                  height={400}
                    width={700}

                  className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Soft Fade Overlay: Solid warm beige on the left, fading gradient to transparent on the right */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#d9c9b5] via-[#d9c9b5]/90 sm:via-[#d9c9b5]/85 to-transparent sm:to-transparent w-full sm:w-[85%]" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 p-6 sm:p-8 max-w-full sm:max-w-[55%] flex flex-col justify-between h-full">
                <div>
                  {/* Title */}
                  <h1 className="text-lg font-serif tracking-widest text-[#2c241e] font-semibold uppercase mb-3">
                    {card.title}
                  </h1>

                  {/* Text Description / Subtitle */}
                  {card.subtitle && (
                    <p className="text-xs text-[#52463b] leading-relaxed mb-4">
                      {card.subtitle}
                    </p>
                  )}
                  {card.description && (
                    <p className="text-xs text-[#52463b] leading-relaxed whitespace-pre-line mb-4">
                      {card.description}
                    </p>
                  )}

                  {/* Bulleted Features List (if available) */}
                  {card.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-[#42372d]">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-[#7c6348] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Outline Action Button */}
                <div className="mt-4">
                  <a
                    href={card.buttonLink}
                    className="inline-flex items-center px-4 py-2 border border-[#42372d] text-[#2c241e] text-[11px] tracking-widest font-semibold uppercase hover:bg-[#2c241e] hover:text-[#f5efe6] transition-colors duration-300"
                  >
                    {card.buttonText} <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}