import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WPC - Deck y Terrazas | RB Soluciones Constructivas",
  description: "Wood Plastic Composite: belleza de madera sin mantenimiento. Ideales para terrazas, decks y exteriores.",
};

export default function WPCPage() {
  return (
    <>
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
              WPC - Decks y Terrazas
            </h1>
            <p className="text-xl text-slate-300">
              Belleza de madera sin mantenimiento. 
              Material ideal para exteriores que no se decolora ni se pudre.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/portfolio/terraza-wpc.png"
                alt="Terraza WPC"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                Exteriores sin mantenimiento
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Wood Plastic Composite (WPC) combina la belleza natural de la madera 
                con la durabilidad del plástico. No necesita barniz ni tratamientos.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">No se decolora con el sol</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Resistente al agua y humedad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">No se pudre ni tiene termitas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Sin mantenimiento de barniz</span>
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
