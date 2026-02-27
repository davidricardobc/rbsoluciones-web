import type { Metadata } from "next";
import { QuotationForm } from "@/components/forms/QuotationForm";
import { CheckCircle, Clock, Shield, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Solicitar Cotización | RB Soluciones Constructivas",
  description: "Solicita tu cotización gratuita. Un asesor te contactará en menos de 24 horas hábiles con una propuesta personalizada para tu proyecto.",
};

const benefits = [
  {
    icon: Shield,
    title: "Sin compromiso",
    description: "Cotización completamente gratuita y sin obligación de compra."
  },
  {
    icon: Clock,
    title: "Respuesta rápida",
    description: "Te contactamos en menos de 24 horas hábiles."
  },
  {
    icon: FileCheck,
    title: "Propuesta detallada",
    description: "Incluye planos, renders y especificaciones técnicas."
  },
  {
    icon: CheckCircle,
    title: "Precio fijo 30 días",
    description: "Tu cotización mantiene el precio por 30 días."
  }
];

export default function CotizarPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
              Solicita tu cotización gratuita
            </h1>
            <p className="text-xl text-slate-300">
              Cuéntanos sobre tu proyecto. En menos de 24 horas hábiles un asesor te contactará con una propuesta personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">{benefit.title}</h3>
                    <p className="text-slate-600 text-xs mt-1">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuotationForm />
        </div>
      </section>
    </>
  );
}
