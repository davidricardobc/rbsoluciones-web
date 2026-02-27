import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio | RB Soluciones Constructivas",
  description: "Más de 500 proyectos entregados. Explora nuestro trabajo en cocinas, estructuras metálicas, cerramientos y más.",
};

const portfolioItems = [
  {
    id: 1,
    title: "Cocina Integral Moderna",
    category: "Hogar",
    location: "Restrepo, Meta",
    image: "/images/placeholder-1.jpg",
  },
  {
    id: 2,
    title: "Estructura Metálica Industrial",
    category: "Estructuras",
    location: "Villavicencio",
    image: "/images/placeholder-2.jpg",
  },
  {
    id: 3,
    title: "Closet Walk-in",
    category: "Hogar",
    location: "Bogotá",
    image: "/images/placeholder-3.jpg",
  },
  {
    id: 4,
    title: "Techos en Policarbonato",
    category: "Estructuras",
    location: "Restrepo, Meta",
    image: "/images/placeholder-4.jpg",
  },
  {
    id: 5,
    title: "Centro de Entretenimiento",
    category: "Hogar",
    location: "Villavicencio",
    image: "/images/placeholder-5.jpg",
  },
  {
    id: 6,
    title: "Cerramiento de Terraza",
    category: "Hogar",
    location: "Bogotá",
    image: "/images/placeholder-6.jpg",
  },
];

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
              Más de 500 espacios transformados. Cada imagen es un cliente satisfecho que recomienda nuestro trabajo.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {["Todos", "Hogar", "Estructuras"].map((filter) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Imagen del proyecto</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-block bg-accent text-white text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-1 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State Notice */}
          <div className="mt-16 p-8 bg-slate-50 rounded-2xl text-center">
            <p className="text-slate-600">
              Las imágenes de proyectos reales serán agregadas durante la implementación final.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
