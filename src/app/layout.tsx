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
  metadataBase: new URL("https://rbsoluciones.co"),
  title: {
    default: "RB Soluciones Constructivas | Cocinas y Estructuras Metálicas en Meta",
    template: "%s | RB Soluciones Constructivas",
  },
  description:
    "Cocinas modulares, cerramientos, techos, cubiertas y estructuras metálicas en Restrepo, Villavicencio y Meta. 26 años de experiencia en soluciones constructivas.",
  keywords: [
    "cocinas modulares en Villavicencio",
    "estructuras metálicas en Restrepo Meta",
    "techos y cubiertas en Villavicencio",
    "cerramientos para terrazas",
    "RB Soluciones Constructivas",
  ],
  authors: [{ name: "RB Soluciones Constructivas" }],
  creator: "RB Soluciones Constructivas",
  publisher: "RB Soluciones Constructivas",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "RB Soluciones Constructivas | Cocinas y Estructuras Metálicas en Meta",
    description:
      "26 años transformando hogares e industrias con cocinas modulares, cerramientos y estructuras metálicas en Restrepo, Villavicencio y Meta.",
    url: "https://rbsoluciones.co",
    siteName: "RB Soluciones Constructivas",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RB Soluciones Constructivas",
    description:
      "Cocinas modulares, cubiertas y estructuras metálicas en Restrepo, Villavicencio y Meta.",
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
