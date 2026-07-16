export const site = {
  name: "Guiatechnology",
  legal: "Guiatechnology SRL",
  tagline: "Tu nueva laptop está esperando por ti",
  description:
    "Laptops, computadoras, impresoras y equipos de negocio en República Dominicana. Garantía real, asesoría experta y envíos a todo el país.",
  whatsapp: "18295993698",
  whatsappMsg: "Hola Guiatechnology, quiero información sobre un equipo.",
  email: "info@guiatechnology.com.do",
  instagram: "https://instagram.com/guiatechnology",
  facebook: "https://facebook.com/guiatechnology",
  clients: "50,000+",
  rating: 4.8,
  reviews: 312,
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Tienda", href: "/tienda" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Garantías", href: "/garantias" },
    { label: "Contacto", href: "/contacto" },
  ],
};

export function waLink(text?: string) {
  const msg = encodeURIComponent(text ?? site.whatsappMsg);
  return `https://wa.me/${site.whatsapp}?text=${msg}`;
}
