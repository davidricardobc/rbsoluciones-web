import type { Metadata } from "next";
import Link from "next/link";
import { 
  Utensils, 
  Shirt, 
  Tv, 
  Layers, 
  TreePine, 
  Grid3X3, 
  Sun,
  Warehouse,
  Wrench,
  Building2,
  ArrowRight 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios | RB Soluciones Constructivas",
  description: "Cocinas modulares, estructuras metálicas, cerramientos y más. Soluciones integrales para hogar e industria en Restrepo, Villavicencio y Bogotá.",
};

const hogarServices = [
  { 
    icon: Utensils, 
    title: "Cocinas Modulares", 
    description: "Cocinas funcionales y elegantes que aprovechan cada centímetro. Diseño ergonómico, materiales resistentes a humedad y calor.",
    href: "/servicios/hogar/cocinas-modulares" 
  },
  { 
    icon: Shirt, 
    title: "Closets a Medida", 
    description: "Organización inteligente que se adapta a tu ropa, tus zapatos y tu forma de vivir. Sistemas corredizos suaves y acabados impecables.",
    href: "/servicios/hogar/closets" 
  },
  { 
    icon: Tv, 
    title: "Centros de Entretenimiento", 
    description: "El corazón de tu sala de estar. Diseños integrados para TV, equipos de sonido y almacenamiento oculto.",
    href: "/servicios/hogar/centros-entretenimiento" 
  },
  { 
    icon: Layers, 
    title: "PVC Marmolizado", 
    description: "La estética del mármol a una fracción del costo. Ideal para cocinas y baños: resistentes al agua, fáciles de limpiar, duraderos.",
    href: "/servicios/hogar/pvc-marmolizado" 
  },
  { 
    icon: TreePine, 
    title: "Acabados WPC", 
    description: "La belleza de la madera sin sus problemas. No se deforma con la humedad, no requiere mantenimiento, duración garantizada.",
    href: "/servicios/hogar/wpc" 
  },
  { 
    icon: Grid3X3, 
    title: "Piso SPC", 
    description: "Resistencia de piedra, instalación rápida. Impermeable, antideslizante, ideal para cocinas, baños y áreas de alto tráfico.",
    href: "/servicios/hogar/piso-spc" 
  },
  { 
    icon: Sun, 
    title: "Cerramientos de Terrazas", 
    description: "Amplía tu espacio habitable con policarbonato, aluminio o vidrio templado. Protección del clima sin perder la luz natural.",
    href: "/servicios/hogar/cerramientos-terrazas" 
  },
];

const estructuraServices = [
  { 
    icon: Warehouse, 
    title: "Techos y Cubiertas", 
    description: "Protección estructural con diseño. Estructuras metálicas con policarbonato, teja metálica o láminas termoacústicas. Incluyen canalones y sistemas de drenaje.",
    href: "/servicios/estructuras/techos-cubiertas" 
  },
  { 
    icon: Wrench, 
    title: "Montajes Metalmecánicos", 
    description: "Fabricación e instalación de estructuras metálicas industriales. Naves industriales, mezzanines, plataformas y soportes especiales.",
    href: "/servicios/estructuras/montajes-metalMecanicos" 
  },
  { 
    icon: Building2, 
    title: "Estructuras Industriales", 
    description: "Grandes volúmenes, grandes responsabilidades. Diseño estructural, cálculo de cargas, soldadura certificada y montaje profesional.",
    href: "/servicios/estructuras/estructuras-industriales" 
  },
  { 
    icon: Layers, 
    title: "Adecuaciones Estructurales", 
    description: "Refuerzos, remodelaciones y modificaciones a estructuras existentes. Certificaciones estructurales disponibles.",
    href: "/servicios/estructuras/adecuaciones-estructurales" 
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Soluciones integrales para transformar hogares e industrias. 
              Desde cocinas modulares hasta grandes estructuras metalmecánicas, 
              con 26 años de experiencia respaldando cada proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Hogar Services */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Servicios para el Hogar
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Transforma tu espacio con acabados de calidad superior. 
              Diseños personalizados que se adaptan a tu estilo y necesidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hogarServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:border-accent/20 border border-transparent transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7 text-accent group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors font-heading">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent font-medium text-sm group-hover:gap-2 transition-all">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Estructuras Services */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Estructuras e Industria
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Solidez que soporta el tiempo. Proyectos metalmecánicos y estructurales 
              con supervisión técnica especializada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {estructuraServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group block bg-white rounded-2xl p-8 hover:shadow-xl hover:border-accent/20 border border-slate-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7 text-accent group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent transition-colors font-heading">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent font-medium text-sm group-hover:gap-2 transition-all">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            ¿Necesitas un servicio personalizado?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Cuéntanos sobre tu proyecto y te ayudamos a encontrar la mejor solución.
          </p>
          <Link
            href="/cotizar"
            className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
          >
            Solicitar Cotización Gratis
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
