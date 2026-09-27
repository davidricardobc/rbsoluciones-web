import Link from "next/link";
import { serviceAreas } from "@/lib/service-areas";

export function Coverage() {
  return (
    <section className="py-20 bg-white" aria-labelledby="coverage-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="coverage-title" className="text-3xl font-bold font-heading text-slate-900 mb-4">Atención en Restrepo, Villavicencio y Bogotá</h2>
        <p className="text-slate-600 mb-8">Consulta cómo preparar tu proyecto y coordinar la atención en cada municipio.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {serviceAreas.map((area) => (
            <Link key={area.slug} href={`/cobertura/${area.slug}/`} className="rounded-2xl border border-slate-200 p-6 hover:border-accent hover:shadow-lg transition-all">
              <h3 className="font-heading font-bold text-xl text-accent mb-3">{area.name}</h3>
              <p className="text-slate-600">{area.intro}</p>
              <span className="block mt-4 text-accent font-semibold">Consultar atención en {area.name} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
