export type BlogListItem = { label?: string; text: string };

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: BlogListItem[] }
  | { type: "tip"; title: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  datePublished: string;
  author: string;
  image: { src: string; alt: string };
  readingMinutes: number;
  relatedServices: { href: string; label: string }[];
  whatsAppMessage: string;
  blocks: BlogBlock[];
};

export const posts: BlogPost[] = [
  {
    slug: "techos-para-terrazas-en-el-meta-materiales",
    title: "Techos para terrazas en el Meta: cómo escoger materiales que aguanten sol y lluvia",
    seoTitle: "Techos para terrazas en el Meta: materiales que aguantan sol y lluvia",
    description:
      "Guía práctica para escoger la estructura y la cubierta de tu terraza en Restrepo, Villavicencio y el Meta: policarbonato, teja termoacústica, anticorrosivo, pendientes y mantenimiento.",
    datePublished: "2026-09-27",
    author: "Equipo RB Soluciones Constructivas",
    image: {
      src: "/images/portfolio/pergola-terraza-amoblada.jpg",
      alt: "Pérgola metálica sobre una terraza amoblada, instalada por RB Soluciones",
    },
    readingMinutes: 6,
    relatedServices: [
      { href: "/servicios/estructuras/techos-cubiertas/", label: "Techos y cubiertas" },
      { href: "/servicios/hogar/cerramientos-terrazas/", label: "Cerramientos de terrazas" },
      { href: "/cobertura/restrepo/", label: "Trabajos en Restrepo" },
      { href: "/cobertura/villavicencio/", label: "Trabajos en Villavicencio" },
    ],
    whatsAppMessage:
      "Hola RB Soluciones, leí su artículo sobre techos para terrazas y quiero cotizar una cubierta. ¿Me pueden asesorar?",
    blocks: [
      {
        type: "p",
        text: "En Restrepo, Villavicencio y el resto del Meta el clima pone a prueba cualquier techo: sol fuerte buena parte del año, una temporada de lluvias larga con aguaceros intensos y mucha humedad. Un techo mal pensado se nota rápido: goteras, calor, óxido y un ruido que no deja hablar cuando llueve.",
      },
      {
        type: "p",
        text: "Construir bien no es gastar más. Es escoger el material correcto para el uso que le vas a dar al espacio y cuidar los detalles que casi nadie ve. Esta guía resume lo que revisamos antes de recomendar una cubierta.",
      },
      { type: "h2", text: "1. Primero la estructura, después la teja" },
      {
        type: "p",
        text: "La cubierta es lo que se ve, pero la estructura es lo que la sostiene durante años. En un clima húmedo el acero sin protección se oxida, y el óxido casi siempre empieza por las uniones, los cortes y las perforaciones.",
      },
      {
        type: "list",
        items: [
          { label: "Protección contra la corrosión", text: "perfiles galvanizados, o acero limpio con anticorrosivo y pintura de acabado. Pregunta cuántas manos lleva y si se protegen también los cortes." },
          { label: "Soldadura continua y limpia", text: "una soldadura con poros o sin limpiar deja entrar la humedad y es el primer punto de falla." },
          { label: "Cálculo según la luz", text: "no es lo mismo cubrir 3 metros que 6 metros sin apoyos intermedios. El calibre de los perfiles y la distancia entre correas dependen de eso y del peso de la cubierta." },
          { label: "Anclajes revisados", text: "la estructura se fija a placas, vigas o muros que deben soportar la carga y el empuje del viento." },
        ],
      },
      { type: "h2", text: "2. Los materiales de cubierta más usados y cuándo conviene cada uno" },
      {
        type: "list",
        items: [
          { label: "Policarbonato alveolar", text: "liviano, deja pasar la luz y es una opción económica. Debe instalarse con la cara de protección UV hacia el sol y con los alvéolos sellados para que no entren polvo, insectos ni humedad. Con lluvia fuerte suena más que una teja termoacústica." },
          { label: "Policarbonato compacto", text: "se ve parecido al vidrio y resiste mejor los golpes. Es más costoso y más pesado que el alveolar." },
          { label: "Teja termoacústica", text: "reduce el calor y el ruido de la lluvia. Es la mejor opción cuando la terraza se usa como sala, comedor o zona de trabajo. No deja pasar la luz, aunque se puede combinar con franjas traslúcidas." },
          { label: "Lámina metálica", text: "resistente y de buen precio, pero sin aislamiento se calienta y hace mucho ruido. Funciona bien en bodegas, parqueaderos y zonas de servicio." },
          { label: "Vidrio templado", text: "el acabado más elegante. Exige una estructura más robusta y limpieza frecuente para que se vea bien." },
        ],
      },
      {
        type: "tip",
        title: "Regla práctica",
        text: "Si el espacio se va a usar todos los días, prioriza confort térmico y acústico. Si lo importante es la luz, piensa en policarbonato con buena protección UV.",
      },
      { type: "h2", text: "3. Los detalles que evitan goteras" },
      {
        type: "list",
        items: [
          { label: "Pendiente", text: "toda cubierta necesita inclinación para que el agua corra. Cada fabricante indica una pendiente mínima; respetarla evita que el agua se empoce." },
          { label: "Canales y bajantes", text: "deben tener el tamaño suficiente para los aguaceros del Llano, no solo para una lluvia normal." },
          { label: "Traslapos y tornillería", text: "tornillos con arandela de caucho, bien apretados pero sin deformar la teja, y traslapos en la dirección correcta." },
          { label: "Remate contra el muro", text: "el encuentro entre la cubierta y la pared lleva flanche y sello. Es el sitio donde aparecen más goteras." },
        ],
      },
      { type: "h2", text: "4. Calor y ruido: lo que más se siente en el día a día" },
      {
        type: "p",
        text: "En tierra caliente el techo puede convertir una terraza en un horno. Además del material, ayudan la altura de la cubierta, dejar salidas para que el aire caliente escape y preferir colores claros. Si te molesta el ruido de la lluvia, la teja termoacústica o una cubierta con aislamiento marcan una gran diferencia.",
      },
      { type: "h2", text: "5. Mantenimiento: poco, pero a tiempo" },
      {
        type: "list",
        items: [
          { text: "Revisa tornillos y sellos una vez al año, idealmente antes de la temporada de lluvias." },
          { text: "Limpia canales y bajantes para que no se tapen con hojas y barro." },
          { text: "Retoca la pintura apenas veas un punto de óxido; si lo dejas, avanza." },
          { text: "Lava el policarbonato con agua y jabón neutro. Nada de esponjas abrasivas ni solventes." },
        ],
      },
      { type: "h2", text: "Antes de contratar, pregunta esto" },
      {
        type: "list",
        items: [
          { text: "¿Quién calcula la estructura y con qué perfiles?" },
          { text: "¿Qué protección contra la corrosión lleva y cuántas manos?" },
          { text: "¿El material tiene protección UV? ¿De qué espesor es?" },
          { text: "¿Incluye canales, bajantes y el remate contra el muro?" },
          { text: "¿La garantía queda por escrito?" },
          { text: "¿Hacen visita técnica antes de cotizar?" },
        ],
      },
      {
        type: "p",
        text: "En RB Soluciones Constructivas llevamos 26 años en metalmecánica. Diseñamos, fabricamos e instalamos techos, pérgolas y cerramientos en Restrepo, Villavicencio y Bogotá. Si estás pensando en cubrir tu terraza, escríbenos y te ayudamos a escoger el material correcto para tu espacio y tu presupuesto.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
