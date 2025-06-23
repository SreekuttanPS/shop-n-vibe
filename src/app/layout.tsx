import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/Components/HeaderSection/Header";
import Features from "@/Components/Features";
import NewsLetterSection from "@/Components/NewsLetterSection";
import Footer from "@/Components/Footer";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shop N Vibe",
  description: "Shop and vibe with the trends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}>
        <Header />
        {children}
        <Features />
        <NewsLetterSection />
        <Footer />
      </body>
    </html>
  );
}
