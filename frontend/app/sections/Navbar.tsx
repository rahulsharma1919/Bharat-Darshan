"use client";

import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { navItems } from "@/app/constants/index";
import SearchOverlay from "@/app/components/SearchOverlay";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isDark, setIsDark] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [lastScroll, setLastScroll] = useState(0);
  const [showNav, setShowNav] = useState(true);

  // Apply dark mode on html
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // scroll listener
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      if (y === 0) {
        setShowNav(true);
      } else if (y > lastScroll) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScroll(y);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [lastScroll]);

  // animate navbar in/out
  useEffect(() => {
    if (!navRef.current) return;
    gsap.to(navRef.current, {
      y: showNav ? 0 : -100,
      opacity: showNav ? 1 : 0,
      duration: 0.6,
      ease: "power3.out",
    });
    if (navRef.current) {
      if (window.scrollY === 0) {
        navRef.current.classList.remove("floating-nav");
      } else if (showNav) {
        navRef.current.classList.add("floating-nav");
      } else {
        navRef.current.classList.remove("floating-nav");
      }
    }
  }, [showNav]);

  // mobile slide animation
  useEffect(() => {
    if (!mobileRef.current) return;
    if (isMenuOpen) {
      gsap.killTweensOf(mobileRef.current);
      gsap.to(mobileRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.55,
        ease: "power3.out",
      });
    } else {
      gsap.to(mobileRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  // animate desktop mega menu when active
  useEffect(() => {
    // if a mega is active, animate its container children (we rely on refless animation: animate when element mounts via ref callback in JSX)
  }, [activeMega]);

  // helper to toggle mobile mega menu
  const toggleMobileMega = (name: string) => {
    setActiveMega((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <SearchOverlay
        open={isSearchOpen}
        value={searchText}
        onChange={setSearchText}
        onClose={() => setIsSearchOpen(false)}
      />

      <div
        ref={navRef}
        className="navbar-root fixed inset-x-0 top-0 z-50 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Left: logo + download */}
            <div className="flex items-center gap-4">
              <a href="/" className="flex items-center gap-3">
                {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white">
                  <Icon
                    icon="material-symbols:temple-hindu"
                    className="w-5 h-5"
                  />
                </div> */}
                <span className="logo-font text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
                  Bharat Darshan
                </span>
              </a>
            </div>

            {/* center - desktop nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    className="nav-hover-btn flex items-center gap-2 px-2 py-1"
                    onMouseEnter={() =>
                      item.megaMenu && setActiveMega(item.name)
                    }
                    onMouseLeave={() => item.megaMenu && setActiveMega(null)}
                    onFocus={() => item.megaMenu && setActiveMega(item.name)}
                    onBlur={() => item.megaMenu && setActiveMega(null)}
                  >
                    <a href={item.href} className="inline-block">
                      {item.name}
                    </a>
                    {item.megaMenu && (
                      <Icon
                        icon="material-symbols:keyboard-arrow-down"
                        className={`w-4 h-4 ${
                          activeMega === item.name
                            ? "text-orange-400 rotate-180"
                            : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* desktop mega */}
                  {item.megaMenu && activeMega === item.name && (
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-screen max-w-4xl bg-black/80 backdrop-blur-xl rounded-xl border border-orange-400/10 overflow-hidden z-50 shadow-2xl"
                      onMouseEnter={() => setActiveMega(item.name)}
                      onMouseLeave={() => setActiveMega(null)}
                      ref={(el) => {
                        if (!el) return;
                        // animate when the element is mounted (smooth fade & slide)
                        gsap.fromTo(
                          el,
                          { y: 10, opacity: 0 },
                          {
                            y: 0,
                            opacity: 1,
                            duration: 0.36,
                            ease: "power3.out",
                          }
                        );
                        gsap.fromTo(
                          el.querySelectorAll(".mega-section"),
                          { y: 12, opacity: 0 },
                          {
                            y: 0,
                            opacity: 1,
                            stagger: 0.08,
                            delay: 0.06,
                            duration: 0.32,
                            ease: "power2.out",
                          }
                        );
                      }}
                    >
                      <div className="p-8 grid grid-cols-3 gap-8 divide-x divide-white/10">
                        {item.megaMenu.sections.map((sec, idx) => (
                          <div
                            key={idx}
                            className="mega-section px-6 first:pl-0 last:pr-0"
                          >
                            <h3 className="text-orange-400 font-semibold mb-4">
                              {sec.title}
                            </h3>
                            <ul className="space-y-2">
                              {sec.links.map((l) => (
                                <li key={l.name}>
                                  <a
                                    href={l.href}
                                    className="mega-link text-sm block py-1 px-1 hover:text-orange-300 transition"
                                  >
                                    {l.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* right controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded hover:scale-110 transition cursor-pointer"
              >
                <Icon
                  icon="material-symbols:search"
                  className="w-5 h-5 text-white"
                />
              </button>

              {/* login/logout (text instead of icon) */}
              <button
                onClick={() => setIsLoggedIn((prev) => !prev)}
                className="px-4 py-2 rounded-full border font-medium text-sm text-white hover:text-orange-400 transition cursor-pointer"
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>

              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded hover:scale-110 transition cursor-pointer"
              >
                <Icon
                  icon={isDark ? "mdi:weather-sunny" : "mdi:weather-night"}
                  className="w-5 h-5 theme-icon text-gray-800 dark:text-white"
                />
              </button>

              {/* mobile menu toggle */}
              <button
                className="lg:hidden p-2 ml-2"
                onClick={() => setIsMenuOpen(true)}
              >
                <Icon
                  icon="material-symbols:menu"
                  className="w-6 h-6 text-white"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Slide Panel */}
      <div
        ref={mobileRef}
        className="fixed top-0 right-0 h-screen w-screen bg-black/95 backdrop-blur-lg z-60 transform translate-x-full"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white">
              <Icon icon="material-symbols:temple-hindu" className="w-5 h-5" />
            </div>
            <span className="text-white font-semibold">Menu</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2" onClick={() => setIsMenuOpen(false)}>
              <Icon
                icon="material-symbols:close"
                className="w-6 h-6 text-white"
              />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 mobile-menu-content">
          {navItems.map((item) => (
            <div key={item.name} className="mb-4">
              <div className="flex items-center justify-between">
                <a href={item.href} className="text-white text-lg">
                  {item.name}
                </a>
                {item.megaMenu ? (
                  <button
                    className="p-2"
                    onClick={() => toggleMobileMega(item.name)}
                  >
                    <Icon
                      icon="material-symbols:keyboard-arrow-right"
                      className={`w-6 h-6 text-white ${
                        activeMega === item.name ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                ) : null}
              </div>

              {item.megaMenu && (
                <div
                  className="overflow-hidden"
                  ref={(el) => {
                    if (!el) return;

                    if (activeMega === item.name) {
                      // expand animation
                      gsap.fromTo(
                        el,
                        { height: 0, opacity: 0, y: -10 },
                        {
                          height: "auto",
                          opacity: 1,
                          y: 0,
                          duration: 0.4,
                          ease: "power2.out",
                        }
                      );
                    } else {
                      // collapse animation
                      gsap.to(el, {
                        height: 0,
                        opacity: 0,
                        y: -10,
                        duration: 0.3,
                        ease: "power2.in",
                      });
                    }
                  }}
                >
                  <div className="mt-3 ml-3">
                    {item.megaMenu.sections.map((s, i) => (
                      <div key={i} className="mb-4">
                        <h4 className="text-orange-400 font-medium mb-2">
                          {s.title}
                        </h4>
                        <ul className="ml-4 space-y-2">
                          {s.links.map((l) => (
                            <li key={l.name}>
                              <a
                                href={l.href}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveMega(null);
                                }}
                                className="text-gray-800 dark:text-white/80 block py-1 hover:text-orange-500"
                              >
                                {l.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* footer controls */}
          <div className="mt-8 border-t border-white/10 pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white">Theme</span>
              <button onClick={() => setIsDark(!isDark)} className="p-2">
                <Icon
                  icon={
                    isDark
                      ? "material-symbols:light-mode"
                      : "material-symbols:dark-mode"
                  }
                  className="w-6 h-6 text-white"
                />
              </button>
            </div>

            <button
              onClick={() => setIsLoggedIn((prev) => !prev)}
              className={`w-full py-3 rounded ${
                isLoggedIn ? "bg-red-600" : "bg-orange-600"
              } text-white`}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
