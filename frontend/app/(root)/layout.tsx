import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bharat Darshan",
  description: "Explore the cultural and historical beauty of India 🌏",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
