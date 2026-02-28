import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cocinas Modulares | RB Soluciones Constructivas",
  description: "Diseñamos cocinas modulares funcionales y elegantes que aprovechan cada centímetro. 26 años de experiencia en Restrepo, Villavicencio y Bogotá.",
};

export default function CocinasModularesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
              Cocinas Modulares
            </h1>
            <p className="text-xl text-slate-300">
              Diseñamos cocinas funcionales y elegantes que aprovechan cada centímetro de tu espacio. 
              Desde islas centrales hasta soluciones integrales personalizadas.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/portfolio/cocina-modular.png"
                alt="Cocina Modular Moderna"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                Diseño que transforma tu hogar
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Nuestras cocinas modulares combinan funcionalidad y estética. Trabajamos con materiales 
                de alta calidad que garantizan durabilidad y un acabado profesional.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Diseño personalizado según tu espacio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Materiales de alta calidad y durabilidad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Instalación profesional garantizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Garantía de 10 años en todos nuestros trabajos</span>
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
        </div>
      </section>
    </>
  );
}
