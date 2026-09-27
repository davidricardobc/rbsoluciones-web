import { whatsAppUrl, serviceWhatsAppMessage } from "@/lib/whatsapp";
import Link from "next/link";
import { Coverage } from "@/components/sections/Coverage";
import { localMetadata } from "@/lib/local-seo";

export const metadata = localMetadata(
  "Carpintería a medida en Restrepo, Villavicencio y Bogotá | RB Soluciones",
  "Closets, armarios, cocinas, cajoneros, zapateros y escritorios a medida. Consulta distribución, materiales y medidas para tu proyecto de carpintería.",
  "/servicios/carpinteria/",
);

const furniture = [
  { title: "Closets y armarios", text: "Definimos espacios para colgar, doblar y guardar según lo que necesitas organizar. Revisamos profundidad, apertura de puertas y paso disponible en la habitación." },
  { title: "Cocinas y cajoneros", text: "Estudiamos la distribución de almacenamiento y cajones considerando electrodomésticos, puntos de agua y tomas existentes. Materiales, herrajes y acabados se acuerdan en la propuesta." },
  { title: "Zapateros", text: "Organizamos el espacio según la cantidad y el tipo de calzado. Conviene medir el lugar disponible y revisar cuánto espacio queda para abrir puertas o extraer compartimentos." },
  { title: "Escritorios", text: "Planeamos superficie de trabajo, almacenamiento y paso de cables según tus equipos y el uso diario. Comparte medidas, ubicación de tomas y espacio para la silla." },
];

export default function CarpentryPage() {
  return (
    <>
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">Carpintería a medida</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">Closets, armarios, cocinas, cajoneros, zapateros y escritorios para aprovechar tu espacio. Atendemos en Restrepo, Meta, Villavicencio y Bogotá; cada propuesta parte de tus necesidades y de las medidas del lugar.</p>
        </div>
      </section>
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading mb-8">Muebles según tu forma de usar el espacio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {furniture.map((item) => (
              <article key={item.title} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
                <h3 className="text-2xl font-bold font-heading mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{item.text}</p>
                <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 min-h-36 flex flex-col justify-center p-6 text-center">
                  <p className="font-semibold text-slate-700">Foto real pendiente · {item.title}</p>
                  <p className="text-sm text-slate-500 mt-2">Publicaremos fotografías propias cuando estén verificadas y autorizadas.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading mb-6">Qué necesitamos para preparar una propuesta</h2>
          <ol className="list-decimal pl-5 space-y-4 text-slate-600 leading-relaxed">
            <li>Envía municipio, fotos del espacio y medidas aproximadas de ancho, alto y fondo.</li>
            <li>Cuéntanos qué necesitas guardar o hacer, y comparte referencias de distribución o acabado si las tienes.</li>
            <li>Revisamos materiales, herrajes, acceso y alcance de instalación. Las medidas se verifican antes de fabricar.</li>
            <li>Precio, transporte, plazos y condiciones se acuerdan según la propuesta de cada proyecto.</li>
          </ol>
          <Link href="/cotizar/" className="inline-flex mt-8 bg-accent text-white rounded-xl px-6 py-3 font-semibold">Consultar mi mueble a medida</Link>
              <a href={whatsAppUrl(serviceWhatsAppMessage("carpintería a medida"))} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center m-2 px-6 py-3 bg-whatsapp text-white rounded-xl font-semibold">Consultar por WhatsApp</a>
        </div>
      </section>
      <Coverage />
    </>
  );
}
