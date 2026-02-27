import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | RB Soluciones Constructivas",
  description: "Contáctanos en Restrepo, Villavicencio o Bogotá. Estamos para ayudarte con tu proyecto de construcción o metalmecánica.",
};

const locations = [
  {
    city: "Restrepo",
    state: "Meta",
    type: "Sede Principal",
    address: "Dirección principal, Restrepo, Meta",
    phone: "+57 3XX XXX XXXX",
    hours: "Lun-Vie: 8:00 AM - 5:00 PM\nSáb: 8:00 AM - 12:00 PM",
  },
  {
    city: "Villavicencio",
    state: "Meta",
    type: "Punto de Atención",
    address: "Proyectos e instalaciones en zona",
    phone: "+57 3XX XXX XXXX",
    hours: "Lun-Vie: 8:00 AM - 5:00 PM",
  },
  {
    city: "Bogotá",
    state: "Cundinamarca",
    type: "Proyectos de Gran Formato",
    address: "Cobertura: Bogotá y Sabana",
    phone: "+57 3XX XXX XXXX",
    hours: "Lun-Vie: 8:00 AM - 5:00 PM",
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
              Estamos para ayudarte
            </h1>
            <p className="text-xl text-slate-300">
              Contáctanos por el canal que prefieras. Respondemos en menos de 2 horas en horario comercial.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div
                key={location.city}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 font-heading">
                      {location.city}
                    </h2>
                    <p className="text-accent font-medium text-sm">{location.type}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-sm">{location.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <a
                      href={`tel:${location.phone.replace(/\s/g, "")}`}
                      className="text-slate-600 text-sm hover:text-accent transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-sm whitespace-pre-line">
                      {location.hours}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <a
                    href="https://wa.me/573XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center bg-whatsapp hover:bg-whatsapp/90 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp {location.city}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4 font-heading">
            Escríbenos por correo
          </h2>
          <p className="text-slate-600 mb-6">
            Para cotizaciones detalladas o información general
          </p>
          <a
            href="mailto:info@rbsoluciones.co"
            className="inline-flex items-center gap-2 text-accent font-semibold text-lg hover:underline"
          >
            info@rbsoluciones.co
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            ¿Prefieres una cotización inmediata?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Completa nuestro formulario y te contactamos en menos de 24 horas.
          </p>
          <Link
            href="/cotizar"
            className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
          >
            Solicitar Cotización
          </Link>
        </div>
      </section>
    </>
  );
}
