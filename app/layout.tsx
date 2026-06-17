import type { Metadata } from "next";
import { Hanken_Grotesk, Fraunces, DM_Mono } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chaat On Wheels | Indian Street Food in Sunnyvale",
  description:
    "Vegetarian chaat, vada pav, chai, lassi, pickup, catering, and South Bay truck stops from Chaat On Wheels.",
  openGraph: {
    title: "Chaat On Wheels",
    description: "Vegetarian Indian street food for pickup, catering, and South Bay truck stops.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.variable} ${fraunces.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
