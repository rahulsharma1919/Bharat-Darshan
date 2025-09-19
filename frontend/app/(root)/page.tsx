"use client";

import Navbar from "@/app/sections/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="h-[100vh] flex items-center justify-center bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-gray-800 dark:to-gray-900">
        <h1 className="text-4xl font-bold text-orange-600 dark:text-yellow-400">
          Welcome to Bharat Darshan 🌏
        </h1>
      </section>
      <section className="h-[100vh] flex items-center justify-center">
        <p className="text-lg">Scroll down for more content...</p>
      </section>
    </main>
  );
}
