"use client";

import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
          },
        }
      );
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-r from-black via-neutral-900 to-black text-white pt-20 pb-10 px-6 sm:px-12 font-sans"
    >
      {/* Background abstract glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Travel Quote */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-xl md:text-2xl italic font-light text-orange-400 transition-all duration-300">
          "Travel is the only thing you buy that makes you richer."
        </p>
      </div>
      <hr className="my-10 border-white/20" />
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {/* Company */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Company
          </h3>
          <ul className="space-y-1 text-sm text-gray-400 transition-all duration-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Destinations
          </h3>
          <ul className="space-y-1 text-sm text-gray-400 transition-all duration-300">
            <li className="hover:text-white cursor-pointer">Rajasthan</li>
            <li className="hover:text-white cursor-pointer">Goa</li>
            <li className="hover:text-white cursor-pointer">Kerala</li>
            <li className="hover:text-white cursor-pointer">Himalayas</li>
            <li className="hover:text-white cursor-pointer">Golden Triangle</li>
          </ul>
        </div>

        {/* Packages */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Packages
          </h3>
          <ul className="space-y-1 text-sm text-gray-400 transition-all duration-300">
            <li className="hover:text-white cursor-pointer">Cultural Tours</li>
            <li className="hover:text-white cursor-pointer">Adventure</li>
            <li className="hover:text-white cursor-pointer">Honeymoon</li>
            <li className="hover:text-white cursor-pointer">Luxury</li>
            <li className="hover:text-white cursor-pointer">Family</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Services
          </h3>
          <ul className="space-y-1 text-sm text-gray-400 transition-all duration-300">
            <li className="hover:text-white cursor-pointer">Flight Booking</li>
            <li className="hover:text-white cursor-pointer">Hotel Booking</li>
            <li className="hover:text-white cursor-pointer">Car Rentals</li>
            <li className="hover:text-white cursor-pointer">Train Booking</li>
            <li className="hover:text-white cursor-pointer">
              Travel Insurance
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Resources
          </h3>
          <ul className="space-y-1 text-sm text-gray-400 transition-all duration-300">
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Guides</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Support</li>
            <li className="hover:text-white cursor-pointer">Community</li>
          </ul>
        </div>

        {/* Placeholder Links - Folder Style */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Explore
          </h3>
          <ul className="space-y-1 text-sm text-gray-400 transition-all duration-300">
            <li className="hover:text-white cursor-pointer">
              Destinations → India
            </li>
            <li className="hover:text-white cursor-pointer">
              Destinations → Asia
            </li>
            <li className="hover:text-white cursor-pointer">
              Packages → Adventure
            </li>
            <li className="hover:text-white cursor-pointer">
              Packages → Luxury
            </li>
            <li className="hover:text-white cursor-pointer">
              Resources → Travel Tips
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter Separator */}
      <hr className="my-10 border-white/20" />

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">
            Subscribe
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Get travel inspiration & exclusive deals.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 bg-transparent border-b border-white/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg border border-orange-500 text-orange-400 font-medium transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white cursor-pointer duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-[#1877F2] transition-all duration-300"
          >
            <Icon
              icon="simple-line-icons:social-facebook"
              className="w-6 h-6"
            />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 transition-all duration-300"
          >
            <Icon
              icon="simple-line-icons:social-instagram"
              className="w-6 h-6"
            />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-black transition-all duration-300"
          >
            <Icon icon="mingcute:social-x-line" className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-[#FF0000] transition-all duration-300"
          >
            <Icon icon="simple-line-icons:social-youtube" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Big Banner + Description + Address */}
      <div className="max-w-7xl mx-auto mt-10 text-center">
        <span className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 tracking-wide">
          Bharat Darshan
        </span>
        <p className="text-sm text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore India’s most iconic destinations with curated travel
          experiences, luxury packages, and cultural adventures tailored just
          for you.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Head Office: Kanpur, Uttar Pradesh India - 208027
        </p>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-6 border-t border-white/10 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Bharat Darshan. All Rights Reserved. |{" "}
        <a href="/terms" className="hover:text-white">
          Terms
        </a>
      </div>
    </footer>
  );
}
