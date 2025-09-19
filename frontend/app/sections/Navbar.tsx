"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { navItems } from "@/app/constants/index";
import SearchOverlay from "@/app/components/SearchOverlay";

// ------------------- Reusable MegaMenu -------------------
function MegaMenu({ sections }: { sections: any[] }) {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!menuRef.current) return;
    gsap.fromTo(
      menuRef.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={menuRef}
      className="bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden"
    >
      <div className="p-8 grid grid-cols-3 gap-8 divide-x divide-white/10">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-orange-400 font-semibold">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-orange-400 text-sm transition-colors block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// ------------------- Navbar -------------------
export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);
  const { y } = useWindowScroll();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // Scroll behavior
  useEffect(() => {
    const atTop = y < 10;
    setIsAtTop(atTop);

    if (atTop) setIsVisible(true);
    else if (y > lastScrollY.current && y > 80) setIsVisible(false);
    else if (y < lastScrollY.current) setIsVisible(true);

    lastScrollY.current = y;
  }, [y]);

  // Navbar animation
  useLayoutEffect(() => {
    if (!navRef.current) return;
    navRef.current.classList.toggle("floating-nav", !isAtTop && isVisible);
    gsap.to(navRef.current, {
      y: isVisible ? 0 : -100,
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, [isVisible, isAtTop]);

  // Mobile menu animation
  useLayoutEffect(() => {
    if (!mobileRef.current) return;
    gsap.to(mobileRef.current, {
      x: isMenuOpen ? 0 : "100%",
      duration: 0.4,
      ease: "power3.inOut",
    });
  }, [isMenuOpen]);

  return (
    <>
      {/* Search */}
      <SearchOverlay
        open={isSearchOpen}
        value={searchText}
        onChange={setSearchText}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Navbar */}
      <div
        ref={navRef}
        className="navbar-root fixed inset-x-0 top-0 z-50 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/"
              className="logo-font text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400"
            >
              Bharat Darshan
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    className="nav-hover-btn flex items-center gap-2 px-2 py-1 text-white/90 hover:text-white transition-all cursor-pointer duration-300"
                    onMouseEnter={() =>
                      item.megaMenu && setActiveMega(item.name)
                    }
                    onMouseLeave={() => item.megaMenu && setActiveMega(null)}
                  >
                    <span>{item.name}</span>
                    {item.megaMenu && (
                      <Icon
                        icon="material-symbols:keyboard-arrow-down"
                        className={`w-4 h-4 transition-transform ${
                          activeMega === item.name
                            ? "rotate-180 text-orange-400"
                            : ""
                        }`}
                      />
                    )}
                  </button>
                  {item.megaMenu && activeMega === item.name && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-screen max-w-4xl"
                      onMouseEnter={() => setActiveMega(item.name)}
                      onMouseLeave={() => setActiveMega(null)}
                    >
                      <MegaMenu sections={item.megaMenu.sections} />
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:scale-120 transition-all duration-300 cursor-pointer"
              >
                <Icon
                  icon="material-symbols:search"
                  className="w-5 h-5 text-white"
                />
              </button>

              <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                className="px-4 py-1.5 text-sm font-medium border border-white/20 rounded-full text-white hover:bg-white/10 cursor-pointer transition-all duration-300"
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>

              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:scale-120 cursor-pointer transition-all duration-300"
              >
                <Icon
                  icon={isDark ? "mdi:weather-sunny" : "mdi:weather-night"}
                  className="w-5 h-5 text-white"
                />
              </button>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 hover:bg-white/10 rounded-lg"
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

      {/* Mobile Menu */}
      <div
        ref={mobileRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-black/95 backdrop-blur-xl z-[60]"
        style={{ transform: "translateX(100%)" }}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="text-white font-semibold text-lg">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg"
          >
            <Icon
              icon="material-symbols:close"
              className="w-6 h-6 text-white"
            />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-80px)] p-6">
          {navItems.map((item) => (
            <div key={item.name} className="mb-6">
              <div className="flex items-center justify-between">
                <a
                  href={item.href}
                  className="text-white text-lg font-medium"
                  onClick={() => !item.megaMenu && setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
                {item.megaMenu && (
                  <button
                    onClick={() =>
                      setActiveMega(activeMega === item.name ? null : item.name)
                    }
                  >
                    <Icon
                      icon="material-symbols:keyboard-arrow-right"
                      className={`w-5 h-5 text-white transition-transform ${
                        activeMega === item.name ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {item.megaMenu && activeMega === item.name && (
                <div className="mt-3 ml-4 space-y-4">
                  {item.megaMenu.sections.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-orange-400 font-medium mb-2">
                        {section.title}
                      </h4>
                      <ul className="space-y-1 ml-2">
                        {section.links.map((link) => (
                          <li key={link.name}>
                            <a
                              href={link.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-white/70 hover:text-orange-400 block py-1"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className={`w-full py-3 rounded-lg font-medium text-white transition-colors cursor-pointer ${
                isLoggedIn
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-orange-600 hover:bg-orange-700"
              }`}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
