"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative  flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2394A3B8' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl w-full mx-auto px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full" />
            26 años de experiencia en metalmecánica
          </motion.div>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-6 font-heading"
          >
            Construimos espacios que{" "}
            <span className="text-accent">perduran</span>. Tecnología, experiencia y compromiso.
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl"
          >
            Transformamos hogares e industrias en Restrepo, Villavicencio y Bogotá. 
            Más de 500 proyectos entregados con garantía real.
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="flex flex-col xl:flex-row gap-4 mb-10"
          >
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-semibold text-base transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Solicitar Cotización Gratuita
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/portafolio"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-xl font-semibold text-base transition-all hover:border-slate-300"
            >
              Explorar Proyectos Realizados
            </Link>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex flex-wrap gap-6 text-sm text-slate-600"
          >
            {[
              "Cotización sin compromiso",
              "Visita técnica sin costo",
              "Garantía en todas las instalaciones",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <figure className="relative overflow-hidden rounded-xl aspect-[4/3] lg:aspect-[4/5]">
          <Image src="/images/portfolio/pergola-terraza-amoblada.jpg" alt="Pérgola instalada por RB Soluciones en una terraza amoblada" fill priority sizes="(max-width: 1023px) 100vw, 45vw" className="object-cover" />
          <figcaption className="absolute bottom-0 inset-x-0 bg-slate-900/85 text-white px-6 py-4 text-sm">Pérgola · Proyecto realizado</figcaption>
        </figure>
      </div>

    </section>
  );
}
