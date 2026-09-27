import Image from "next/image";

const photos: Record<string, { file: string; alt: string }> = {
  "/servicios/hogar/cocinas-modulares": { file: "cocina-integral-1.jpg", alt: "Cocina integral con isla realizada por RB Soluciones" },
  "/servicios/hogar/closets": { file: "closet-pared.jpg", alt: "Closet de pared a medida" },
  "/servicios/hogar/piso-spc": { file: "piso-instalado-real.webp", alt: "Piso instalado por RB Soluciones" },
  "/servicios/hogar/cerramientos-terrazas": { file: "pergola-vista-amplia.jpg", alt: "Cubierta instalada en terraza" },
  "/servicios/estructuras/techos-cubiertas": { file: "pergola-terraza-amoblada.jpg", alt: "Pérgola sobre terraza amoblada" },
  "/servicios/estructuras/montajes-metalMecanicos": { file: "industrial-soldadura-tuberias.jpg", alt: "Soldadura de tuberías en obra industrial" },
};

export function ServicePhoto({ href }: { href: string }) {
  const photo = photos[href];
  if (!photo) return null;
  return <div className="service-card-photo relative aspect-[4/3] overflow-hidden">
    <Image src={"/images/portfolio/" + photo.file} alt={photo.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.025]" />
  </div>;
}
