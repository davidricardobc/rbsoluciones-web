import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | RB Soluciones Constructivas",
  description: "Términos y condiciones de uso de nuestros servicios. Conoce tus derechos y obligaciones.",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 font-heading">
          Términos y Condiciones
        </h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed mb-6">
            Al utilizar los servicios de RB Soluciones Constructivas, usted acepta los siguientes 
            términos y condiciones. Le recomendamos leerlos detenidamente.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 font-heading">
            1. Servicios
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            RB Soluciones Constructivas ofrece servicios de metalmecánica, fabricación e instalación 
            de estructuras metálicas, cocinas modulares, closets, y acabados para el hogar e industria. 
            Los servicios están sujetos a disponibilidad y programación previa.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 font-heading">
            2. Cotizaciones
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Las cotizaciones proporcionadas tienen una validez de 30 días calendario a partir de su 
            emisión. Los precios pueden variar según las especificaciones finales del proyecto, 
            materiales seleccionados y condiciones del sitio.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 font-heading">
            3. Pagos
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Los términos de pago se establecerán en el contrato específico de cada proyecto. 
            Generalmente se requiere un anticipo para iniciar la fabricación, con pagos posteriores 
            vinculados a hitos del proyecto.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 font-heading">
            4. Garantía
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Ofrecemos garantía en nuestros trabajos según el tipo de servicio:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
            <li>Estructuras metálicas: 5 años</li>
            <li>Cocinas modulares: 2 años</li>
            <li>Closets y mobiliario: 2 años</li>
            <li>Acabados: 1 año</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-6">
            La garantía cubre defectos de fabricación e instalación, excluyendo daños por uso 
            indebido, desastres naturales o modificaciones realizadas por terceros.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 font-heading">
            5. Tiempos de Entrega
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Los tiempos de entrega establecidos son estimados y pueden variar según la complejidad 
            del proyecto, disponibilidad de materiales y factores externos. Nos comprometemos a 
            comunicar cualquier cambio en los plazos de manera oportuna.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 font-heading">
            6. Cancelaciones
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Las políticas de cancelación y reembolso se especificarán en el contrato de cada proyecto. 
            En general, una vez iniciada la fabricación, no se realizarán reembolsos del anticipo.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 font-heading">
            7. Modificaciones
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            RB Soluciones Constructivas se reserva el derecho de modificar estos términos en cualquier 
            momento. Los cambios entrarán en vigor desde su publicación en el sitio web.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 font-heading">
            8. Contacto
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Para cualquier consulta sobre estos términos, contáctenos en: 
            <a href="mailto:info@rbsoluciones.co" className="text-accent hover:underline ml-1">
              info@rbsoluciones.co
            </a>
          </p>

          <p className="text-slate-500 text-sm mt-12 pt-8 border-t border-slate-200">
            Última actualización: Febrero 2026
          </p>
        </div>
      </div>
    </div>
  );
}
