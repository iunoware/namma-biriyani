import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/shared/Navbar";

export const metadata: Metadata = {
  title: "Namma Biryani",
  description: "Best Biryani in Madurai",
};

// Playfair Display – headings for a more premium look
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

// Source Sans 3 – body
const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSans3.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
