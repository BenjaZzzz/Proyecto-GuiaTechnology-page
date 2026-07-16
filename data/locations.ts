export type Location = {
  slug: string;
  name: string;
  address: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  email: string;
  hours: { days: string; time: string }[];
  mapQuery: string;
};

export const locations: Location[] = [
  {
    slug: "villa-mella",
    name: "Sucursal Villa Mella",
    address: "Av. Hermanas Mirabal, Villa Mella, Santo Domingo Norte, R.D.",
    phone: "+1 829-599-3698",
    phoneRaw: "18295993698",
    whatsapp: "18295993698",
    email: "info@guiatechnology.com.do",
    hours: [
      { days: "Lun a Vie", time: "8:30 am – 6:00 pm" },
      { days: "Sábado", time: "8:30 am – 4:00 pm" },
      { days: "Domingo", time: "Con cita previa" },
    ],
    mapQuery: "Villa+Mella+Santo+Domingo",
  },
  {
    slug: "san-vicente",
    name: "Sucursal San Vicente",
    address: "Av. San Vicente de Paúl, Santo Domingo Este, R.D.",
    phone: "+1 829-599-0221",
    phoneRaw: "18295990221",
    whatsapp: "18295990221",
    email: "info@guiatechnology.com.do",
    hours: [
      { days: "Lun a Vie", time: "8:30 am – 6:00 pm" },
      { days: "Sábado", time: "8:30 am – 4:00 pm" },
      { days: "Domingo", time: "Con cita previa" },
    ],
    mapQuery: "San+Vicente+de+Paul+Santo+Domingo+Este",
  },
];
