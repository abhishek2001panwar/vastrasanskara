import React from 'react';
import { Calendar, Truck } from 'lucide-react';

function Top() {
  return (
    <div className="bg-[#8B0000] text-[#F6F1EB] py-2 sm:py-2.5 px-4 sm:px-6 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-8 text-[11px] sm:text-xs font-medium tracking-widest uppercase text-center">
        
        {/* Book a Consultation */}
        <a 
          href="#consultation" 
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity py-0.5"
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c3a368] shrink-0" />
          <span>Book a Consultation</span>
        </a>

        {/* Vertical Divider for Desktop View */}
        <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#c3a368]/40" />

        {/* Complimentary Shipping */}
        <div className="flex items-center space-x-2 py-0.5">
          <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c3a368] shrink-0" />
          <span>Complimentary Shipping Pan India</span>
        </div>

      </div>
    </div>
  );
}

export default Top;