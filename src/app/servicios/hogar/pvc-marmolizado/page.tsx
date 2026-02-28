import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PVC Marmolizado | RB Soluciones Constructivas",
  description: "Paredes con estética de mármol y resistencia superior. Acabados premium para baños y cocinas.",
};

export default function PVCMarmolizadoPage() {
  return (
    <>
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
              PVC Marmolizado
            </h1>
            <p className="text-xl text-slate-300">
              Estética de mármol, resistencia superior. 
              El lujo del mármol sin el costo ni el mantenimiento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/portfolio/pvc-marmolizado.png"
                alt="PVC Marmolizado"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                Lujo accesible
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Paneles de PVC con acabado marmolizado que transforman cualquier espacio. 
                Resistentes al agua, fáciles de limpiar y duraderos.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Apariencia de mármol natural</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Resistente al agua y humedad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Fácil limpieza y mantenimiento</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Instalación rápida y limpia</span>
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
