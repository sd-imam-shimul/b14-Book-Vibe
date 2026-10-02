import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import { BooksProvider } from "@/context/BooksContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Book Vibe",
  description: "A modern book management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BooksProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <footer className="bg-yellow-200 py-4 text-center text-3xl font-bold">
            Footer
          </footer>
        </BooksProvider>
      </body>
    </html>
  );
}