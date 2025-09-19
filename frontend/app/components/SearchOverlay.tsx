"use client";

import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";

type Props = {
  open: boolean;
  value: string;
  onChange: (v: string) => void;
  onClose: () => void;
};

export default function SearchOverlay({
  open,
  value,
  onChange,
  onClose,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (open) {
      gsap.killTweensOf(ref.current);
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out",
          onComplete: () => {
            (
              document.getElementById(
                "global-search-input"
              ) as HTMLInputElement | null
            )?.focus();
          },
        }
      );
    } else {
      gsap.to(ref.current, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [open]);

  if (!open) return null;

  return (
    <div ref={ref} className="fixed inset-0 z-60 search-overlay flex flex-col">
      <div className="w-full border-b border-orange-400/10 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-4">
          {/* logo left */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              <Icon icon="material-symbols:temple-hindu" className="w-5 h-5" />
            </div>
          </div>

          {/* input */}
          <div className="flex-1">
            <input
              id="global-search-input"
              className="w-full bg-transparent text-white placeholder-white/70 text-lg py-3 outline-none"
              placeholder="Enter your search keywords here..."
              value={value}
              onChange={(e) => onChange(e.target.value)}
            />
          </div>

          {/* close and action */}
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded hover:bg-white/5 transition cursor-pointer"
            >
              <Icon
                icon="material-symbols:close"
                className="w-6 h-6 text-white/80"
              />
            </button>
            <button className="p-2 rounded hover:bg-white/5 transition cursor-pointer">
              <Icon
                icon="material-symbols:search"
                className="w-6 h-6 text-white/80"
              />
            </button>
          </div>
        </div>
      </div>

      {/* placeholder area: you can render search results below */}
      <div className="flex-1 max-w-7xl mx-auto px-6 py-10 text-white/70">
        <p className="text-lg">
          Type to search places, hotels, adventures, packages…
        </p>
      </div>
    </div>
  );
}
