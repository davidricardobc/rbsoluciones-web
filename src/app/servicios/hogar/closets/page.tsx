import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Closets | RB Soluciones Constructivas",
  description: "Closets personalizados con organización inteligente adaptada a tu forma de vivir. Diseño de lujo tipo boutique para tu hogar.",
};

export default function ClosetsPage() {
  return (
    <>
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
              Closets de Diseño
            </h1>
            <p className="text-xl text-slate-300">
              Organización inteligente adaptada a tu forma de vivir. 
              Desde walk-in closets tipo boutique hasta soluciones compactas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/portfolio/closet-lujo.png"
                alt="Closet de Lujo"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                Tu vestidor soñado
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Diseñamos closets que maximizan cada centímetro de espacio. 
                Combinamos madera, vidrio e iluminación LED para crear ambientes de lujo.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Diseño personalizado a tu medida</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Acabados en madera, vidrio y espejo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Iluminación LED integrada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span className="text-slate-600">Sistemas de organización inteligente</span>
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
