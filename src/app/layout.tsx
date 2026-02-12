import type { Metadata } from "next";
import {
  Playfair_Display,
  Source_Sans_3,
  Marck_Script,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/component/shared/Navbar";
import Footer from "@/component/shared/Footer";

export const metadata: Metadata = {
  title: "Best Biryani in Madurai - Namma Biryani",
  description:
    "Experience the Best Biryani in Madurai at Namma Biryani. From authentic Chicken Biryani in Madurai to our famous Bucket Biryani Madurai, discover the top-rated Multi Cuisine Restaurant in Madurai.",
  icons: {
    icon: {
      // media: "(prefers-color-scheme: light)",
      url: "/images/apple-touch-icon.png",
      href: "/images/apple-touch-icon.png",
    },
  },
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
  variable: "--font-body",
  display: "swap",
});

const marckScript = Marck_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-accent",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${sourceSans3.variable} ${marckScript.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
