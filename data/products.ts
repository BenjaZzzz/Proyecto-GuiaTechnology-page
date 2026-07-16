export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: string; // category slug
  categoryLabel: string;
  price: number; // RD$
  oldPrice?: number;
  image: string;
  images?: string[]; // additional gallery images
  badge?: "Nuevo" | "Tope de gama" | "La económica" | "Más vendida";
  stock: string;
  tagline: string;
  specs: { label: string; value: string }[];
  highlights: string[];
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const products: Product[] = [
  {
    slug: "asus-rog-strix-g16-g614pr",
    name: "ASUS ROG Strix G16 G614PR",
    brand: "ASUS",
    category: "laptops",
    categoryLabel: "Laptop Gaming",
    price: 140000,
    oldPrice: 159000,
    image: "/images/products/rog-strix-g16/imgi_107_ROG-Strix-G16-G614-2025-1.webp",
    images: [
      "/images/products/rog-strix-g16/imgi_107_ROG-Strix-G16-G614-2025-1.webp",
      "/images/products/rog-strix-g16/imgi_108_ROG-Strix-G16-G614-2025-2.webp",
      "/images/products/rog-strix-g16/imgi_109_ROG-Strix-G16-G614-2025-3.webp",
      "/images/products/rog-strix-g16/imgi_110_ROG-Strix-G16-G614-2025-4.webp",
      "/images/products/rog-strix-g16/imgi_111_ROG-Strix-G16-G614-2025-5.webp",
    ],
    badge: "Más vendida",
    stock: "Quedan 3",
    tagline: "Potencia gamer con RTX y pantalla de 16'' a 240 Hz.",
    specs: [
      { label: "Procesador", value: "Intel Core i9-14900HX" },
      { label: "Gráficos", value: "NVIDIA RTX 4070 8GB" },
      { label: "Memoria", value: "16GB DDR5 5600 MT/s" },
      { label: "Almacenamiento", value: "1TB SSD NVMe PCIe 4.0" },
      { label: "Pantalla", value: "16'' QHD+ 240Hz" },
    ],
    highlights: ["RTX 4070", "240 Hz", "Teclado RGB por tecla"],
  },
  {
    slug: "msi-crosshair-16-max-hx",
    name: "MSI Crosshair 16 Max HX",
    brand: "MSI",
    category: "laptops",
    categoryLabel: "Laptop Gaming",
    price: 100000,
    oldPrice: 120000,
    image: "/images/products/msi-crosshair-16-max-hx/imgi_54_Web_Crosshair_16_Max_HX_1.webp",
    images: [
      "/images/products/msi-crosshair-16-max-hx/imgi_54_Web_Crosshair_16_Max_HX_1.webp",
      "/images/products/msi-crosshair-16-max-hx/imgi_55_Web_Crosshair_16_Max_HX_2.webp",
      "/images/products/msi-crosshair-16-max-hx/imgi_57_Web_Crosshair_16_Max_HX_3.webp",
      "/images/products/msi-crosshair-16-max-hx/imgi_59_Web_Crosshair_16_Max_HX_4.webp",
      "/images/products/msi-crosshair-16-max-hx/imgi_10_Web_Crosshair_16_Max_HX_5.webp",
      "/images/products/msi-crosshair-16-max-hx/imgi_11_Web_Crosshair_16_Max_HX_6.webp",
      "/images/products/msi-crosshair-16-max-hx/imgi_61_Web_Crosshair_16_Max_HX_5.webp",
    ],
    stock: "Última unidad disponible",
    tagline: "Chasis premium y refrigeración Cooler Boost 5.",
    specs: [
      { label: "Procesador", value: "Intel Core i7-14700HX" },
      { label: "Gráficos", value: "NVIDIA RTX 4060 8GB" },
      { label: "Memoria", value: "16GB DDR5" },
      { label: "Almacenamiento", value: "1TB SSD NVMe" },
      { label: "Pantalla", value: "16'' FHD+ 144Hz" },
    ],
    highlights: ["RTX 4060", "144 Hz", "Cooler Boost 5"],
  },
  {
    slug: "alienware-16-ac16251",
    name: "Alienware 16 AC16251",
    brand: "Alienware",
    category: "laptops",
    categoryLabel: "Laptop Gaming",
    price: 115000,
    image: "/images/products/alienware-16x-ac16251/imgi_213_alienware-16x-aurora-ac16251-intel-core-ultra-7-laptop-1500px-v0001.webp",
    images: [
      "/images/products/alienware-16x-ac16251/imgi_213_alienware-16x-aurora-ac16251-intel-core-ultra-7-laptop-1500px-v0001.webp",
      "/images/products/alienware-16x-ac16251/imgi_215_alienware-16x-aurora-ac16251-intel-core-ultra-7-laptop-1500px-v0003.webp",
      "/images/products/alienware-16x-ac16251/imgi_216_alienware-16x-aurora-ac16251-intel-core-ultra-7-laptop-1500px-v0004.webp",
      "/images/products/alienware-16x-ac16251/imgi_217_alienware-16x-aurora-ac16251-intel-core-ultra-7-laptop-1500px-v0005.webp",
      "/images/products/alienware-16x-ac16251/imgi_218_alienware-16x-aurora-ac16251-intel-core-ultra-7-laptop-1500px-v0006.webp",
      "/images/products/alienware-16x-ac16251/imgi_219_alienware-16x-aurora-ac16251-intel-core-ultra-7-laptop-1500px-v0007.webp",
      "/images/products/alienware-16x-ac16251/imgi_220_alienware-16x-aurora-ac16251-intel-core-ultra-7-laptop-1500px-v0008.webp",
      "/images/products/alienware-16x-ac16251/imgi_221_alienware-16x-aurora-ac16251-intel-core-ultra-7-laptop-1500px-v0009.webp",
    ],
    badge: "Nuevo",
    stock: "Nuevo ingreso",
    tagline: "Diseño legendario Alienware con termales de alto rendimiento.",
    specs: [
      { label: "Procesador", value: "Intel Core i7-13700HX" },
      { label: "Gráficos", value: "NVIDIA RTX 4060 8GB" },
      { label: "Memoria", value: "16GB DDR5" },
      { label: "Almacenamiento", value: "512GB SSD NVMe" },
      { label: "Pantalla", value: "16'' QHD+ 165Hz" },
    ],
    highlights: ["RTX 4060", "165 Hz", "AlienFX"],
  },
  {
    slug: "lenovo-loq-15ahp10",
    name: "Lenovo LOQ 15AHP10",
    brand: "Lenovo",
    category: "laptops",
    categoryLabel: "Laptop Gaming",
    price: 75000,
    oldPrice: 80000,
    image: "/images/products/lenovo-loq-15ahp10/imgi_33_cda1858aa76ed47fd4c9c7a83fbcb07dacfafd2a-500x500.png",
    images: [
      "/images/products/lenovo-loq-15ahp10/imgi_32_869d934cc22957939cfe3f61318711c71c46db2b-500x500.png",
      "/images/products/lenovo-loq-15ahp10/imgi_33_cda1858aa76ed47fd4c9c7a83fbcb07dacfafd2a-500x500.png",
      "/images/products/lenovo-loq-15ahp10/imgi_34_78acdef218c1bffbd8662208bb95bafd1818e7d6-500x500.png",
      "/images/products/lenovo-loq-15ahp10/imgi_35_71165ae68be1006f2a56185bbd25a3c9ca074d3c-500x500.png",
      "/images/products/lenovo-loq-15ahp10/imgi_36_5814232afd9bf36e88aa5bd118279edefd8611a5-500x500.png",
    ],
    stock: "Quedan 5",
    tagline: "El punto de entrada ideal al gaming en 1080p.",
    specs: [
      { label: "Procesador", value: "AMD Ryzen 7 8845HS" },
      { label: "Gráficos", value: "NVIDIA RTX 4050 6GB" },
      { label: "Memoria", value: "16GB DDR5" },
      { label: "Almacenamiento", value: "512GB SSD NVMe" },
      { label: "Pantalla", value: "15.6'' FHD 144Hz" },
    ],
    highlights: ["RTX 4050", "144 Hz", "Ryzen 7"],
  },
  {
    slug: "asus-rog-strix-g16-g615lw",
    name: "ROG Strix G16 G615LW-AS96",
    brand: "ASUS",
    category: "laptops",
    categoryLabel: "Laptop Gaming",
    price: 225000,
    image: "/images/products/rog-strix-g16-g615lw/imgi_17_huge.webp",
    images: [
      "/images/products/rog-strix-g16-g615lw/imgi_17_huge.webp",
      "/images/products/rog-strix-g16-g615lw/imgi_18_huge.webp",
      "/images/products/rog-strix-g16-g615lw/imgi_19_huge.webp",
      "/images/products/rog-strix-g16-g615lw/imgi_20_huge.webp",
      "/images/products/rog-strix-g16-g615lw/imgi_21_huge.webp",
    ],
    badge: "Tope de gama",
    stock: "Solo queda 1",
    tagline: "Lo máximo: RTX 5080 y pantalla Nebula de 240 Hz.",
    specs: [
      { label: "Procesador", value: "Intel Core Ultra 9 275HX" },
      { label: "Gráficos", value: "NVIDIA RTX 5080 16GB" },
      { label: "Memoria", value: "32GB DDR5 5600 MT/s" },
      { label: "Almacenamiento", value: "2TB SSD NVMe PCIe 4.0" },
      { label: "Pantalla", value: "16'' Nebula QHD+ 240Hz" },
    ],
    highlights: ["RTX 5080", "32GB RAM", "Nebula Display"],
  },
  {
    slug: "acer-aspire-3",
    name: "Acer Aspire 3",
    brand: "Acer",
    category: "laptops",
    categoryLabel: "Laptop Estudiantes",
    price: 16000,
    image: "/images/products/acer-aspire-3/imgi_12_174625-800-auto.webp",
    images: [
      "/images/products/acer-aspire-3/imgi_12_174625-800-auto.webp",
      "/images/products/acer-aspire-3/imgi_13_174626-800-auto.webp",
      "/images/products/acer-aspire-3/imgi_40_174622-600-auto.webp",
    ],
    badge: "La económica",
    stock: "Disponible",
    tagline: "Perfecta para clases, tareas y trabajo del día a día.",
    specs: [
      { label: "Procesador", value: "Intel Core i3-N305" },
      { label: "Gráficos", value: "Intel UHD Graphics" },
      { label: "Memoria", value: "8GB DDR5" },
      { label: "Almacenamiento", value: "256GB SSD NVMe" },
      { label: "Pantalla", value: "15.6'' FHD" },
    ],
    highlights: ["Ligera", "SSD NVMe", "Batería larga"],
  },
  {
    slug: "dell-optiplex-mini-pc",
    name: "Dell OptiPlex Mini PC",
    brand: "Dell",
    category: "computadoras",
    categoryLabel: "Mini PC",
    price: 42000,
    oldPrice: 47000,
    image: img("photo-1587831990711-23ca6441447b"),
    stock: "Quedan 4",
    tagline: "Oficina compacta y silenciosa con potencia de sobra.",
    specs: [
      { label: "Procesador", value: "Intel Core i7-14700T (20 núcleos)" },
      { label: "Gráficos", value: "Intel UHD Graphics 770" },
      { label: "Memoria", value: "16GB DDR5 5600 MT/s" },
      { label: "Almacenamiento", value: "512GB SSD NVMe M.2 PCIe" },
      { label: "Formato", value: "Mini PC · hasta 5.2 GHz" },
    ],
    highlights: ["20 núcleos", "Ultra compacta", "Factura NCF"],
  },
  {
    slug: "hp-victus-15",
    name: "HP Victus 15",
    brand: "HP",
    category: "laptops",
    categoryLabel: "Laptop Gaming",
    price: 68000,
    oldPrice: 74000,
    image: "/images/products/hp-victus-15/imgi_3_Hero-Image-3.webp",
    images: [
      "/images/products/hp-victus-15/imgi_3_Hero-Image-3.webp",
      "/images/products/hp-victus-15/imgi_2_Hero-Image-2.webp",
      "/images/products/hp-victus-15/imgi_1_Hero-Image-1.webp",
      "/images/products/hp-victus-15/imgi_4_Hero-Image-4.webp",
    ],
    stock: "Quedan 6",
    tagline: "Rendimiento equilibrado para jugar y crear.",
    specs: [
      { label: "Procesador", value: "Intel Core i5-13420H" },
      { label: "Gráficos", value: "NVIDIA RTX 3050 6GB" },
      { label: "Memoria", value: "16GB DDR4" },
      { label: "Almacenamiento", value: "512GB SSD NVMe" },
      { label: "Pantalla", value: "15.6'' FHD 144Hz" },
    ],
    highlights: ["RTX 3050", "144 Hz", "16GB RAM"],
  },
];

// Maps a spec label to the same icon language fismrd uses:
// microchip = CPU, gpu/tv = graphics, memory = RAM, hardDrive = storage,
// display = screen. Falls back to a chip icon.
export function specIcon(
  label: string
):
  | "microchip"
  | "gpu"
  | "memory"
  | "hardDrive"
  | "display"
  | "desktop"
  | "bolt" {
  const l = label.toLowerCase();
  if (l.includes("procesador") || l.includes("cpu")) return "microchip";
  if (l.includes("gráfico") || l.includes("grafico") || l.includes("gpu"))
    return "gpu";
  if (l.includes("memoria") || l.includes("ram")) return "memory";
  if (l.includes("almacen") || l.includes("ssd") || l.includes("disco"))
    return "hardDrive";
  if (l.includes("pantalla") || l.includes("display")) return "display";
  if (l.includes("formato") || l.includes("mini")) return "desktop";
  return "bolt";
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatRD(n: number) {
  return "RD$ " + n.toLocaleString("es-DO");
}
