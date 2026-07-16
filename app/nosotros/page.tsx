import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Icon, { type IconName } from "@/components/Icon";
import { site } from "@/lib/site";
import WhatsAppButton from "@/components/WhatsAppButton";
import { locations } from "@/data/locations";
import styles from "./nosotros.module.css";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "En Guiatechnology vendemos crecimiento a través de tecnología de calidad, con asesoría experta y un servicio excepcional.",
};

const values: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "shield",
    title: "Garantía que se cumple",
    text: "1 año de garantía real en cada equipo, respaldada por técnicos propios.",
  },
  {
    icon: "headset",
    title: "Asesoría honesta",
    text: "Te recomendamos según tu uso y presupuesto, no según lo que queremos vender.",
  },
  {
    icon: "check",
    title: "Sellado y original",
    text: "Equipos nuevos, sellados y con factura NCF para tu tranquilidad.",
  },
  {
    icon: "truck",
    title: "Envíos a todo el país",
    text: "Coordinamos entrega a cualquier provincia con seguimiento.",
  },
];

const steps = [
  { n: "01", title: "Cuéntanos qué buscas", text: "Uso, marca preferida y presupuesto por WhatsApp." },
  { n: "02", title: "Te recomendamos", text: "Comparamos opciones y te pasamos el precio final sin vueltas." },
  { n: "03", title: "Apartamos y entregamos", text: "Reservamos tu equipo hoy y coordinamos envío o retiro en tienda." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Tecnología de calidad, servicio de verdad"
        subtitle="En Guiatechnology vendemos crecimiento a través de tecnología de calidad, con asesoría experta y un servicio excepcional. Más de 50,000 clientes ya confían en nosotros."
        crumb="Nosotros"
      />

      <section className="section-tight container">
        <div className={styles.statRow}>
          {[
            { n: site.clients, l: "Clientes atendidos" },
            { n: `${site.rating}★`, l: "Valoración en Google" },
            { n: "2", l: "Sucursales en Santo Domingo" },
            { n: "1 año", l: "De garantía real" },
          ].map((s) => (
            <div key={s.l} className={styles.stat}>
              <span className={`mono ${styles.statNum}`}>{s.n}</span>
              <span className="text-sm text-soft">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight container">
        <div className="sec-head">
          <span className="eyebrow">Lo que nos mueve</span>
          <h2 className="text-h1">Nuestros valores</h2>
        </div>
        <div className="grid cols-4">
          {values.map((v) => (
            <div key={v.title} className={`card ${styles.value}`}>
              <span className="icon-tile">
                <Icon name={v.icon} size={22} />
              </span>
              <strong>{v.title}</strong>
              <p className="text-sm text-soft">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight container">
        <div className="sec-head">
          <span className="eyebrow">Cómo compras con nosotros</span>
          <h2 className="text-h1">Simple, rápido y sin compromiso</h2>
        </div>
        <div className="grid cols-3">
          {steps.map((s) => (
            <div key={s.n} className={styles.step}>
              <span className={`mono ${styles.stepNum}`}>{s.n}</span>
              <h3 className="text-h3">{s.title}</h3>
              <p className="text-soft text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight container">
        <div className={styles.locBand}>
          <div>
            <span className="eyebrow">Dónde estamos</span>
            <h2 className="text-h2">Dos sucursales para atenderte mejor</h2>
            <ul className={styles.locList}>
              {locations.map((l) => (
                <li key={l.slug}>
                  <Icon name="mapPin" size={16} />
                  <span>
                    <strong>{l.name.replace("Sucursal ", "")}</strong> — {l.address}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.locActions}>
            <Link href="/contacto" className="btn btn-brand">
              Ver ubicaciones
              <Icon name="arrowRight" size={18} />
            </Link>
            <WhatsAppButton className="btn btn-wa" label="Escríbenos" />
          </div>
        </div>
      </section>
    </>
  );
}
