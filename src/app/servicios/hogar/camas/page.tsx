import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Camas Personalizadas | RB Soluciones Constructivas",
  description: "Diseñamos y fabricamos camas personalizadas: Queen, King, literas infantiles y más. Madera de alta calidad con garantía de 10 años.",
};

const bedTypes = [
  {
    title: "Cama Queen en Pino",
    description: "4 cajones integrados, madera natural",
    image: "/images/portfolio/cama-pino-cajones.png",
  },
  {
    title: "Cama Moderna Minimalista",
    description: "LED integrado, diseño contemporáneo",
    image: "/images/portfolio/cama-moderna-led.png",
  },
  {
    title: "Cama Rústica",
    description: "Estilo casa de campo, cabecera alta",
    image: "/images/portfolio/cama-rustica.png",
  },
  {
    title: "Litera Infantil",
    description: "Pino blanco, cama extra abajo",
    image: "/images/portfolio/cama-litera-infantil.png",
  },
];

export default function CamasPage() {
  return (
    <>
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
              Camas Personalizadas
            </h1>
            <p className="text-xl text-slate-300">
              Diseñamos y fabricamos camas a tu medida. Desde modelos funcionales con cajones 
              hasta diseños premium. Calidad que dura toda la vida.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Diseños que se adaptan a ti
            </h2>
            <p className="text-lg text-slate-600">
              Cada cama es fabricada a mano con madera seleccionada. 
              Elige el modelo que se ajuste a tu espacio y estilo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {bedTypes.map((bed, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={bed.image}
                    alt={bed.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{bed.title}</h3>
                  <p className="text-slate-600">{bed.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              ¿Tienes un diseño en mente?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Fabricamos camas personalizadas según tus especificaciones. 
              Envíanos tu idea y te damos cotización en 24 horas.
            </p>
            <Link
              href="/cotizar"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
