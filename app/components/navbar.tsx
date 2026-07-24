"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import Image from "next/image";

// Structure definition for navigation and sub-categories
interface SubCategoryItem {
  title: string;
  href?: string;
}

interface SubCategoryGroup {
  groupTitle: string;
  items: SubCategoryItem[];
}

interface NavItem {
  title: string;
  href?: string;
  groups?: SubCategoryGroup[];
}

const navItems: NavItem[] = [
  { title: "ABOUT", href: "/about" },
  {
    title: "THE BRIDE",
    groups: [
      {
        groupTitle: "Bridal Couture",
        items: [
          { title: "Bridal Blouses", href: "/bride/bridal-blouses" },
          { title: "Muhurtham Sarees", href: "/bride/muhurtham-sarees" },
          { title: "Reception Collection", href: "/bride/reception" },
          { title: "Lehenga Choli", href: "/bride/lehenga-choli" },
          { title: "Western Gowns", href: "/bride/western-gowns" },
          { title: "Indo-Western Gowns", href: "/bride/indo-western-gowns" },
        ],
      },
      {
        groupTitle: "Signature Collections",
        items: [
          { title: "Bridal Veils", href: "/bride/bridal-veils" },
          { title: "Bridal Accessories", href: "/bride/bridal-accessories" },
        ],
      },
      {
        groupTitle: "Services",
        items: [
          { title: "Bridal Consultation", href: "/bride/consultation" },
        ],
      },
    ],
  },
  {
    title: "THE GROOM",
    groups: [
      {
        groupTitle: "Wedding Collection",
        items: [
          { title: "Muhurtham Wear", href: "/groom/muhurtham-wear" },
          { title: "Indo-Western", href: "/groom/indo-western" },
          { title: "Party Wear Suits", href: "/groom/party-wear-suits" },
          { title: "Tuxedos", href: "/groom/tuxedos" },
        ],
      },
      {
        groupTitle: "Bespoke Collection",
        items: [
          { title: "Bespoke Shirts", href: "/groom/bespoke-shirts" },
          { title: "Designer Shirts", href: "/groom/designer-shirts" },
          { title: "Kurta & Bandhgala Sets", href: "/groom/kurta-bandhgala" },
        ],
      },
      {
        groupTitle: "Services",
        items: [
          { title: "Groom Consultation", href: "/groom/consultation" },
        ],
      },
    ],
  },
  {
    title: "BESPOKE",
    groups: [
      {
        groupTitle: "Men’s Bespoke",
        items: [
          { title: "Formal Suits", href: "/bespoke/mens-formal-suits" },
          { title: "Party Wear Suits", href: "/bespoke/mens-party-suits" },
          { title: "Business Formals", href: "/bespoke/business-formals" },
          { title: "Smart Casuals", href: "/bespoke/smart-casuals" },
          { title: "Designer Shirts", href: "/bespoke/mens-designer-shirts" },
        ],
      },
      {
        groupTitle: "Women’s Bespoke",
        items: [
          { title: "Regular Blouses", href: "/bespoke/regular-blouses" },
          { title: "Designer Blouses", href: "/bespoke/designer-blouses" },
          { title: "Anarkali Suits", href: "/bespoke/anarkali-suits" },
          { title: "Bridesmaids Collection", href: "/bespoke/bridesmaids" },
          { title: "Indo-Western Dresses", href: "/bespoke/womens-indo-western" },
          { title: "Evening Gowns", href: "/bespoke/evening-gowns" },
        ],
      },
      {
        groupTitle: "Experience",
        items: [
          { title: "Personal Consultation", href: "/bespoke/personal-consultation" },
          { title: "Measurements", href: "/bespoke/measurements" },
          { title: "Custom Design Journey", href: "/bespoke/design-journey" },
        ],
      },
    ],
  },
  {
    title: "WEDDINGS",
    groups: [
      {
        groupTitle: "Wedding Styling",
        items: [
          { title: "Wedding Packages", href: "/weddings/packages" },
          { title: "Complete Wedding Styling", href: "/weddings/complete-styling" },
          { title: "Bride & Groom Styling", href: "/weddings/couple-styling" },
          { title: "Family Styling", href: "/weddings/family-styling" },
        ],
      },
      {
        groupTitle: "Kids Wear (Mini V’s)",
        items: [
          { title: "Indian Collection", href: "/weddings/kids-indian" },
          { title: "Indo-Western Collection", href: "/weddings/kids-indo-western" },
        ],
      },
      {
        groupTitle: "Consultation",
        items: [
          { title: "Wedding Planning Consultation", href: "/weddings/planning-consultation" },
          { title: "Styling Appointment", href: "/weddings/styling-appointment" },
        ],
      },
    ],
  },
  { title: "JOURNAL", href: "/journal" },
  { title: "CONTACT", href: "/contact" },
];

