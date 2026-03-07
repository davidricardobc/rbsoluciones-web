"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, ArrowUpRight } from "lucide-react";

const footerLinks = {
  servicios: [
    { label: "Cocinas Modulares", href: "/servicios/hogar/cocinas-modulares" },
    { label: "Closets a Medida", href: "/servicios/hogar/closets" },
    { label: "Estructuras Metálicas", href: "/servicios/estructuras/montajes-metalMecanicos" },
    { label: "Techos y Cubiertas", href: "/servicios/estructuras/techos-cubiertas" },
    { label: "Ver Todos", href: "/servicios" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "/empresa" },
    { label: "Proceso de Trabajo", href: "/proceso" },
    { label: "Portafolio", href: "/portafolio" },
    { label: "Cotizar", href: "/cotizar" },
  ],
  legal: [
    { label: "Política de Privacidad", href: "/privacidad" },
    { label: "Términos y Condiciones", href: "/terminos" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl font-heading">RB</span>
                </div>
                <div>
                  <span className="text-white font-bold text-lg leading-tight block font-heading">RB Soluciones</span>
                  <span className="text-slate-400 text-sm leading-tight block">Constructivas</span>
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              26 años transformando hogares e industrias con metalmecánica de calidad superior en Restrepo, Villavicencio y Bogotá.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/rbsoluciones"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/rbsoluciones"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-heading">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-heading">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-heading">Contacto</h3>
            <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              {/* Phone */}
              <div className="mb-4">
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Teléfono / WhatsApp</p>
                <a 
                  href="https://wa.me/573183773905" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-accent transition-colors group"
                >
                  <Phone className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-semibold font-heading">+57 318 377 3905</span>
                </a>
              </div>
              
              {/* Email */}
              <div className="mb-5">
                <p className="text-slate-400 text-xs uppercase tracking-wide mb-1">Correo</p>
                <a 
                  href="mailto:rbsolucionesinfo@gmail.com"
                  className="flex items-center gap-2 text-white hover:text-accent transition-colors group"
                >
                  <Mail className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">rbsolucionesinfo@gmail.com</span>
                </a>
              </div>
              
              {/* CTA Button */}
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center w-full bg-accent hover:bg-accent-hover text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5"
              >
                Solicitar Cotización
              </Link>
            </div>
            
            {/* Location */}
            <div className="mt-4 flex items-start gap-3">
              <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-slate-500">
                <span className="text-slate-400">Restrepo, Meta</span> — Sede Principal
                <br />
                <span className="text-slate-600">También en Villavicencio y Bogotá</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} RB Soluciones Constructivas. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
