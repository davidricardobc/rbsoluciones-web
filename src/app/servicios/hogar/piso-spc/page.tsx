import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Piso SPC | RB Soluciones Constructivas",
  description: "Stone Plastic Composite: resistencia de piedra con instalación rápida. Pisos duraderos y elegantes.",
};

export default function PisoSPCPage() {
  return (
    <>
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
              Piso SPC
            </h1>
            <p className="text-xl text-slate-300">
              Resistencia de piedra, instalación rápida. 
              El piso más duradero y fácil de instalar del mercado.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/portfolio/piso-spc.png"
                alt="Piso SPC"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                Durabilidad sin igual
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Stone Plastic Composite (SPC) es el piso más resistente disponible. 
                Soporta tráfico pesado, mascotas y agua sin dañarse.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">100% resistente al agua</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Soporta tráfico comercial</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Instalación rápida sin obras</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Variedad de diseños madera y piedra</span>
                </li>
              </ul>
              <Link
                href="/cotizar"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors"
              >
                Solicitar Cotización
              </Link>
            </div>
          </div>
          
          {/* Foto real */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 font-heading text-center">
              Trabajo Real Ejecutado
            </h3>
            <div className="max-w-3xl mx-auto">
              <Image
                src="/images/portfolio/piso-instalado-real.png"
                alt="Piso SPC Instalado - Proyecto Real"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
              <p className="text-center text-slate-500 mt-4">
                Instalación real de piso SPC por RB Soluciones Constructivas
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
