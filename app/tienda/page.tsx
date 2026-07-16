import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TiendaClient from "@/components/TiendaClient";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Catálogo completo de laptops, computadoras, impresoras y accesorios. Filtra por categoría y encuentra tu equipo ideal.",
};

export default function TiendaPage() {
  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Nuestra tienda"
        subtitle="Equipos sellados y originales, con garantía de 1 año y factura NCF. Filtra por categoría o busca por marca y modelo."
        crumb="Tienda"
      />
      <Suspense fallback={null}>
        <TiendaClient />
      </Suspense>
    </>
  );
}
