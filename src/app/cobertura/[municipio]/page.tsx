import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceAreas } from "@/lib/service-areas";
import { localMetadata } from "@/lib/local-seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return serviceAreas.map((area) => ({ municipio: area.slug }));
}

type Props = { params: Promise<{ municipio: string }> };

export async function generateMetadata({ params }: Props) {
  const { municipio } = await params;
  const area = serviceAreas.find((item) => item.slug === municipio);
  if (!area) notFound();
  return localMetadata(`${area.title} | RB Soluciones`, area.description, `/cobertura/${area.slug}/`);
}

export default async function MunicipalityPage({ params }: Props) {
  const { municipio } = await params;
  const area = serviceAreas.find((item) => item.slug === municipio);
  if (!area) notFound();
  return (
    <>
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-300 mb-4">Cobertura de servicios · {area.name}</p>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">{area.title}</h1>
          <p className="text-xl text-slate-300 leading-relaxed">{area.intro}</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading mb-6">{area.heading}</h2>
          <div className="space-y-5 text-slate-600 leading-relaxed">{area.details.map((text) => <p key={text}>{text}</p>)}</div>
          <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8">
            <h2 className="text-2xl font-heading font-bold mb-4">Datos para consultar tu proyecto</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">{area.checklist.map((text) => <li key={text}>{text}</li>)}</ul>
          </div>
          <h2 className="text-2xl font-bold font-heading mt-10 mb-4">{area.question}</h2>
          <p className="text-slate-600 leading-relaxed">{area.answer}</p>
          <div className="flex flex-wrap gap-5 mt-10">
            <Link href="/servicios/estructuras/techos-cubiertas/" className="text-accent underline">Techos y cubiertas</Link>
            <Link href="/servicios/estructuras/montajes-metalMecanicos/" className="text-accent underline">Estructuras metálicas</Link>
            <Link href="/servicios/carpinteria/" className="text-accent underline">Carpintería a medida</Link>
          </div>
        </div>
      </section>
      <section className="bg-accent py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-white mb-6">Cuéntanos qué necesitas en {area.name}</h2>
          <Link href="/cotizar/" className="inline-flex bg-white text-accent rounded-xl px-6 py-3 font-semibold">Solicitar cotización</Link>
        </div>
      </section>
      <nav aria-label="Otros municipios" className="max-w-5xl mx-auto px-4 py-10 flex flex-wrap gap-6">
        {serviceAreas.filter((item) => item.slug !== municipio).map((item) => <Link key={item.slug} href={`/cobertura/${item.slug}/`} className="text-accent underline">Atención en {item.name}</Link>)}
      </nav>
    </>
  );
}
