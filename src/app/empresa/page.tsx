import type { Metadata } from "next";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Nuestra Empresa | RB Soluciones Constructivas",
  description: "26 años de experiencia en metalmecánica y construcción. Conoce nuestra historia, valores y compromiso con la calidad.",
};

const values = [
  {
    icon: Award,
    title: "Excelencia Técnica",
    description: "No entregamos lo primero que funciona. Entregamos lo mejor que podemos hacer. Cada proyecto pasa por rigurosos controles de calidad."
  },
  {
    icon: CheckCircle,
    title: "Compromiso Real",
    description: "Los plazos se cumplen. Las garantías se respetan. La confianza se gana cada día con acciones, no con palabras."
  },
  {
    icon: Users,
    title: "Cercanía Humana",
    description: "De empresa a empresa, de persona a persona. Trato directo sin burocracia innecesaria. Tu proyecto importa."
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Respetamos tu tiempo. Plazos claros, comunicación constante, entregas puntuales. Así construimos relaciones duraderas."
  }
];

export default function EmpresaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
              RB Soluciones Constructivas
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Más de dos décadas construyendo confianza, espacio por espacio.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Iniciamos en 1998 como un taller metalmecánico familiar en Restrepo, Meta. 
                  Lo que comenzó fabricando estructuras metálicas para fincas locales, creció 
                  hasta convertirse en una empresa de soluciones constructivas integrales.
                </p>
                <p>
                  Hoy atendemos desde dueños de casa que quieren renovar su hogar, hasta 
                  empresas que necesitan montajes industriales a gran escala. Los 26 años nos 
                  han enseñado que la clave no está solo en la técnica: está en escuchar al 
                  cliente, cumplir lo prometido y estar ahí cuando nos necesitan.
                </p>
                <p>
                  Nuestro equipo combina experiencia con innovación: técnicos con décadas en 
                  metalmecánica, diseñadores que entienden estética y funcionalidad, y una 
                  estructura de empresa que garantiza puntualidad y calidad.
                </p>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-slate-400">Imagen de la empresa / equipo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "1998", label: "Año de fundación" },
              { value: "26+", label: "Años de experiencia" },
              { value: "500+", label: "Proyectos entregados" },
              { value: "3", label: "Ciudades de cobertura" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent font-heading mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Nuestros Valores
            </h2>
            <p className="text-lg text-slate-600">
              Los principios que guían cada decisión y cada proyecto que emprendemos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                Cobertura
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Atendemos proyectos en todo el Meta y Bogotá. Desde instalaciones 
                residenciales pequeñas hasta grandes estructuras industriales, 
                llevamos nuestra experiencia donde nos necesiten.
              </p>
              <div className="space-y-4">
                {[
                  { city: "Restrepo", role: "Sede Principal" },
                  { city: "Villavicencio", role: "Punto de Atención" },
                  { city: "Bogotá", role: "Proyectos de Gran Formato" },
                ].map((location) => (
                  <div
                    key={location.city}
                    className="flex items-center gap-4 bg-slate-800 rounded-xl p-4"
                  >
                    <div className="w-3 h-3 bg-accent rounded-full" />
                    <div>
                      <span className="text-white font-semibold">{location.city}</span>
                      <span className="text-slate-400 text-sm ml-2">— {location.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-slate-500">Mapa de cobertura</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
