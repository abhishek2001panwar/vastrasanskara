"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { title: "SHOP", dropdown: true },
  { title: "BRIDAL COUTURE" },
  { title: "MUHURTHAM" },
  { title: "MENSWEAR" },
  { title: "KIDS WEAR" },
  { title: "BESPOKE" },
  { title: "WEDDING PACKAGES" },
  { title: "ABOUT US" },
  { title: "JOURNAL" },
  { title: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5ddd3] bg-[#F7F2EB] select-none">
      <div className="mx-auto flex h-[76px] sm:h-[84px] max-w-[1700px] items-center justify-between px-3 sm:px-6 lg:px-8 gap-2 lg:gap-4">

        {/* 1. Brand Logo Block */}
        <div className="shrink-0 pr-2">
          <Link href="/" className="group block">
            <h1 className="font-serif text-[17px] sm:text-[22px] lg:text-[22px] xl:text-[25px] 2xl:text-[28px] font-normal tracking-[0.03em] text-[#2f2925] leading-tight">
              VASTRASANSKARA
            </h1>
            <p className="hidden sm:block font-serif text-[8px] xl:text-[9.5px] text-center uppercase tracking-[0.35em] text-[#655c55]">
              Heritage Redefined
            </p>
          </Link>
        </div>

        {/* 2. Full Desktop Navigation Bar (Visible on all Desktop/Laptop Screens: lg and up) */}
        <nav className="hidden lg:flex items-center justify-center flex-1 overflow-x-auto scrollbar-hide py-1 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex items-center gap-3 xl:gap-4 2xl:gap-6 shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href="#"
                className="flex items-center gap-0.5 text-[9.5px] xl:text-[10.5px] 2xl:text-[11px] font-regular uppercase tracking-[0.06em] xl:tracking-[0.08em] text-[#38322d] transition-colors hover:text-[#8C2E2C] whitespace-nowrap"
              >
                {item.title}
                {item.dropdown && (
                  <ChevronDown size={11} strokeWidth={1.5} className="shrink-0 opacity-70" />
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* 3. Right Action Icons */}
        <div className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-[#2f2925] shrink-0 pl-2">
          <button aria-label="Search" className="hover:text-[#8C2E2C] transition-colors">
            <Search size={18} strokeWidth={1.5} />
          </button>

          <button aria-label="Account" className="hover:text-[#8C2E2C] transition-colors">
            <User size={18} strokeWidth={1.5} />
          </button>

          <button aria-label="Wishlist" className="hover:text-[#8C2E2C] transition-colors">
            <Heart size={18} strokeWidth={1.5} />
          </button>

          <div className="relative cursor-pointer hover:text-[#8C2E2C] transition-colors">
            <ShoppingCart size={18} strokeWidth={1.5} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#8C2E2C] text-[9px] font-medium text-white">
              0
            </span>
          </div>
        </div>

        {/* 4. Mobile & Tablet Controls */}
        <div className="flex lg:hidden items-center gap-4 text-[#2f2925]">
          <button aria-label="Search">
            <Search size={19} strokeWidth={1.5} />
          </button>

          <div className="relative cursor-pointer">
            <ShoppingCart size={19} strokeWidth={1.5} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#8C2E2C] text-[9px] text-white">
              0
            </span>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="text-[#2f2925] p-1 ml-1"
          >
            {open ? (
              <X size={26} strokeWidth={1.6} />
            ) : (
              <Menu size={26} strokeWidth={1.6} />
            )}
          </button>
        </div>

      </div>

      {/* 5. Mobile & Tablet Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[#e5ddd3] bg-[#F7F2EB] px-6 py-6 shadow-inner">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href="#"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-[#ece3d8] py-3.5 text-[13px] font-medium uppercase tracking-wider text-[#38322d] hover:text-[#8C2E2C]"
              >
                {item.title}
                {item.dropdown && (
                  <ChevronDown size={15} strokeWidth={1.5} />
                )}
              </Link>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-[#ece3d8] flex items-center justify-around text-[#2f2925]">
            <button className="flex items-center gap-2 text-xs uppercase tracking-wider">
              <Search size={18} strokeWidth={1.5} /> Search
            </button>
            <button className="flex items-center gap-2 text-xs uppercase tracking-wider">
              <User size={18} strokeWidth={1.5} /> Account
            </button>
            <button className="flex items-center gap-2 text-xs uppercase tracking-wider">
              <Heart size={18} strokeWidth={1.5} /> Wishlist
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}