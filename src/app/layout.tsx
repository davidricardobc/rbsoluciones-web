import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RB Soluciones Constructivas | 26 Años de Experiencia",
  description: "Transformamos hogares e industrias con metalmecánica de calidad superior. Cocinas modulares, estructuras metálicas y más en Restrepo, Villavicencio y Bogotá.",
  keywords: ["cocinas integrales", "estructuras metálicas", "metalmecánica", "Restrepo Meta", "Villavicencio", "Bogotá"],
  authors: [{ name: "RB Soluciones Constructivas" }],
  openGraph: {
    title: "RB Soluciones Constructivas",
    description: "26 años transformando espacios con calidad y experiencia.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-800">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
