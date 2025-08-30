import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Best Football Betting Sites UK 2025 | Luca Calcio AI",
  description:
    "Compare the best football betting sites in the UK for 2025 with Luca Calcio AI. Explore top offers, acca boosts, live streaming, and more.",
  icons: {
    icon: "/Luca.jpeg",
    shortcut: "/Luca.jpeg",
    apple: "/Luca.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
