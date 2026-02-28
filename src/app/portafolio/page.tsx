import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portafolio | RB Soluciones Constructivas",
  description: "Más de 500 proyectos entregados. Explora nuestro trabajo en cocinas, camas, estructuras metálicas, cerramientos y más.",
};

const portfolioItems = [
  // CAMAS
  {
    id: 1,
    title: "Cama Queen en Pino con Cajones",
    category: "Camas",
    description: "4 cajones integrados, madera natural",
    image: "/images/portfolio/cama-pino-cajones.png",
  },
  {
    id: 2,
    title: "Cama Moderna Minimalista",
    category: "Camas",
    description: "LED integrado, diseño contemporáneo",
    image: "/images/portfolio/cama-moderna-led.png",
  },
  {
    id: 3,
    title: "Cama Rústica en Madera",
    category: "Camas",
    description: "Estilo casa de campo, cabecera alta",
    image: "/images/portfolio/cama-rustica.png",
  },
  {
    id: 4,
    title: "Litera Infantil con Cama Extra",
    category: "Camas",
    description: "Pino blanco, ideal para familias",
    image: "/images/portfolio/cama-litera-infantil.png",
  },
  // HOGAR
  {
    id: 5,
    title: "Cocina Modular Moderna",
    category: "Hogar",
    description: "Isla central, acabados premium",
    image: "/images/portfolio/cocina-modular.png",
  },
  {
    id: 6,
    title: "Closet de Lujo Tipo Boutique",
    category: "Hogar",
    description: "Madera, vidrio e iluminación LED",
    image: "/images/portfolio/closet-lujo.png",
  },
  {
    id: 7,
    title: "Centro de Entretenimiento",
    category: "Hogar",
    description: "Madera + metal, estantes con LED",
    image: "/images/portfolio/centro-entretenimiento.png",
  },
  {
    id: 8,
    title: "Baño Elegante",
    category: "Hogar",
    description: "Doble lavamanos, espejos iluminados",
    image: "/images/portfolio/bano-elegante.png",
  },
  {
    id: 9,
    title: "PVC Marmolizado",
    category: "Hogar",
    description: "Paredes tipo mármol, acabado premium",
    image: "/images/portfolio/pvc-marmolizado.png",
  },
  {
    id: 10,
    title: "Piso SPC",
    category: "Hogar",
    description: "Madera plástica, alta durabilidad",
    image: "/images/portfolio/piso-spc.png",
  },
  {
    id: 11,
    title: "Cocina Industrial",
    category: "Hogar",
    description: "Estructura metálica expuesta, estilo loft",
    image: "/images/portfolio/cocina-industrial.png",
  },
  // EXTERIORES / ESTRUCTURAS
  {
    id: 12,
    title: "Terraza WPC",
    category: "Exteriores",
    description: "Deck madera plástica, outdoor living",
    image: "/images/portfolio/terraza-wpc.png",
  },
  {
    id: 13,
    title: "Cerramiento Aluminio/Vidrio",
    category: "Exteriores",
    description: "Terraza acristalada, vistas panorámicas",
    image: "/images/portfolio/cerramiento-vidrio.png",
  },
  {
    id: 14,
    title: "Pérgola Moderna con LED",
    category: "Exteriores",
    description: "Estructura metal + madera, iluminación",
    image: "/images/portfolio/pergola-moderna.png",
  },
  {
    id: 15,
    title: "Pérgola Listones Madera",
    category: "Exteriores",
    description: "Sombra filtrada, diseño contemporáneo",
    image: "/images/portfolio/pergola-listones.png",
  },
  {
    id: 16,
    title: "Techo Industrial Metálico",
    category: "Estructuras",
    description: "Estructura acero, acabado moderno",
    image: "/images/portfolio/techo-industrial.png",
  },
  // FOTO REAL
  {
    id: 17,
    title: "Instalación Piso SPC - Proyecto Real",
    category: "Proyectos Reales",
    description: "Trabajo real ejecutado por RB Soluciones",
    image: "/images/portfolio/piso-instalado-real.png",
    isReal: true,
  },
];

const categories = ["Todos", "Camas", "Hogar", "Exteriores", "Estructuras", "Proyectos Reales"];

export default function PortafolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
              Proyectos que hablan por nosotros
            </h1>
            <p className="text-xl text-slate-300">
              Más de 500 espacios transformados. Desde camas personalizadas hasta estructuras industriales. 
              Cada proyecto es una obra de artesanía con garantía de 10 años.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((filter) => (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  filter === "Todos"
                    ? "bg-accent text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className={`inline-block text-white text-xs px-3 py-1 rounded-full ${
                      item.isReal ? "bg-green-500" : "bg-accent"
                    }`}>
                      {item.category}{item.isReal ? " ✓ Real" : ""}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-6">
              ¿Tienes un proyecto en mente? Trabajamos en Restrepo, Villavicencio y Bogotá.
            </p>
            <a
              href="/cotizar"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors"
            >
              Solicitar Cotización Gratis
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
