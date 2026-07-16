export type Testimonial = {
  name: string;
  role: string;
  text: string;
  initial: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "María Fernández",
    role: "Estudiante universitaria",
    initial: "M",
    text: "Muy buena experiencia comprando aquí. Atención rápida, clara y honesta. La laptop llegó en perfectas condiciones y funciona súper bien. Volvería a comprar sin duda.",
  },
  {
    name: "Carlos Peña",
    role: "Diseñador freelance",
    initial: "C",
    text: "Precios competitivos y la garantía es real. Me asesoraron según mi presupuesto y me consiguieron justo el equipo que necesitaba. Servicio de primera.",
  },
  {
    name: "Ana Rodríguez",
    role: "Dueña de negocio",
    initial: "A",
    text: "Compré varias computadoras para mi oficina con factura NCF. Todo sellado y original, envío al día siguiente. Ya son mi tienda de confianza para tecnología.",
  },
];
