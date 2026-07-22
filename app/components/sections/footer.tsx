'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f0e8df] text-[#2b241f] font-sans border-t border-[#e2d7cb]">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-[1440px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
          
          {/* 1. Brand Logo & Tagline */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center text-center py-4 lg:pr-8 lg:border-r border-[#ded3c5]">
            <div className="flex flex-col items-center">
              {/* VS Logo Monogram */}
              <span className="font-serif text-4xl tracking-wider text-[#a88653] font-light mb-1">
                VS
              </span>
              {/* Brand Name */}
              <h3 className="font-serif text-sm tracking-[0.25em] font-medium uppercase text-[#2b241f] mt-1">
                VASTRASANSKARA
              </h3>
              {/* Sub-tagline */}
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#736456] mt-1">
                HERITAGE REDEFINED
              </p>
            </div>
          </div>

          {/* 2. SHOP Column (Split into 2 sub-columns) */}
          <div className="lg:col-span-3 lg:px-8 lg:border-r border-[#ded3c5]">
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-[#2b241f]">
              SHOP
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-[#5e5248]">
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-black transition-colors">Bridal Couture</a>
                <a href="#" className="hover:text-black transition-colors">Muhurtham Collection</a>
                <a href="#" className="hover:text-black transition-colors">Menswear</a>
                <a href="#" className="hover:text-black transition-colors">Kids Wear</a>
              </div>
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-black transition-colors">Designer Blouses</a>
                <a href="#" className="hover:text-black transition-colors">Accessories</a>
                <a href="#" className="hover:text-black transition-colors">Gift Cards</a>
              </div>
            </div>
          </div>

          {/* 3. CUSTOMER CARE Column (Split into 2 sub-columns) */}
          <div className="lg:col-span-3 lg:px-8 lg:border-r border-[#ded3c5]">
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-[#2b241f]">
              CUSTOMER CARE
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-[#5e5248]">
              
              <div className="flex flex-col space-y-2">
                <a href="#" className="hover:text-black transition-colors">FAQs</a>
                <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>

          {/* 4. ABOUT US Column (Split into 2 sub-columns) */}
          <div className="lg:col-span-3 lg:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-[#2b241f]">
                  ABOUT US
                </h4>
                <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-[11px] text-[#5e5248]">
                  <div className="flex flex-col space-y-2">
                    <a href="#" className="hover:text-black transition-colors">Our Story</a>
                    <a href="#" className="hover:text-black transition-colors">Our Atelier</a>
                    <a href="#" className="hover:text-black transition-colors">Craftsmanship</a>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <a href="#" className="hover:text-black transition-colors">Journal</a>
                    <a href="#" className="hover:text-black transition-colors">Careers</a>
                    <a href="#" className="hover:text-black transition-colors">Contact Us</a>
                  </div>
                </div>
              </div> */}

              {/* 5. CONNECT Column */}
              <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase mb-4 text-[#2b241f]">
                  CONNECT
                </h4>
                <div className="flex flex-col space-y-2.5 text-[11px] text-[#5e5248]">
                  <a href="tel:+918884468845" className="flex items-center space-x-2 hover:text-black transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#a88653] shrink-0" />
                    <span>+91 88844 68845</span>
                  </a>
                  <a href="mailto:hello@vastrasanskara.com" className="flex items-center space-x-2 hover:text-black transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#a88653] shrink-0" />
                    <span className="truncate">hello@vastrasanskara.com</span>
                  </a>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-[#a88653] shrink-0" />
                    <span>Bengaluru, Karnataka, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Payment Icons */}
      <div className="border-t border-[#ded3c5] bg-[#ebdcd0]">
        <div className="max-w-[1440px] mx-auto px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between text-[10px] tracking-wider text-[#635447] gap-3">
          
          {/* Copyright */}
          <div>
            © 2026 VASTRASANSKARA. ALL RIGHTS RESERVED.
          </div>

          {/* Accepted Payment Methods */}
         

        </div>
      </div>

    </footer>
  );
}

//  <div className="flex items-center space-x-4">
//             <span className="uppercase font-medium text-[9px] text-[#786758]">WE ACCEPT</span>
//             <div className="flex items-center space-x-3 text-xs font-semibold">
//               <span className="text-[#1a1f71] font-extrabold italic tracking-tighter">VISA</span>
              
//               {/* Mastercard Symbol */}
//               <div className="flex items-center -space-x-1">
//                 <span className="w-3.5 h-3.5 bg-[#eb001b] rounded-full opacity-90 inline-block" />
//                 <span className="w-3.5 h-3.5 bg-[#f79e1b] rounded-full opacity-90 inline-block" />
//               </div>

//               {/* RuPay */}
//               <span className="text-[#00529b] font-black italic text-[11px]">RuPay<span className="text-[#f26522]">&gt;</span></span>
              
//               {/* UPI */}
//               <span className="text-[#0f7938] font-bold text-[10px] tracking-tight">UPI</span>
//             </div>
//           </div>