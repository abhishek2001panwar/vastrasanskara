"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, date, time } = formData;

    const message = `Hello, I would like to book a consultation.

Name: ${name}
Preferred Date: ${date}
Preferred Time: ${time}`;

    const whatsappUrl = `https://wa.me/918088316661?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setIsModalOpen(false);

    setFormData({
      name: "",
      date: "",
      time: "",
    });
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#e0d3c5] min-h-[500px] lg:min-h-[580px] flex items-center select-none">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="relative w-full lg:w-[65%] h-full">
            <Image
              src="/bridenew.webp"
              alt="Bespoke Couture - Heritage Redefined"
              fill
              priority
              className="object-cover object-right lg:object-center"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e0d3c5] via-[#e0d3c5]/70 lg:via-[#e0d3c5]/40 to-transparent w-full lg:w-[50%]" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 py-12 flex items-center">

          {/* Pagination */}
          <div className="hidden lg:flex flex-col items-center gap-2 text-[#5e5248] text-[11px] font-medium mr-12 shrink-0">
            <button className="text-[#2b241f] font-semibold">
              01
            </button>

            <div className="w-3 h-[1px] bg-[#9e8b7a]" />

            <button className="opacity-60 hover:opacity-100 transition-opacity">
              02
            </button>

            <button className="opacity-60 hover:opacity-100 transition-opacity">
              03
            </button>
          </div>

          {/* Text Content */}
          <div className="max-w-xl">

            {/* Tagline */}
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#6b5d50]">
              BESPOKE COUTURE
            </p>

            {/* Heading */}
            <h1 className="font-serif text-[42px] sm:text-[56px] lg:text-[68px] leading-[1.02] text-[#1c1714] font-normal tracking-tight">
              HERITAGE.
              <br />
              REDEFINED.
            </h1>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3 w-full max-w-[340px]">
              <div className="h-[1px] flex-1 bg-[#b39f8d]" />
              <div className="w-1.5 h-1.5 bg-[#8c7460] rotate-45 shrink-0" />
              <div className="h-[1px] flex-1 bg-[#b39f8d]" />
            </div>

            {/* Description */}
            <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#52463b] max-w-md">
              Timeless traditions. Intricate craftsmanship.
              <br className="hidden sm:inline" />
              Modern luxury - curated for your most cherished moments.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">

              {/* Primary Button */}
              <button
                className="bg-[#8B0000] hover:bg-[#6e2220] text-[#F6F1EB] border border-[#8C2E2C] px-8 py-3.5 text-xs font-medium tracking-widest uppercase transition-colors shadow-sm"
              >
                Explore Collection
              </button>

              {/* Consultation Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="border border-[#3e342c] hover:bg-[#3e342c] hover:text-white text-[#2c241f] px-6 py-3 text-[11px] font-medium tracking-widest uppercase transition-colors"
              >
                BOOK A CONSULTATION
              </button>

            </div>
          </div>
        </div>
      </section>


      {/* ================= CONSULTATION MODAL ================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-5"
          onClick={() => setIsModalOpen(false)}
        >

          {/* Blurred Background */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

          {/* Modal */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[500px] bg-[#f6f1eb] p-7 sm:p-10 shadow-2xl animate-[modalIn_0.3s_ease-out]"
          >

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 text-[#5e5248] hover:text-[#8B0000] text-xl transition-colors"
              aria-label="Close consultation form"
            >
              ×
            </button>

            {/* Header */}
            <div className="text-center mb-8">

              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8c7460] mb-3">
                BESPOKE COUTURE
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1714]">
                Book a Consultation
              </h2>

              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="w-16 h-[1px] bg-[#b39f8d]" />
                <div className="w-1.5 h-1.5 bg-[#8c7460] rotate-45" />
                <div className="w-16 h-[1px] bg-[#b39f8d]" />
              </div>

              <p className="mt-4 text-sm text-[#52463b]">
                Tell us when you'd like to connect with us.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label className="block text-[11px] tracking-widest uppercase text-[#5e5248] mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-[#c8b8a8] bg-transparent px-4 py-3 text-sm text-[#1c1714] outline-none focus:border-[#8B0000] transition-colors"
                />
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-[11px] tracking-widest uppercase text-[#5e5248] mb-2">
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border border-[#c8b8a8] bg-transparent px-4 py-3 text-sm text-[#1c1714] outline-none focus:border-[#8B0000] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] tracking-widest uppercase text-[#5e5248] mb-2">
                    Preferred Time
                  </label>

                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full border border-[#c8b8a8] bg-transparent px-4 py-3 text-sm text-[#1c1714] outline-none focus:border-[#8B0000] transition-colors"
                  />
                </div>

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-3 bg-[#8B0000] hover:bg-[#6e2220] text-[#F6F1EB] py-4 text-xs font-medium tracking-[0.2em] uppercase transition-colors"
              >
                Continue on WhatsApp
              </button>

            </form>

          </div>
        </div>
      )}

      {/* Modal Animation */}
      <style jsx>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}