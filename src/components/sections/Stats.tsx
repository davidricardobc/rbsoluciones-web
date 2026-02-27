"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "26+", label: "Años de experiencia" },
  { value: "500+", label: "Proyectos entregados" },
  { value: "3", label: "Ciudades de cobertura" },
  { value: "98%", label: "Clientes satisfechos" },
];

export function Stats() {
  return (
    <section className="bg-slate-900 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading mb-2">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
