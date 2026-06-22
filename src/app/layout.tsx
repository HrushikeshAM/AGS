import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AxiomGreen Solutions | GreenProof Ecosystem",
  description: "Flagship Environmental Intelligence Infrastructure. Patent-published AI + GIS + ESG platform for environmental governance, regulatory compliance, and citizen-centric monitoring.",
  keywords: [
    "AxiomGreen Solutions",
    "GreenProof",
    "Environmental Intelligence",
    "GovTech",
    "ClimateTech",
    "ESG scoring",
    "GIS Analytics",
    "Geospatial AI",
    "Air Node",
    "Environmental Compliance",
    "Patent 202641010976",
    "TRL 4 validated"
  ],
  authors: [{ name: "AxiomGreen Solutions Pvt Ltd" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark h-full scroll-smooth ${plusJakarta.variable} ${spaceGrotesk.variable} ${orbitron.variable}`}>
      <body className="min-h-full font-sans bg-forest-dark text-foreground flex flex-col selection:bg-emerald/30 selection:text-emerald">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
