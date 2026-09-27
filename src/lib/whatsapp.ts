const businessPhone = "573183773905";

export const generalWhatsAppMessage = "Hola RB Soluciones, vi su página web y quiero cotizar un proyecto.";

export function whatsAppUrl(text = generalWhatsAppMessage) {
  return `https://wa.me/${businessPhone}?text=${encodeURIComponent(text)}`;
}

export function serviceWhatsAppMessage(service: string) {
  return `Hola RB Soluciones, me interesa cotizar ${service}. ¿Me pueden asesorar?`;
}

export function municipalityWhatsAppMessage(municipality: string) {
  return `Hola RB Soluciones, vi su página y quiero cotizar un proyecto en ${municipality}.`;
}
