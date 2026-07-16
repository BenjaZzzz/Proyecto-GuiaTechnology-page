import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import NavIsland from "@/components/NavIsland";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "laptops República Dominicana",
    "computadoras Santo Domingo",
    "laptops gaming",
    "Guiatechnology",
    "impresoras",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "es_DO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${jetbrains.variable}`}>
      <body>
        <NavIsland />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
