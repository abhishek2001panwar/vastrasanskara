'use client';

import React, { useState } from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function StayInspired() {
  const [email, setEmail] = useState('');

  const whatsappLink = "https://wa.me/918088316661";
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribed email:', email);
    setEmail('');
  };

  return (
    <section className="bg-[#ebdcd0] py-3.5 px-4 sm:px-8 border-t border-b border-[#dfcebf]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        
        {/* Left Text Block */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <h4 className="text-xs font-semibold text-[#2b241f] tracking-widest uppercase shrink-0">
            STAY INSPIRED
          </h4>
          <span className="hidden sm:inline-block h-3 w-[1px] bg-[#a8998c]" />
          <p className="text-[11px] text-[#5e5248] tracking-wide max-w-sm leading-tight">
            Be the first to know about new collections, exclusive offers and style inspiration.
          </p>
        </div>

        {/* Center/Right Email Subscription Input */}
        <form 
          onSubmit={handleSubmit} 
          className="flex items-center w-full max-w-md border border-[#c4b3a4] bg-[#ebdcd0] focus-within:border-[#2b241f] transition-colors"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full bg-transparent px-3 py-1.5 text-xs text-[#2b241f] placeholder-[#8a7a6e] outline-none border-none"
          />
          <button
            type="submit"
            className="bg-[#8C2E2C] hover:bg-[#6e2220] text-[#F6F1EB] border border-[#8C2E2C] text-[10px] font-medium tracking-widest uppercase px-4 py-2 transition-colors shrink-0"
          >
            SUBSCRIBE
          </button>
        </form>

        {/* Social Icons (SVGs) */}


 <div className="hidden lg:flex items-center gap-4 xl:gap-5 text-[#2f2925] shrink-0 pl-2">
          <a
            href="https://www.instagram.com/vastrasanskara?igsh=N2puMzExcm9wdDAw"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#8B0000] transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#8B0000] transition-colors"
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 stroke-[1.5]" />
          </a>
        </div>

       
      </div>
    </section>
  );
}