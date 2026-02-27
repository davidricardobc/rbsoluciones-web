import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | RB Soluciones Constructivas",
  description: "Conoce cómo protegemos tu información personal. Comprometidos con la seguridad de tus datos.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 font-heading">
          Política de Privacidad
        </h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed mb-6">
            En RB Soluciones Constructivas, nos comprometemos a proteger su información personal. 
            Esta política de privacidad describe cómo recopilamos, usamos y protegemos sus datos 
            cuando utiliza nuestros servicios.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 font-heading">
            1. Información que Recopilamos
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Podemos recopilar la siguiente información:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
            <li>Número de teléfono/WhatsApp</li>
            <li>Ubicación del proyecto</li>
            <li>Detalles sobre el proyecto solicitado</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 font-heading">
            2. Uso de la Información
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Utilizamos su información para:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
            <li>Procesar solicitudes de cotización</li>
            <li>Comunicarnos sobre su proyecto</li>
            <li>Enviar información relevante sobre nuestros servicios</li>
            <li>Mejorar nuestros productos y servicios</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 font-heading">
            3. Protección de Datos
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Implementamos medidas de seguridad técnicas y organizativas para proteger su información 
            contra acceso no autorizado, alteración, divulgación o destrucción.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 font-heading">
            4. Sus Derechos
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Usted tiene derecho a:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
            <li>Acceder a sus datos personales</li>
            <li>Solicitar la corrección de datos inexactos</li>
            <li>Solicitar la eliminación de sus datos</li>
            <li>Oponerse al tratamiento de sus datos</li>
            <li>Retirar su consentimiento en cualquier momento</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 font-heading">
            5. Contacto
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Si tiene preguntas sobre esta política de privacidad, puede contactarnos en: 
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
