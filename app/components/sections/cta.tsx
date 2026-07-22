'use client';

import React, { useState } from 'react';
import { PhoneCall } from 'lucide-react';

export default function StayInspired() {
  const [email, setEmail] = useState('');

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
       
      </div>
    </section>
  );
}