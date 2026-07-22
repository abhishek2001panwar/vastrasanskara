import React from "react";
import {
  HandHeart,
  Gem,
  Truck,
  Lock,
  Ruler,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: HandHeart,
    title: "BESPOKE CRAFTSMANSHIP",
    description: "Every piece is handcrafted with love and precision.",
  },
  {
    icon: Gem,
    title: "PREMIUM MATERIALS",
    description: "Finest silks, zardozi & heritage textiles.",
  },
  
  {
    icon: Headphones,
    title: "EXPERT CONSULTATION",
    description: "One-on-one guidance from our designers.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#ebdcd0]   py-8 px-4 sm:px-8 border-t border-b border-[#dfcebf]">
      <div className="max-w-6xl mx-auto">
        {/* 3x2 Grid (3 columns across) with horizontal & vertical row dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 border-t md:border-t-0 border-[#d8c5b5]">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`
                  flex items-center gap-4 py-5 px-4 md:px-6
                  /* Vertical dividers between columns 1, 2, and 3 */
                  ${(index % 3 !== 0) ? 'md:border-l md:border-[#d8c5b5]' : ''}
                  /* Horizontal divider line between top 3 items and bottom 3 items */
                  ${index >= 3 ? 'md:border-t md:border-[#d8c5b5]' : ''}
                `}
              >
                {/* Clean Icon */}
                <Icon
                  size={32}
                  strokeWidth={1.2}
                  className="text-[#3b3129] shrink-0"
                />

                {/* Text Block */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2b241f] leading-tight">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-snug text-[#615347]">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}