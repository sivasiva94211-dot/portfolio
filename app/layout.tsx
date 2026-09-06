import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Ignore missing type declarations for CSS imports in this project setup
// @ts-ignore: TS cannot find module declarations for side-effect import
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siva V — Full Stack Developer",
  description:
    "Portfolio of Siva V, a BCA student and aspiring Python Full Stack Developer based in Hosur, Tamil Nadu.",
  keywords: [
    "Siva V",
    "Full Stack Developer",
    "BCA Student",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Siva V" }],
  openGraph: {
    title: "Siva V — Python Full Stack Developer",
    description:
      "Portfolio of Siva V, a BCA student and aspiring Python Full Stack Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-base text-ink min-h-screen">
        {children}
      </body>
    </html>
  );
}
