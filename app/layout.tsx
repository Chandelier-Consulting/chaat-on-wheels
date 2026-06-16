import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaat On Wheels | Indian Street Food in Sunnyvale",
  description:
    "Fresh vegetarian Indian street food, chaat, vada pav, pav bhaji, kulche chole, lassi, and chai in Sunnyvale and San Jose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
