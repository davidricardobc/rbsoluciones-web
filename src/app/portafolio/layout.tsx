import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio | RB Soluciones Constructivas",
  description: "Más de 500 proyectos entregados. Explora nuestro trabajo en cocinas, camas, escritorios, estructuras metálicas, cerramientos y más.",
};

export default function PortafolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