const whatsappLink = "https://wa.me/918088316661";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (title: string) => {
    setActiveMobileMenu(activeMobileMenu === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5ddd3] bg-[#F7F2EB] select-none">
      <div className="mx-auto flex h-[76px] sm:h-[84px] max-w-[1700px] items-center justify-between px-3 sm:px-6 lg:px-8 gap-2 lg:gap-4">
        
        {/* 1. Brand Logo Block */}
        <div className="shrink-0 pr-2">
          <Link href="/" className="group flex items-center gap-2">
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

        {/* 2. Full Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center justify-center flex-1 py-1 px-2">
          <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8 shrink-0">
            {navItems.map((item) => (
              <div key={item.title} className="relative group py-6">
                <Link
                  href={item.href || "#"}
                  className="flex items-center gap-1 text-[10px] xl:text-[11px] 2xl:text-[12px] font-medium uppercase tracking-[0.08em] text-[#38322d] transition-colors hover:text-[#8B0000] whitespace-nowrap"
                >
                  {item.title}
                  {item.groups && (
                    <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Desktop Dropdown/Mega-Menu */}
                {item.groups && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:flex bg-[#F7F2EB] border border-[#e5ddd3] shadow-lg p-6 min-w-[500px] max-w-[850px] gap-8 z-50 rounded-b-sm">
                    {item.groups.map((group) => (
                      <div key={group.groupTitle} className="flex-1 min-w-[160px]">
                        <h4 className="text-[11px] font-semibold tracking-wider text-[#8B0000] uppercase pb-2 mb-3 border-b border-[#e5ddd3]/60">
                          {group.groupTitle}
                        </h4>
                        <ul className="space-y-2">
                          {group.items.map((subItem) => (
                            <li key={subItem.title}>
                              <Link
                                href={subItem.href || "#"}
                                className="text-[11px] text-[#38322d] hover:text-[#8B0000] transition-colors block leading-tight"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* 3. Right Action Icons */}
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

        {/* 4. Mobile Controls Toggle Button */}
        <div className="flex lg:hidden items-center gap-4 text-[#2f2925]">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="text-[#2f2925] p-1 ml-1"
          >
            {open ? <X size={26} strokeWidth={1.6} /> : <Menu size={26} strokeWidth={1.6} />}
          </button>
        </div>
      </div>

      {/* 5. Mobile & Tablet Drawer */}
      <div
        className={`lg:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
          open ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[#e5ddd3] bg-[#F7F2EB] px-6 py-6 shadow-inner">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <div key={item.title} className="border-b border-[#ece3d8] py-2">
                {item.groups ? (
                  <>
                    <button
                      onClick={() => toggleMobileSubmenu(item.title)}
                      className="flex w-full items-center justify-between py-1.5 text-[13px] font-medium uppercase tracking-wider text-[#38322d] hover:text-[#8B0000]"
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeMobileMenu === item.title ? "rotate-180 text-[#8B0000]" : ""
                        }`}
                      />
                    </button>

                    {activeMobileMenu === item.title && (
                      <div className="pl-3 pr-1 py-2 space-y-4 bg-[#f2ebd2]/20 my-1 rounded-sm">
                        {item.groups.map((group) => (
                          <div key={group.groupTitle} className="space-y-1.5">
                            <span className="text-[10.5px] font-semibold text-[#8B0000] tracking-wide uppercase block">
                              {group.groupTitle}
                            </span>
                            <ul className="pl-2 space-y-1.5 border-l border-[#e5ddd3]">
                              {group.items.map((subItem) => (
                                <li key={subItem.title}>
                                  <Link
                                    href={subItem.href || "#"}
                                    onClick={() => setOpen(false)}
                                    className="text-[12px] text-[#38322d] hover:text-[#8B0000] block"
                                  >
                                    {subItem.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-1.5 text-[13px] font-medium uppercase tracking-wider text-[#38322d] hover:text-[#8B0000]"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Social Icons for Mobile Drawer */}
          <div className="mt-6 pt-4 border-t border-[#ece3d8] flex items-center justify-center gap-4 text-[#2f2925]">
            <a
              href="https://www.instagram.com/vastrasanskara?igsh=N2puMzExcm9wdDAw"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7cdbf] bg-white/70 transition hover:border-[#8B0000] hover:text-[#8B0000]"
              aria-label="Instagram"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7cdbf] bg-white/70 transition hover:border-[#8B0000] hover:text-[#8B0000]"
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