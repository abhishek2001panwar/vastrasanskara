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
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

const navItems = [
//   { title: "SHOP", dropdown: true },
{ title: "ABOUT US" },
  { title: "BRIDAL COUTURE" },
  {title: "BRIDE WEAR" },
  { title: "MENSWEAR" },
  { title: "MUHURTHAM" },
  { title: "BESPOKE" },
  { title: "KIDS WEAR" },
  { title: "WEDDING PACKAGES" },
  { title: "JOURNAL" },
  { title: "CONTACT" },
];

const whatsappLink = "https://wa.me/918088316661";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5ddd3] bg-[#F7F2EB] select-none">
      <div className="mx-auto flex h-[76px] sm:h-[84px] max-w-[1700px] items-center justify-between px-3 sm:px-6 lg:px-8 gap-2 lg:gap-4">

        {/* 1. Brand Logo Block */}
        <div className="shrink-0 pr-2">
          <Link href="/" className="group flex items-center">
            <Image
              src="/logomain.png"
              alt="Vastra Sanskara Logo"
              width={88}
              height={88}
              className="w-[88px] sm:w-[95px] h-auto object-contain"
            />
            <h1 className="font-serif text-[14px] sm:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-normal tracking-[0.01em] text-[#2f2925] leading-none uppercase">
              VASTRASANSKARA
            </h1>
           
           
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
               
              </Link>
            ))}
          </div>
        </nav>

        {/* 3. Right Action Icons */}
        <div className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-[#2f2925] shrink-0 pl-2">
          {/* <button aria-label="Search" className="hover:text-[#8C2E2C] transition-colors">
            <Search size={18} strokeWidth={1.5} />
          </button> */}


         <button aria-label="Account" className="hover:text-[#8C2E2C] transition-colors">
            {/* <User size={18} strokeWidth={1.5} /> */}
            <a href="https://www.instagram.com/vastrasanskara?igsh=N2puMzExcm9wdDAw" target="_blank" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          </button>

          <button aria-label="WhatsApp" className="hover:text-[#8C2E2C] transition-colors">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 stroke-[1.5]" />
            </a>
          </button>

          {/* <div className="relative cursor-pointer hover:text-[#8C2E2C] transition-colors">
            <ShoppingCart size={18} strokeWidth={1.5} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#8C2E2C] text-[9px] font-medium text-white">
              0
            </span>
          </div>  */}
        </div>

        {/* 4. Mobile & Tablet Controls */}
        <div className="flex lg:hidden items-center gap-4 text-[#2f2925]">
          

        

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
                
              </Link>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-[#ece3d8] flex items-center justify-center gap-4 text-[#2f2925]">
            <a href="https://www.instagram.com/vastrasanskara?igsh=N2puMzExcm9wdDAw" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7cdbf] bg-white/70 transition hover:border-[#8C2E2C] hover:text-[#8C2E2C]" aria-label="Instagram">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7cdbf] bg-white/70 transition hover:border-[#8C2E2C] hover:text-[#8C2E2C]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}