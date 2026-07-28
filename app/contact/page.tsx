"use client";

import React, { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function Page() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear messages when user starts typing
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const {
      fullName,
      mobileNumber,
      message,
    } = formData;

    try {
      // ============================
      // SAVE DATA TO SUPABASE
      // ============================

      const { error } = await supabase
        .from("contact")
        .insert([
          {
            full_name: fullName,
            mobile_number: mobileNumber,
            message: message,
          },
        ]);

      if (error) {
        console.error(
          "Supabase Error:",
          error
        );

        throw new Error(
          "Failed to submit the form"
        );
      }

      // ============================
      // CREATE WHATSAPP MESSAGE
      // ============================

      const whatsappMessage = `Hello, I would like to get in touch.

Name: ${fullName}
Phone: ${mobileNumber}
Message: ${message}`;

      const whatsappUrl = `https://wa.me/918088316661?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // ============================
      // SHOW SUCCESS MESSAGE
      // ============================

      setSuccessMessage(
        "Thank you! Your message has been received."
      );

      // ============================
      // RESET FORM
      // ============================

      setFormData({
        fullName: "",
        mobileNumber: "",
        message: "",
      });

      // ============================
      // OPEN WHATSAPP
      // ============================

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setErrorMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full bg-[#f6f1eb] py-16 lg:py-24 px-6 sm:px-12 select-none">
      <div className="max-w-[1280px] mx-auto">

        {/* ================= SECTION HEADING ================= */}
        <div className="text-center mb-12 lg:mb-16">

          <h2 className="font-serif text-[38px] sm:text-[50px] lg:text-[58px] tracking-tight text-[#1c1714] uppercase leading-tight">
            Connect With Us
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mt-4">

            <div className="w-16 h-[1px] bg-[#b39f8d]" />

            <div className="w-1.5 h-1.5 bg-[#8c7460] rotate-45" />

            <div className="w-16 h-[1px] bg-[#b39f8d]" />

          </div>
        </div>


        {/* ================= CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">


          {/* ================= LEFT SIDE - FULL IMAGE ================= */}
         {/* ================= LEFT SIDE - FULL IMAGE ================= */}
<div className="lg:col-span-6 w-full flex items-center justify-center">
  <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] lg:aspect-[3/4] max-h-[650px] overflow-hidden rounded-2xl shadow-sm">
    <Image
      src="/contactimage.png"
      alt="Bespoke Collection"
      fill
      priority
      className="object-cover object-center w-full h-full"
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  </div>
</div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">


            {/* ================= HEADING ================= */}
            <div>

              <p className="text-[12px] uppercase tracking-widest text-[#6b5d50] mb-2">
                Fill out the form, call or email and our team will reach out to you
              </p>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#1c1714] font-normal leading-snug">

                Get in Touch

                <span className="block font-sans text-lg sm:text-xl text-[#52463b] font-light mt-1">
                  You can reach us anytime
                </span>

              </h3>

            </div>


            {/* ================= CONTACT FORM ================= */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* Name + Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Full Name */}
                <div>

                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    disabled={isSubmitting}
                    className="w-full border border-[#c8b8a8] bg-[#e0d3c5]/30 rounded-xl px-4 py-3.5 text-sm text-[#1c1714] placeholder-[#8c7460] outline-none focus:border-[#8B0000] focus:bg-transparent transition-all disabled:opacity-50"
                  />

                </div>


                {/* Mobile Number */}
                <div>

                  <input
                    type="tel"
                    name="mobileNumber"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    disabled={isSubmitting}
                    className="w-full border border-[#c8b8a8] bg-[#e0d3c5]/30 rounded-xl px-4 py-3.5 text-sm text-[#1c1714] placeholder-[#8c7460] outline-none focus:border-[#8B0000] focus:bg-transparent transition-all disabled:opacity-50"
                  />

                </div>

              </div>


              {/* Message */}
              <div>

                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  disabled={isSubmitting}
                  className="w-full border border-[#c8b8a8] bg-[#e0d3c5]/30 rounded-xl px-4 py-3.5 text-sm text-[#1c1714] placeholder-[#8c7460] outline-none focus:border-[#8B0000] focus:bg-transparent transition-all resize-none disabled:opacity-50"
                />

              </div>


              {/* ================= SUCCESS MESSAGE ================= */}
              {successMessage && (
                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                  {successMessage}
                </div>
              )}


              {/* ================= ERROR MESSAGE ================= */}
              {errorMessage && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}


              {/* Submit Button */}
              <div className="flex justify-end">

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#8B0000] hover:bg-[#6e2220] disabled:bg-[#8B0000]/60 disabled:cursor-not-allowed text-[#F6F1EB] px-10 py-3.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase transition-all shadow-md active:scale-[0.98]"
                >

                  {isSubmitting
                    ? "Submitting..."
                    : "Submit"}

                </button>

              </div>

            </form>


            {/* ================= DIRECT CONTACT DETAILS ================= */}
            <div className="pt-4 border-t border-[#b39f8d]/40 space-y-4 text-xs sm:text-sm text-[#52463b]">


              {/* Email */}
              <a
                href="mailto:vastrasanskara@gmail.com"
                className="flex items-center gap-3 hover:text-[#8B0000] transition-colors"
              >

                <svg
                  className="w-4 h-4 text-[#8c7460]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />

                </svg>

                <span>
                  vastrasanskara@gmail.com
                </span>

              </a>


              {/* Phone */}
              <a
                href="tel:+918088316661"
                className="flex items-center gap-3 hover:text-[#8B0000] transition-colors"
              >

                <svg
                  className="w-4 h-4 text-[#8c7460]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />

                </svg>

                <span>
                  +91 8088316661
                </span>

              </a>


              {/* Location */}
              <div className="flex items-start gap-3">

                <svg
                  className="w-4 h-4 text-[#8c7460] shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />

                </svg>

                <span className="leading-relaxed">
                  337/B, Ground Floor
                  <br />
                  18th Cross, Sadashivanagar
                  <br />
                  Bengaluru
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}