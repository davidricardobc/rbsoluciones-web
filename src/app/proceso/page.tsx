import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proceso de Trabajo | RB Soluciones Constructivas",
  description: "Conoce nuestro proceso transparente: desde la consulta inicial hasta la instalación final. Garantía de calidad en cada etapa.",
};

export default function ProcesoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
              Cómo Trabajamos
            </h1>
            <p className="text-xl text-slate-300">
              Un proceso transparente y profesional que te mantiene informado en cada etapa.
              Desde la idea hasta la realidad.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 z-0" />

            {/* Steps */}
            {[
              {
                step: "01",
                title: "Consulta Inicial",
                description: "Escuchamos tu idea. Cotización inicial sin compromiso. Analizamos tu necesidad y viabilidad del proyecto. Te damos un estimado de inversión sin cargo.",
                details: ["Contacto por WhatsApp o formulario", "Análisis preliminar de necesidades", "Estimado de inversión inicial"]
              },
              {
                step: "02",
                title: "Diseño Técnico",
                description: "Visitamos tu espacio, tomamos medidas precisas y elaboramos planos técnicos detallados. Vez renders o bocetos antes de fabricar.",
                details: ["Visita técnica sin costo", "Toma de medidas precisas", "Planos y renders", "Aprobación del diseño"]
              },
              {
                step: "03",
                title: "Fabricación Especializada",
                description: "En nuestro taller equipado, fabricamos cada pieza con control de calidad riguroso. Materiales certificados, cortes precisos, acabados profesionales.",
                details: ["Materiales de calidad certificada", "Control de calidad en cada etapa", "Acabados profesionales", "Preparación para instalación"]
              },
              {
                step: "04",
                title: "Instalación Profesional",
                description: "Nuestro equipo de instaladores capacitados monta todo en tu espacio. Limpieza posterior, pruebas de funcionamiento y garantía escrita.",
                details: ["Instalación por profesionales", "Limpieza del área", "Pruebas de funcionamiento", "Garantía de satisfacción"]
              }
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative flex flex-col md:flex-row gap-6 md:gap-0 mb-12 md:mb-16 last:mb-0"
              >
                {/* Mobile Badge */}
                <div className="md:hidden flex-shrink-0 mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent rounded-full shadow-lg">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 lg:pr-16 md:text-right" : "md:pl-12 lg:pl-16"}`}>
                  <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
                    <span className="inline-block bg-accent text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                      Paso {item.step}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 font-heading">
                      {item.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4 md:mb-6">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li
                          key={i}
                          className={`flex items-center gap-2 text-slate-600 text-sm ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
                          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Dot - Desktop only */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-20">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-accent rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                    <span className="text-white font-bold text-base lg:text-lg">{item.step}</span>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-heading">
            ¿Listo para iniciar tu proyecto?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Comienza con el paso 1. Solicita tu cotización gratuita y sin compromiso.
          </p>
          <a
            href="/cotizar"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            Iniciar Proyecto
          </a>
        </div>
      </section>
    </>
  );
}
