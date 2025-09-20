"use client";

import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);

  // GSAP subtle animation
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
      className="relative bg-gradient-to-r from-black via-neutral-900 to-black text-white pt-16 pb-6 px-6 sm:px-12"
    >
      {/* Background abstract glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo & About */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
            Bharat Darshan
          </h2>
          <p className="mt-4 text-sm text-gray-400 max-w-sm">
            Explore India’s most iconic destinations with curated travel
            experiences, luxury packages, and cultural adventures tailored just
            for you.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors duration-300"
            >
              <Icon
                icon="simple-line-icons:social-facebook"
                className="w-6 h-6"
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:text-white transition-all duration-300"
            >
              <Icon
                icon="simple-line-icons:social-instagram"
                className="w-6 h-6"
              />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-black hover:text-white transition-colors duration-300"
            >
              <Icon icon="mingcute:social-x-line" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 hover:bg-[#FF0000] hover:text-white transition-colors duration-300"
            >
              <Icon
                icon="simple-line-icons:social-youtube"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        {/* Destinations */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Destinations
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="/destinations/rajasthan" className="hover:text-white">
                Rajasthan
              </a>
            </li>
            <li>
              <a href="/destinations/goa" className="hover:text-white">
                Goa
              </a>
            </li>
            <li>
              <a href="/destinations/kerala" className="hover:text-white">
                Kerala
              </a>
            </li>
            <li>
              <a href="/destinations/himalaya" className="hover:text-white">
                Himalayas
              </a>
            </li>
            <li>
              <a
                href="/destinations/golden-triangle"
                className="hover:text-white"
              >
                Golden Triangle
              </a>
            </li>
          </ul>
        </div>

        {/* Packages */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Packages
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="/packages/cultural" className="hover:text-white">
                Cultural Tours
              </a>
            </li>
            <li>
              <a href="/packages/adventure" className="hover:text-white">
                Adventure
              </a>
            </li>
            <li>
              <a href="/packages/honeymoon" className="hover:text-white">
                Honeymoon
              </a>
            </li>
            <li>
              <a href="/packages/luxury" className="hover:text-white">
                Luxury
              </a>
            </li>
            <li>
              <a href="/packages/family" className="hover:text-white">
                Family
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <p className="text-gray-400 text-sm">
            Get travel inspiration & exclusive deals straight to your inbox.
          </p>
        </div>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 bg-transparent border-b border-white/30 text-white placeholder-gray-500 focus:outline-none focus:border-none focus:ring-2 focus:ring-orange-400 focus:bg-neutral-800 focus:border rounded-lg transition-all"
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-lg border border-orange-500 text-orange-400 font-medium transform transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:scale-105 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Copyright + Banner */}
      {/* Big Banner Text */}
      <div className="w-full text-center mt-12">
        <span className="text-8xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 tracking-wide block">
          Bharat Darshan
        </span>
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
