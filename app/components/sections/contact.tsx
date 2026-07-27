"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="relative w-full bg-[#e0d3c5] py-16 px-6 sm:px-12 text-[#1c1714] select-none">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Title & Image Frame */}
        <div className="flex flex-col items-center lg:items-start space-y-8">
          
          {/* Section Header */}
          <div className="text-center lg:text-left">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.3em] text-[#6b5d50]">
              Get In Touch
            </p>
            <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.05] text-[#1c1714] font-normal tracking-tight uppercase">
              CONNECT WITH US
            </h2>
            
            {/* Custom Divider Line with Diamond Icon */}
            <div className="mt-4 flex items-center gap-3 w-full max-w-[280px] mx-auto lg:mx-0">
              <div className="h-[1px] flex-1 bg-[#b39f8d]" />
              <div className="w-1.5 h-1.5 bg-[#8c7460] rotate-45 shrink-0" />
              <div className="h-[1px] flex-1 bg-[#b39f8d]" />
            </div>
          </div>

          {/* Three-pill Connected Arched Frame Container */}
          <div className="relative w-full max-w-lg aspect-[4/3] flex gap-2 sm:gap-3 items-center justify-center">
            
            {/* Pill 1 */}
            <div className="relative flex-1 h-full rounded-full overflow-hidden border border-[#b39f8d]/40 shadow-md">
              <Image
                src="/bridenew.webp" // Replace with your image asset path
                alt="Connect with us gallery 1"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 33vw, 20vw"
              />
            </div>

            {/* Pill 2 (Elevated Center) */}
            <div className="relative flex-1 h-[105%] rounded-full overflow-hidden border border-[#b39f8d]/60 shadow-lg -translate-y-2">
              <Image
                src="/bridenew.webp" // Replace with your image asset path
                alt="Connect with us gallery 2"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 33vw, 20vw"
              />
            </div>

            {/* Pill 3 */}
            <div className="relative flex-1 h-full rounded-full overflow-hidden border border-[#b39f8d]/40 shadow-md">
              <Image
                src="/bridenew.webp" // Replace with your image asset path
                alt="Connect with us gallery 3"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 33vw, 20vw"
              />
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: Form & Contact Info */}
        <div className="flex flex-col space-y-8 lg:pl-4">
          
          {/* Subheading */}
          <div>
            <p className="text-[12px] sm:text-[13px] text-[#6b5d50] mb-3 font-normal leading-relaxed">
              Fill out the form, call or email and our support team will reach out to you.
            </p>
            <h3 className="font-serif text-[28px] sm:text-[34px] font-normal leading-tight text-[#1c1714]">
              Get in Touch
            </h3>
            <p className="text-[18px] sm:text-[22px] text-[#52463b] font-light">
              You can reach us <span className="font-semibold text-[#1c1714]">anytime</span>
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-[#f6f1eb]/60 border border-[#b39f8d] rounded-lg px-4 py-3.5 text-[13px] text-[#1c1714] placeholder-[#8c7460] focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition"
                required
              />
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full bg-[#f6f1eb]/60 border border-[#b39f8d] rounded-lg px-4 py-3.5 text-[13px] text-[#1c1714] placeholder-[#8c7460] focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition"
                required
              />
            </div>

            <textarea
              name="message"
              rows={4}
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#f6f1eb]/60 border border-[#b39f8d] rounded-lg px-4 py-3.5 text-[13px] text-[#1c1714] placeholder-[#8c7460] focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition resize-none"
              required
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#8B0000] hover:bg-[#6e2220] text-[#F6F1EB] border border-[#8C2E2C] px-8 py-3.5 text-xs font-medium tracking-widest uppercase transition-colors shadow-sm"
              >
                SUBMIT
              </button>
            </div>
          </form>

          {/* Contact Info Items */}
          <div className="space-y-3 pt-2 text-[#52463b]">
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-[#8B0000]" />
              <a
                href="mailto:info@schoolofathens.art"
                className="hover:underline text-[13px] font-medium text-[#1c1714]"
              >
                info@schoolofathens.art
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-[#8B0000]" />
              <a
                href="tel:+917411274433"
                className="hover:underline text-[13px] font-medium text-[#1c1714]"
              >
                +91 7411274433
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-[#8B0000]" />
              <span className="text-[13px] font-medium text-[#1c1714]">Whitefield</span>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-[#8B0000]" />
              <span className="text-[13px] font-medium text-[#1c1714]">Brookefield</span>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#8B0000] hover:bg-[#6e2220] text-[#F6F1EB] border border-[#8C2E2C] px-5 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-colors">
          <Calendar className="w-4 h-4" />
          <span className="text-[11px] font-medium tracking-widest uppercase">
            Book Free Trial
          </span>
        </button>
      </div>

    </section>
  );
}