import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Techos y Cubiertas | RB Soluciones Constructivas",
  description: "Protección estructural con diseño profesional. Techos metálicos, pérgolas y cubiertas para todo tipo de proyectos.",
};

export default function TechosCubiertasPage() {
  return (
    <>
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
              Techos y Cubiertas
            </h1>
            <p className="text-xl text-slate-300">
              Protección estructural con diseño profesional. 
              Desde pérgolas modernas hasta estructuras industriales.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pérgolas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Image
                src="/images/portfolio/pergola-moderna.png"
                alt="Pérgola Moderna"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                Pérgolas Modernas
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Diseños contemporáneos que combinan estructura metálica con acabados en madera 
                e iluminación LED integrada. Perfectas para terrazas y espacios exteriores.
              </p>
            </div>
          </div>

          {/* Pérgola Listones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                Pérgolas con Listones
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Estructuras con listones de madera que filtran la luz natural, 
                creando sombras elegantes y ambientes frescos.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image
                src="/images/portfolio/pergola-listones.png"
                alt="Pérgola Listones Madera"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Industrial */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/portfolio/techo-industrial.png"
                alt="Techo Industrial"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                Estructuras Industriales
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Techos metálicos de gran escala para bodegas, galpones y naves industriales. 
                Estructura de acero con acabados modernos y duraderos.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Estructura de acero certificado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Diseño por ingeniería estructural</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Acabados modernos sin óxido</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Garantía estructural de 10 años</span>
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
