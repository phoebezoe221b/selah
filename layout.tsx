import type { Metadata } from "next";
import "./globals.css";

import {
  Cormorant_Garamond,
  Inter,
} from "next/font/google";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "SELAH",
  description:
    "Simple meditations that become writings through the Word of God.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}