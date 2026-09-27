import type { Metadata } from "next";

export const siteUrl = "https://rbsoluciones.co";
// La marca va primero: quien busca "RB Soluciones" debe reconocer el sitio de inmediato.
export const homeTitle = "RB Soluciones Constructivas | Techos y estructuras metálicas en Restrepo, Meta";
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
  alternateName: ["RB Soluciones", "RB Soluciones Restrepo"],
  url: `${siteUrl}/`,
  image: `${siteUrl}/images/portfolio/industrial-soldadura-tuberias.jpg`,
  description: homeDescription,
  // Número ya publicado en contacto y WhatsApp. Confirmar con David antes de publicar.
  telephone: "+573183773905",
  areaServed: [
    { "@type": "City", name: "Restrepo", containedInPlace: { "@type": "AdministrativeArea", name: "Meta, Colombia" } },
    { "@type": "City", name: "Villavicencio", containedInPlace: { "@type": "AdministrativeArea", name: "Meta, Colombia" } },
    { "@type": "City", name: "Bogotá, Colombia" },
  ],
};

// Google usa WebSite.name y alternateName para el nombre del sitio en los resultados.
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "RB Soluciones Constructivas",
  alternateName: ["RB Soluciones", "rbsoluciones.co"],
  url: `${siteUrl}/`,
  publisher: { "@id": `${siteUrl}/#business` },
};
