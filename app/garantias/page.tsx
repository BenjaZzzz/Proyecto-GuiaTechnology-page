import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Icon, { type IconName } from "@/components/Icon";
import { waLink } from "@/lib/site";
import styles from "./garantias.module.css";

export const metadata: Metadata = {
  title: "Garantías",
  description:
    "Garantía real según tipo de equipo: laptops nuevas 6 meses full + 6 en servicio. Técnicos propios, respuesta en 5 días laborables.",
};

const highlights: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "shield",
    title: "Garantía por tipo de equipo",
    text: "Laptops y CPUs nuevos: 6 meses full + 6 en servicio. Monitores nuevos: 1 año completo.",
  },
  {
    icon: "cpu",
    title: "Técnicos propios",
    text: "Diagnóstico y reparación con nuestro propio equipo técnico, sin intermediarios.",
  },
  {
    icon: "truck",
    title: "Respuesta en 5 días",
    text: "Respondemos tu caso en máximo 5 días laborables y cerramos la resolución en 30 días.",
  },
];

const periods: { label: string; items: { name: string; coverage: string }[] }[] = [
  {
    label: "Equipos Nuevos",
    items: [
      { name: "Laptops", coverage: "6 meses full + 6 en servicio" },
      { name: "CPUs", coverage: "6 meses full + 6 en servicio" },
      { name: "Televisores", coverage: "6 meses full + 6 en servicio" },
      { name: "Impresoras", coverage: "6 meses full + 6 en servicio" },
      { name: "Monitores", coverage: "1 año completo" },
      { name: "Discos SATA / SSD", coverage: "6 meses" },
    ],
  },
  {
    label: "Equipos Usados",
    items: [
      { name: "Laptops", coverage: "3 meses full + 9 en servicio" },
      { name: "CPUs", coverage: "3 meses full" },
      { name: "Monitores", coverage: "1 mes" },
      { name: "Discos", coverage: "1 mes" },
    ],
  },
  {
    label: "Accesorios",
    items: [
      { name: "Cargadores", coverage: "1 mes" },
      { name: "Adaptadores / USB / Audífonos", coverage: "7 días calendario" },
      { name: "Tarjetas madre", coverage: "30 días calendario" },
    ],
  },
];

const covered = [
  "Defectos de fábrica durante uso normal (según manual del fabricante)",
  "Fallas de hardware no provocadas por el usuario",
  "Verificación funcional garantizada al recibir el equipo",
  "Con factura original y caja original (equipos nuevos)",
];

const notCovered = [
  "Sellos removidos o números de serie alterados",
  "Daños por golpes, caídas o daños cosméticos",
  "Daños por líquidos, sobrevoltaje o causas externas",
  "Modificaciones no autorizadas por el fabricante",
  "Factura no presentada al momento de reclamar",
];

const faqs = [
  {
    q: "¿Qué necesito para reclamar mi garantía?",
    a: "Tu factura original (o copia/scan) y la caja original del equipo (para equipos nuevos). Escríbenos por WhatsApp con el número de factura y una descripción del problema.",
  },
  {
    q: "¿Cuánto tiempo tengo para devolver un equipo?",
    a: "Cuentas con 7 días hábiles para devoluciones desde la fecha de compra, siempre que el equipo presente un defecto de origen y conserve su empaque y accesorios originales.",
  },
  {
    q: "¿Cuánto tarda una reparación?",
    a: "Respondemos tu caso en máximo 5 días laborables. La resolución completa toma hasta 30 días posteriores al inicio de la gestión.",
  },
  {
    q: "¿Qué anula mi garantía?",
    a: "La garantía se anula si los sellos están removidos, el número de serie está alterado, hay daños por mal uso (golpes, líquidos, sobrevoltaje), modificaciones no autorizadas, o si no presentas la factura original.",
  },
];

export default function GarantiasPage() {
  return (
    <>
      <PageHero
        eyebrow="Garantías"
        title="Compra con total tranquilidad"
        subtitle="Respaldamos cada equipo con garantía real según su tipo. Aquí te explicamos los períodos, qué cubre y cómo hacerla valer."
        crumb="Garantías"
      />

      {/* Highlights */}
      <section className="section-tight container">
        <div className="grid cols-3">
          {highlights.map((c) => (
            <div key={c.title} className={`card ${styles.cov}`}>
              <span className="icon-tile">
                <Icon name={c.icon} size={22} />
              </span>
              <strong>{c.title}</strong>
              <p className="text-sm text-soft">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Períodos por tipo de equipo */}
      <section className="section-tight container">
        <div className="sec-head">
          <span className="eyebrow">Períodos de cobertura</span>
          <h2 className="text-h1">¿Cuánto cubre tu equipo?</h2>
        </div>
        <div className={styles.periods}>
          {periods.map((group) => (
            <div key={group.label} className={`card ${styles.periodCard}`}>
              <h3 className={styles.periodLabel}>{group.label}</h3>
              <ul className={styles.periodList}>
                {group.items.map((item) => (
                  <li key={item.name} className={styles.periodRow}>
                    <span className={styles.periodName}>{item.name}</span>
                    <span className={styles.periodTime}>{item.coverage}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Qué cubre / qué no cubre */}
      <section className="section-tight container">
        <div className={styles.split}>
          <div className={`card ${styles.list} ${styles.ok}`}>
            <h2 className="text-h3">
              <Icon name="check" size={20} /> Qué cubre
            </h2>
            <ul>
              {covered.map((c) => (
                <li key={c}>
                  <Icon name="check" size={16} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className={`card ${styles.list} ${styles.no}`}>
            <h2 className="text-h3">
              <Icon name="x" size={20} /> Qué no cubre
            </h2>
            <ul>
              {notCovered.map((c) => (
                <li key={c}>
                  <Icon name="x" size={16} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-tight container">
        <div className="sec-head">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="text-h1">Resolvemos tus dudas</h2>
        </div>
        <div className={styles.faqs}>
          {faqs.map((f) => (
            <details key={f.q} className={styles.faq}>
              <summary>
                {f.q}
                <Icon name="arrowRight" size={18} />
              </summary>
              <p className="text-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight container">
        <div className={styles.cta}>
          <div>
            <h2 className="text-h2">¿Tienes un caso de garantía?</h2>
            <p className="text-soft">
              Escríbenos con tu número de factura y te ayudamos enseguida.
            </p>
          </div>
          <a
            className="btn btn-wa btn-lg"
            href={waLink("Hola, tengo una consulta sobre la garantía de mi equipo.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={18} />
            Contactar soporte
          </a>
        </div>
      </section>
    </>
  );
}
