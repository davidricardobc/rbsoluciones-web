"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/proceso", label: "Proceso" },
  { href: "/empresa", label: "Empresa" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg font-heading">RB</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-slate-800 font-bold text-lg leading-tight block font-heading">RB Soluciones</span>
              <span className="text-slate-500 text-xs leading-tight block">Constructivas</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/573XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm text-slate-600 hover:text-whatsapp transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <Link
              href="/cotizar"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Cotizar
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden bg-white border-t border-slate-100"
      >
        <nav className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 text-slate-700 hover:bg-slate-50 rounded-lg font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <a
              href="https://wa.me/573XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 px-4 text-whatsapp font-medium"
            >
              <Phone className="w-5 h-5" />
              Contactar por WhatsApp
            </a>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
