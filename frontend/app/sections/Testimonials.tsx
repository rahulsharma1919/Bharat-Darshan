"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { testimonials } from "@/app/constants/index";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgImage, setBgImage] = useState(testimonials[0].destinationImage);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  // autoplay
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((p) => (p + 1) % testimonials.length);
    }, 4000) as unknown as number;
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // update background & center active card
  useEffect(() => {
    setBgImage(testimonials[currentIndex].destinationImage);
  }, [currentIndex]);

  useEffect(() => {
    const carousel = scrollRef.current;
    if (!carousel) return;

    const card = carousel.children[currentIndex] as HTMLElement;
    if (!card) return;

    // scroll the carousel horizontally only
    const carouselRect = carousel.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const offset =
      cardRect.left -
      carouselRect.left +
      carousel.scrollLeft -
      (carousel.clientWidth - card.offsetWidth) / 2;

    carousel.scrollTo({
      left: offset,
      behavior: "smooth",
    });
  }, [currentIndex]);

  // pause autoplay on hover
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onEnter = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    const onLeave = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((p) => (p + 1) % testimonials.length);
      }, 4000) as unknown as number;
    };
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const createStars = (rating: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Icon
        key={i}
        icon="mdi:star"
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      {/* SVG Doodles */}
      <svg
        className="absolute top-10 right-10 w-16 h-16 text-orange-500 opacity-50 doodle"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
      <svg
        className="absolute top-32 left-10 w-12 h-12 text-yellow-500 opacity-40 doodle"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
      <svg
        className="absolute bottom-20 right-32 w-20 h-20 text-pink-500 opacity-40 doodle"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2 L15 22 L9 22 Z" />
      </svg>
      {/* Container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the magic of India through the experiences of our happy
            customers
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Navigation buttons */}
        <div className="absolute flex justify-center space-x-4 bottom-140">
          <button
            onClick={() =>
              setCurrentIndex(
                (p) => (p - 1 + testimonials.length) % testimonials.length
              )
            }
            className="nextPrev w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            aria-label="previous"
          >
            <Icon icon="mdi:chevron-left" className="w-6 h-6" />
          </button>
          <button
            onClick={() =>
              setCurrentIndex((p) => (p + 1) % testimonials.length)
            }
            className="nextPrev w-10 h-10 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            aria-label="next"
          >
            <Icon icon="mdi:chevron-right" className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex items-center overflow-x-auto space-x-6 pb-5 snap-x snap-mandatory no-scrollbar"
          style={{
            scrollPadding: "0 50vw",
            paddingTop: "3rem",
            paddingLeft: "3rem",
            paddingRight: "3rem",
          }}
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`testimonial-card relative snap-center rounded-3xl shadow-lg cursor-pointer min-w-[320px] max-w-[420px] transition-transform duration-400 ${
                i === currentIndex ? "scale-105 z-20" : "scale-95 opacity-90"
              }`}
              style={{ transformOrigin: "center bottom" }}
            >
              {/* Card Image */}
              <div className="h-44 md:h-56 w-full rounded-t overflow-hidden relative">
                <img
                  src={t.destinationImage}
                  alt={t.destination}
                  className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute left-4 bottom-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {t.destination}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 bg-white/80 rounded-b">
                <p className="text-sm text-gray-700 italic leading-relaxed mb-3">
                  “{t.review}”
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1">{createStars(t.rating)}</div>
                  <div className="text-sm text-gray-600 font-semibold">
                    {t.rating}/5
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-sm font-medium text-gray-800">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500">{t.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modern Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 ease-out ${
                i === currentIndex
                  ? "w-6 h-1 bg-orange-500 shadow-lg"
                  : "w-2 h-1 bg-gray-300 hover:bg-orange-300"
              }`}
            />
          ))}
        </div>
      </div>
      <style>{`
        .testimonial-card { overflow: visible; }
        .nextPrev { background: rgba(255,255,255,0.4); backdrop-filter: blur(8px); transition: all .25s ease; color: black; }
        .nextPrev:hover { transform: scale(1.06); background: rgba(249,115,22,0.6); color: white; }
        .doodle { animation: float 6s ease-in-out infinite; }
        @keyframes float { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-8px);} }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        button { transition: all 0.35s ease-out; }
      `}</style>
    </section>
  );
}
