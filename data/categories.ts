export type Category = {
  slug: string;
  name: string;
  blurb: string;
  icon: string; // lucide-style key handled in Icon component
  count: number;
};

export const categories: Category[] = [
  {
    slug: "laptops",
    name: "Laptops",
    blurb: "Gaming, oficina, estudiantes y workstations.",
    icon: "laptop",
    count: 48,
  },
  {
    slug: "computadoras",
    name: "Computadoras",
    blurb: "Desktops y mini PC listos para trabajar.",
    icon: "desktop",
    count: 26,
  },
  {
    slug: "impresoras",
    name: "Impresoras",
    blurb: "Tinta continua, láser y multifuncionales.",
    icon: "printer",
    count: 19,
  },
  {
    slug: "negocios",
    name: "Área de negocios",
    blurb: "Soluciones y compras por volumen con NCF.",
    icon: "briefcase",
    count: 12,
  },
  {
    slug: "all-in-one",
    name: "All in one",
    blurb: "Todo integrado, cero cables de más.",
    icon: "monitor",
    count: 14,
  },
  {
    slug: "accesorios",
    name: "Accesorios",
    blurb: "Mouse, teclados, monitores y más.",
    icon: "mouse",
    count: 63,
  },
];
