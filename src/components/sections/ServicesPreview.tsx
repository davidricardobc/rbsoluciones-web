"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Utensils, 
  Shirt, 
  Tv, 
  Layers, 
  TreePine, 
  Grid3X3, 
  Sun,
  Warehouse,
  ArrowRight 
} from "lucide-react";

const homeServices = [
  { icon: Utensils, title: "Cocinas Modulares", description: "Funcionales y elegantes que aprovechan cada centímetro.", href: "/servicios/hogar/cocinas-modulares", blueprintIcon: "icon-09-kitchen-cabinet.svg" },
  { icon: Shirt, title: "Closets", description: "Organización inteligente adaptada a tu forma de vivir.", href: "/servicios/hogar/closets", blueprintIcon: "icon-08-modular-furniture.svg" },
  { icon: Tv, title: "Centros de Entretenimiento", description: "El corazón de tu sala, integrado y funcional.", href: "/servicios/hogar/centros-entretenimiento", blueprintIcon: "icon-10-partition-wall.svg" },
  { icon: Layers, title: "PVC Marmolizado", description: "Estética de mármol, resistencia superior.", href: "/servicios/hogar/pvc-marmolizado", blueprintIcon: "icon-03-welded-joint.svg" },
  { icon: TreePine, title: "WPC", description: "Belleza de madera sin mantenimiento.", href: "/servicios/hogar/wpc", blueprintIcon: "icon-14-roof-truss.svg" },
  { icon: Grid3X3, title: "Piso SPC", description: "Resistencia de piedra, instalación rápida.", href: "/servicios/hogar/piso-spc", blueprintIcon: "icon-13-column-base.svg" },
  { icon: Sun, title: "Cerramientos", description: "Amplía tu espacio habitable protegido del clima.", href: "/servicios/hogar/cerramientos-terrazas", blueprintIcon: "icon-01-pergola.svg" },
];

const structureServices = [
  { icon: Warehouse, title: "Techos y Cubiertas", description: "Protección estructural con diseño profesional.", href: "/servicios/estructuras/techos-cubiertas", blueprintIcon: "icon-04-terrace-roof.svg" },
  { icon: Layers, title: "Montajes Metalmecánicos", description: "Estructuras industriales con soldadura certificada.", href: "/servicios/estructuras/montajes-metalMecanicos", blueprintIcon: "icon-02-steel-beam.svg" },
];

function ServiceCard({ service, index }: { service: typeof homeServices[0]; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link
        href={service.href}
        className="block bg-white rounded-2xl p-6 border border-slate-100 hover:border-accent/20 hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden"
      >
        {/* Blueprint Decorative Icon - subtle background */}
        <div className="absolute -right-4 -top-4 w-24 h-24 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
          <Image 
            src={`/icons/blueprint/${service.blueprintIcon}`}
            alt=""
            width={96}
            height={96}
            className="w-full h-full"
          />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            {/* Main Icon */}
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
              <Icon className="w-6 h-6 text-accent group-hover:text-white" />
            </div>
            
            {/* Small Blueprint Icon */}
            <div className="w-8 h-8 opacity-40 group-hover:opacity-60 transition-opacity hidden sm:block">
              <Image 
                src={`/icons/blueprint/${service.blueprintIcon}`}
                alt=""
                width={32}
                height={32}
                className="w-full h-full"
              />
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-accent transition-colors">
            {service.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {service.description}
          </p>
          <span className="inline-flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Ver más <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Blueprint Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40">
          <Image src="/icons/blueprint/icon-15-drafting-compass.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-40 right-20 w-32 h-32">
          <Image src="/icons/blueprint/icon-06-welding-machine.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-40 left-1/4 w-36 h-36">
          <Image src="/icons/blueprint/icon-11-anchor-bolt.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28">
          <Image src="/icons/blueprint/icon-07-scaffolding.svg" alt="" fill className="object-contain" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-10 h-10 relative opacity-60">
              <Image src="/icons/blueprint/icon-15-drafting-compass.svg" alt="" fill className="object-contain" />
            </div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Servicios</span>
            <div className="w-10 h-10 relative opacity-60">
              <Image src="/icons/blueprint/icon-15-drafting-compass.svg" alt="" fill className="object-contain" />
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading"
          >
            Soluciones para cada necesidad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600"
          >
            Diseñamos, fabricamos e instalamos soluciones personalizadas que maximizan el espacio y el valor de tu propiedad.
          </motion.p>
        </div>

        {/* Home Services */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-slate-900 mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-1 bg-accent rounded-full" />
            Servicios para el Hogar
            <div className="w-6 h-6 relative opacity-50">
              <Image src="/icons/blueprint/icon-08-modular-furniture.svg" alt="" fill className="object-contain" />
            </div>
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {homeServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Structure Services */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-slate-900 mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-1 bg-accent rounded-full" />
            Estructuras e Industria
            <div className="w-6 h-6 relative opacity-50">
              <Image src="/icons/blueprint/icon-02-steel-beam.svg" alt="" fill className="object-contain" />
            </div>
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {structureServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            Ver todos los servicios <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
