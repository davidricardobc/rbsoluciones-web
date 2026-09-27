import type { Metadata } from "next";

export const siteUrl = "https://rbsoluciones.co";
export const homeTitle = "Techos y estructuras metálicas en Restrepo, Meta | RB Soluciones";
export const homeDescription = "Techos y estructuras metálicas en Restrepo, Meta. Cerramientos, pérgolas, soldadura y carpintería a medida también en Villavicencio y Bogotá. Cotiza por WhatsApp.";

export function localMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: `${siteUrl}${path}`, type: "website", locale: "es_CO", siteName: "RB Soluciones Constructivas" },
    twitter: { card: "summary", title, description },
  };
}

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteUrl}/#business`,
  name: "RB Soluciones Constructivas",
  url: `${siteUrl}/`,
  description: homeDescription,
  // Número ya publicado en contacto y WhatsApp. Confirmar con David antes de publicar.
  telephone: "+573183773905",
  areaServed: [
    { "@type": "City", name: "Restrepo", containedInPlace: { "@type": "AdministrativeArea", name: "Meta, Colombia" } },
    { "@type": "City", name: "Villavicencio", containedInPlace: { "@type": "AdministrativeArea", name: "Meta, Colombia" } },
    { "@type": "City", name: "Bogotá, Colombia" },
  ],
};
