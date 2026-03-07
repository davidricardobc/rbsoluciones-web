"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquare, Pencil, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consulta Inicial",
    description: "Escuchamos tu idea. Cotización sin compromiso. Analizamos tu necesidad y viabilidad.",
    blueprintIcon: "icon-15-drafting-compass.svg",
  },
  {
    icon: Pencil,
    number: "02",
    title: "Diseño Técnico",
    description: "Visitamos tu espacio, tomamos medidas precisas y elaboramos planos técnicos detallados.",
    blueprintIcon: "icon-02-steel-beam.svg",
  },
  {
    icon: Settings,
    number: "03",
    title: "Fabricación",
    description: "Materializamos tu proyecto en nuestro taller con control de calidad riguroso y materiales certificados.",
    blueprintIcon: "icon-03-welded-joint.svg",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Instalación",
    description: "Montaje profesional en tu espacio con garantía de funcionamiento y acabado impecable.",
    blueprintIcon: "icon-12-metal-staircase.svg",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Blueprint Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-10 left-10 w-28 h-28">
          <Image src="/icons/blueprint/icon-06-welding-machine.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-20 right-10 w-32 h-32">
          <Image src="/icons/blueprint/icon-05-angle-grinder.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24">
          <Image src="/icons/blueprint/icon-11-anchor-bolt.svg" alt="" fill className="object-contain" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            Nuestro Proceso
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading"
          >
            Tu proyecto, de la idea a la realidad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Un proceso transparente y profesional que te mantiene informado en cada etapa.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 hover:border-accent/20 hover:shadow-lg transition-all duration-300 relative z-10 overflow-hidden">
                    {/* Blueprint Decorative Icon */}
                    <div className="absolute -right-2 -bottom-2 w-20 h-20 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                      <Image 
                        src={`/icons/blueprint/${step.blueprintIcon}`}
                        alt=""
                        width={80}
                        height={80}
                        className="w-full h-full"
                      />
                    </div>
                    
                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed relative z-10">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (hidden on mobile and last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
