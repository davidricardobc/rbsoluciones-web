import { whatsAppUrl } from "./whatsapp.ts";

export interface FormData {
  category: "hogar" | "estructuras" | "";
  homeServices: string[];
  structServices: string[];
  projectDescription: string;
  projectStage: string;
  timeline: string;
  city: string;
  cityOther: string;
  neighborhood: string;
  fullName: string;
  email: string;
  whatsapp: string;
  preferWhatsApp: boolean;
  source: string;
  additionalComments: string;
  acceptTerms: boolean;
}

interface QuoteSubmissionResponse {
  ok: boolean;
  reference?: string;
  message?: string;
  channel?: "whatsapp";
}

const cityMap: Record<string, string> = {
  restrepo: "Restrepo (Meta)",
  villavicencio: "Villavicencio",
  bogota: "Bogotá",
};

const projectStageMap: Record<string, string> = {
  idea: "Solo tengo la idea",
  planos: "Tengo planos / renders",
  construccion: "Obra en construcción",
  renovacion: "Renovación de espacio existente",
};

const timelineMap: Record<string, string> = {
  urgente: "Lo antes posible",
  "1-2meses": "Dentro de 1-2 meses",
  "3-6meses": "Dentro de 3-6 meses",
  indefinido: "Aún no lo tengo definido",
};

const sourceMap: Record<string, string> = {
  google: "Google / Búsqueda web",
  facebook: "Facebook",
  instagram: "Instagram",
  recomendacion: "Recomendación",
  cliente: "Ya soy cliente",
  otro: "Otro",
};

function buildReference() {
  const now = new Date();
  const date = `${now.getUTCFullYear()}${String(now.getUTCMonth() + 1).padStart(2, "0")}${String(now.getUTCDate()).padStart(2, "0")}`;
  const random = Math.floor(Math.random() * 100000).toString().padStart(5, "0");
  return `RB-${date}-${random}`;
}

export async function submitQuote(formData: FormData, webhookUrl?: string, openWhatsApp?: (url: string) => void): Promise<QuoteSubmissionResponse> {

  if (!formData.acceptTerms) return { ok: false, message: "Acepta la política de privacidad para continuar." };

  if (!webhookUrl?.trim()) {
    // Run before any await so browsers retain the submit gesture when opening the tab.
    openWhatsApp?.(quoteWhatsAppUrl(formData));
    return {
      ok: true,
      channel: "whatsapp",
      message: "Tu solicitud está lista en WhatsApp, solo presiona enviar",
    };
  }

  try {
    const url = new URL(webhookUrl);
    if (url.protocol !== "https:" || url.username || url.password) throw new Error("Invalid URL");
  } catch {
    return { ok: false, message: "El envío web no está disponible. Puedes continuar por WhatsApp." };
  }
  const reference = buildReference();
  const services = formData.category === "hogar" ? formData.homeServices : formData.structServices;
  const city = formData.city === "otro" ? formData.cityOther.trim() : (cityMap[formData.city] || formData.city);

  const lead = {
    reference,
    createdAt: new Date().toISOString(),
    business: "RB Soluciones Constructivas",
    source: "website",
    page: "/cotizar",
    contact: {
      fullName: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      whatsapp: `+57${formData.whatsapp}`,
      preferWhatsApp: formData.preferWhatsApp,
    },
    project: {
      category: formData.category,
      services,
      description: formData.projectDescription.trim(),
      stage: projectStageMap[formData.projectStage] || formData.projectStage,
      timeline: timelineMap[formData.timeline] || formData.timeline,
      city,
      neighborhood: formData.neighborhood?.trim() || null,
    },
    marketing: {
      source: sourceMap[formData.source] || formData.source || "No especificado",
    },
    notes: formData.additionalComments?.trim() || null,
    consent: formData.acceptTerms,
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lead),
      mode: "cors",
      credentials: "omit",
      signal: AbortSignal.timeout(15000),
    });

    const responseJson: unknown = await response.json();
    if (!response.ok || !responseJson || typeof responseJson !== "object" ||
        !("ok" in responseJson) || responseJson.ok !== true ||
        !("reference" in responseJson) || responseJson.reference !== reference) {
      return { ok: false, message: "No pudimos confirmar la recepción. Escríbenos por WhatsApp antes de repetir el envío." };
    }

    return {
      ok: true,
      reference,
    };
  } catch {
    return {
      ok: false,
      message: "No pudimos confirmar la recepción. Puedes continuar por WhatsApp para verificar tu solicitud.",
    };
  }
}

export function quoteWhatsAppUrl(formData: FormData, reference?: string | null) {
  const city = formData.city === "otro" ? formData.cityOther : cityMap[formData.city];
  const services = formData.category === "hogar" ? formData.homeServices : formData.structServices;
  const text = ["Hola, quiero cotizar un proyecto con RB Soluciones.",
    reference ? `Referencia recibida: ${reference}` : "Solicitud pendiente de envío por WhatsApp.",
    `Nombre: ${formData.fullName.trim()}`, `WhatsApp: +57${formData.whatsapp}`, `Correo: ${formData.email.trim()}`,
    `Servicios: ${services.map(service => serviceNames[service] || service).join(", ")}`,
    `Tipo de proyecto: ${formData.category === "hogar" ? "Hogar" : "Estructuras"}`,
    `Medidas y detalles: ${formData.projectDescription.trim()}`,
    `Municipio: ${city || formData.city}`,
    formData.neighborhood.trim() ? `Sector: ${formData.neighborhood.trim()}` : "",
    `Etapa: ${projectStageMap[formData.projectStage] || formData.projectStage}`,
    formData.timeline ? `Plazo: ${timelineMap[formData.timeline] || formData.timeline}` : "",
    formData.additionalComments.trim() ? `Notas: ${formData.additionalComments.trim()}` : "",
    `Contacto preferido: ${formData.preferWhatsApp ? "WhatsApp" : "Correo"}`,
    formData.source ? `Nos conoció por: ${sourceMap[formData.source] || formData.source}` : "",
  ].filter(Boolean).join("\n");
  return whatsAppUrl(text);
}

const serviceNames: Record<string, string> = {
  cocinas: "Cocinas modulares", closets: "Closets a medida", centros: "Centros de entretenimiento",
  pvc: "PVC marmolizado", wpc: "Acabados WPC", spc: "Piso SPC", cerramientos: "Cerramientos de terrazas",
  techos: "Techos y cubiertas", montajes: "Montajes metalmecánicos", industrial: "Estructuras industriales",
  adecuaciones: "Adecuaciones estructurales",
};
