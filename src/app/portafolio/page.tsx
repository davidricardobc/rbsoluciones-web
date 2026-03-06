"use client";

import Image from "next/image";
import { useState } from "react";

const portfolioItems = [
  // CAMAS - Disponibles en todas las medidas: Sencilla, Semidoble, Doble, Queen, King
  {
    id: 1,
    title: "Cama con Cajones en Pino",
    category: "Camas",
    description: "4 cajones integrados, madera natural. Disponible: Sencilla a King",
    image: "/images/portfolio/cama-pino-cajones.png",
  },
  {
    id: 2,
    title: "Cama Moderna con LED",
    category: "Camas",
    description: "Iluminación LED integrada, diseño contemporáneo. Todas las medidas",
    image: "/images/portfolio/cama-moderna-led.png",
  },
  {
    id: 3,
    title: "Cama Rústica",
    category: "Camas",
    description: "Estilo casa de campo, cabecera alta. Sencilla a King",
    image: "/images/portfolio/cama-rustica.png",
  },
  {
    id: 4,
    title: "Litera Infantil",
    category: "Camas",
    description: "Pino blanco, ideal para familias. Personalizable",
    image: "/images/portfolio/cama-litera-infantil.png",
  },
  // COCINAS
  {
    id: 5,
    title: "Cocina Modular Moderna",
    category: "Cocinas",
    description: "Isla central, acabados premium",
    image: "/images/portfolio/cocina-modular.png",
  },
  {
    id: 6,
    title: "Cocina Industrial",
    category: "Cocinas",
    description: "Estructura metálica expuesta, estilo loft",
    image: "/images/portfolio/cocina-industrial.png",
  },
  {
    id: 7,
    title: "Cocina Integral",
    category: "Cocinas",
    description: "Cocina integral con isla, acabados en madera clara",
    image: "/images/portfolio/cocina-integral-1.jpg",
  },
  {
    id: 8,
    title: "Cocina con Isla Central",
    category: "Cocinas",
    description: "Diseño funcional con almacenamiento inteligente",
    image: "/images/portfolio/cocina-isla-1.jpg",
  },
  // CLOSETS
  {
    id: 9,
    title: "Closet de Lujo Tipo Boutique",
    category: "Closets",
    description: "Madera, vidrio e iluminación LED",
    image: "/images/portfolio/closet-lujo.png",
  },
  {
    id: 10,
    title: "Closet de Pared",
    category: "Closets",
    description: "Amplio closet con cajones y espacio para colgar",
    image: "/images/portfolio/closet-pared.jpg",
  },
  {
    id: 11,
    title: "Closet Vestier",
    category: "Closets",
    description: "Organización inteligente con estantes y barra",
    image: "/images/portfolio/closet-estanteria-abierto.jpg",
  },
  {
    id: 12,
    title: "Closet en Pasillo",
    category: "Closets",
    description: "Closet de pared con cajones y puertas",
    image: "/images/portfolio/closet-pasillo.jpg",
  },
  // ESCRITORIOS
  {
    id: 13,
    title: "Escritorio Gaming Triple Monitor",
    category: "Escritorios",
    description: "Setup profesional con estantes geométricos",
    image: "/images/portfolio/escritorio-gaming-1.jpg",
  },
  {
    id: 14,
    title: "Escritorio Gaming RGB",
    category: "Escritorios",
    description: "Iluminación LED, silla gamer, estantes triangulares",
    image: "/images/portfolio/escritorio-gaming-2.jpg",
  },
  {
    id: 15,
    title: "Escritorio en L con LED",
    category: "Escritorios",
    description: "Diseño esquinero con iluminación verde, piano",
    image: "/images/portfolio/escritorio-l-led-verde.jpg",
  },
  {
    id: 16,
    title: "Escritorio Dual Laptop",
    category: "Escritorios",
    description: "Setup para 2 portátiles + monitor, silla COUGAR",
    image: "/images/portfolio/escritorio-dual-laptop.jpg",
  },
  // CENTROS DE ENTRETENIMIENTO
  {
    id: 17,
    title: "Centro de Entretenimiento",
    category: "Hogar",
    description: "Madera + metal, estantes con LED",
    image: "/images/portfolio/centro-entretenimiento.png",
  },
  {
    id: 18,
    title: "Mueble Bar y Estantería",
    category: "Hogar",
    description: "Mueble multifuncional para sala de estar",
    image: "/images/portfolio/mueble-bar-estanteria.jpg",
  },
  // ACABADOS
  {
    id: 19,
    title: "PVC Marmolizado",
    category: "Acabados",
    description: "Paredes tipo mármol, acabado premium",
    image: "/images/portfolio/pvc-marmolizado.png",
  },
  {
    id: 20,
    title: "Piso SPC",
    category: "Acabados",
    description: "Madera plástica, alta durabilidad",
    image: "/images/portfolio/piso-spc.png",
  },
  {
    id: 21,
    title: "Instalación Piso SPC",
    category: "Acabados",
    description: "Trabajo ejecutado por RB Soluciones",
    image: "/images/portfolio/piso-instalado-real.png",
  },
  // EXTERIORES
  {
    id: 22,
    title: "Terraza WPC",
    category: "Exteriores",
    description: "Deck madera plástica, outdoor living",
    image: "/images/portfolio/terraza-wpc.png",
  },
  {
    id: 23,
    title: "Cerramiento Aluminio/Vidrio",
    category: "Exteriores",
    description: "Terraza acristalada, vistas panorámicas",
    image: "/images/portfolio/cerramiento-vidrio.png",
  },
  {
    id: 24,
    title: "Pérgola Moderna con LED",
    category: "Exteriores",
    description: "Estructura metal + madera, iluminación",
    image: "/images/portfolio/pergola-moderna.png",
  },
  {
    id: 25,
    title: "Pérgola Listones Madera",
    category: "Exteriores",
    description: "Sombra filtrada, diseño contemporáneo",
    image: "/images/portfolio/pergola-listones.png",
  },
  // PÉRGOLAS NUEVAS (Restrepo)
  {
    id: 26,
    title: "Pérgola - Terraza Amoblada",
    category: "Exteriores",
    description: "Pérgola instalada con muebles de exterior",
    image: "/images/portfolio/pergola-terraza-amoblada.jpg",
  },
  {
    id: 27,
    title: "Pérgola - Vista Amplia",
    category: "Exteriores",
    description: "Cobertura completa con techo translúcido",
    image: "/images/portfolio/pergola-vista-amplia.jpg",
  },
  {
    id: 28,
    title: "Pérgola - Vista Aérea",
    category: "Exteriores",
    description: "Geometría de sombras en terraza",
    image: "/images/portfolio/pergola-vista-aerea.jpg",
  },
  {
    id: 29,
    title: "Pérgola - Conjunto Residencial",
    category: "Exteriores",
    description: "Integración en azotea de edificio",
    image: "/images/portfolio/pergola-conjunto-residencial.jpg",
  },
  // ESTRUCTURAS INDUSTRIALES
  {
    id: 30,
    title: "Techo Industrial Metálico",
    category: "Estructuras",
    description: "Estructura acero, acabado moderno",
    image: "/images/portfolio/techo-industrial.png",
  },
  {
    id: 31,
    title: "Montaje de Tuberías y Válvulas",
    category: "Estructuras",
    description: "Instalación industrial en campo petrolero",
    image: "/images/portfolio/tuberias-valvulas.jpg",
  },
  {
    id: 32,
    title: "Soldadura de Tuberías Industriales",
    category: "Estructuras",
    description: "Trabajo de soldadura certificada en obra",
    image: "/images/portfolio/industrial-soldadura-tuberias.jpg",
  },
  {
    id: 33,
    title: "Instalación Petrolera",
    category: "Estructuras",
    description: "Estructuras metálicas en refinería",
    image: "/images/portfolio/padre-campo-petrolero-1.jpg",
  },
  // BAÑOS
  {
    id: 34,
    title: "Baño Elegante",
    category: "Baños",
    description: "Doble lavamanos, espejos iluminados",
    image: "/images/portfolio/bano-elegante.png",
  },
];

const categories = ["Todos", "Camas", "Cocinas", "Closets", "Escritorios", "Acabados", "Exteriores", "Estructuras", "Baños"];

export default function PortafolioPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  
  const filteredItems = activeFilter === "Todos" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-medium transition-colors text-sm sm:text-base ${
                  filter === activeFilter
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
            {filteredItems.map((item) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-block text-white text-xs px-3 py-1 rounded-full bg-accent">
                      {item.category}
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
