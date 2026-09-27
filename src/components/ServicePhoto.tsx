import Image from "next/image";

const photos: Record<string, { file: string; alt: string }> = {
  "/servicios/hogar/cocinas-modulares": { file: "cocina-integral-1.jpg", alt: "Cocina integral con isla realizada por RB Soluciones" },
  "/servicios/hogar/closets": { file: "closet-pared.jpg", alt: "Closet de pared a medida" },
  "/servicios/hogar/piso-spc": { file: "piso-instalado-real.webp", alt: "Piso instalado por RB Soluciones" },
  "/servicios/hogar/cerramientos-terrazas": { file: "pergola-vista-amplia.jpg", alt: "Cubierta instalada en terraza" },
  "/servicios/estructuras/techos-cubiertas": { file: "pergola-terraza-amoblada.jpg", alt: "Pérgola sobre terraza amoblada" },
  "/servicios/estructuras/montajes-metalMecanicos": { file: "industrial-soldadura-tuberias.jpg", alt: "Soldadura de tuberías en obra industrial" },
  "/servicios/hogar/pvc-marmolizado": { file: "pvc-marmolizado.webp", alt: "Pared con acabado de PVC marmolizado" },
  "/servicios/hogar/wpc": { file: "terraza-wpc.webp", alt: "Terraza con acabados en WPC" },
  // Tarjetas que comparten enlace con otra se identifican por título.
  "Estructuras Industriales": { file: "techo-industrial.webp", alt: "Nave industrial con estructura metálica" },
  "Adecuaciones Estructurales": { file: "tuberias-valvulas.jpg", alt: "Estructura metálica fabricada en taller de obra" },
  "/servicios/hogar/centros-entretenimiento": { file: "centro-entretenimiento.webp", alt: "Centro de entretenimiento a medida" },
};

export function ServicePhoto({ href, title }: { href: string; title?: string }) {
  const photo = (title && photos[title]) || photos[href];
  if (!photo) return null;
  return <div className="service-card-photo relative aspect-[4/3] overflow-hidden">
    <Image src={"/images/portfolio/" + photo.file} alt={photo.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.025]" />
  </div>;
}
