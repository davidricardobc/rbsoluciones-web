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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  RB Soluciones Constructivas nace de más de 26 años de experiencia en los sectores metalmecánico, industrial y de la construcción.
                </p>
                <p>
                  <strong>Ricardo Bajonero</strong>, fundador de la empresa, inició su carrera como mecánico industrial y, con el paso de los años, asumió mayores responsabilidades en proyectos de gran escala, desempeñándose como supervisor, residente de obra y líder de equipos técnicos.
                </p>
                <p>
                  A lo largo de su trayectoria ha participado en proyectos para importantes compañías como: <em>CBI Reficar, Bavaria, Pacific Rubiales, la Federación Nacional de Cafeteros y Flamingo Oil.</em>
                </p>
                
                <div className="bg-slate-50 rounded-xl p-6 my-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-3">Su experiencia incluye:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Pruebas hidrostáticas en sistemas industriales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Supervisión mecánica y estructural</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Fabricación de equipos para refinación de crudo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Instalación y montaje de equipos industriales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Construcción e instalación de estructuras metálicas</span>
                    </li>
                  </ul>
                </div>

                <p>
                  Con el tiempo, esta experiencia técnica evolucionó hacia una visión: crear una empresa capaz de llevar ese mismo nivel de precisión industrial al mundo residencial y comercial.
                </p>
                <p className="font-semibold text-slate-900">
                  Así nació RB Soluciones Constructivas.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:sticky lg:top-8">
              <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/portfolio/ricardo-bajonero-fundador.jpg" 
                  alt="Ricardo Bajonero - Fundador de RB Soluciones Constructivas" 
                  className="w-full h-auto max-h-[500px] object-contain"
                />
              </div>
              <div className="text-center bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                <p className="font-heading font-bold text-slate-900 text-lg">Ricardo Bajonero</p>
                <p className="text-accent font-medium">Fundador y Director Técnico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Focus */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Nuestro Enfoque Actual
            </h2>
            <p className="text-lg text-slate-600">
              Hoy la empresa se enfoca en el diseño, fabricación e instalación de soluciones personalizadas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Estructuras metálicas",
              "Pérgolas y cubiertas para terrazas", 
              "Sistemas de cubiertas parciales",
              "Cocinas modulares",
              "Closets y muebles a medida",
              "Centros de entretenimiento y soluciones interiores",
              "Paneles PVC marmolizado y acabados WPC",
              "Instalación de piso SPC"
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-slate-800 font-medium max-w-2xl mx-auto">
              Nuestro objetivo es simple: entregar cada proyecto con la misma responsabilidad, precisión y calidad que exigen los grandes proyectos industriales.
            </p>
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
