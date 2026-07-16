import Link from "next/link";
import { site } from "@/lib/site";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { testimonials } from "@/data/testimonials";
import { locations } from "@/data/locations";
import Icon, { type IconName } from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import HeroCarousel from "@/components/HeroCarousel";
import BrandMarquee from "@/components/BrandMarquee";
import styles from "./page.module.css";

const trust: { icon: IconName; title: string; text: string }[] = [
  { icon: "shield", title: "Garantía de 1 año", text: "En todas nuestras laptops y equipos." },
  { icon: "headset", title: "Servicio personalizado", text: "Técnicos propios y asesoría real." },
  { icon: "truck", title: "Envíos a todo el país", text: "Rápido y con seguimiento." },
  { icon: "layers", title: "Gran gama de equipos", text: "Sellados, originales y con factura NCF." },
];

const catIcon: Record<string, IconName> = {
  laptop: "laptop",
  desktop: "desktop",
  printer: "printer",
  briefcase: "briefcase",
  monitor: "monitor",
  mouse: "mouse",
};

export default function HomePage() {
  const featured = products.filter((p) => p.category === "laptops").slice(0, 4);
  const carousel = [
    products.find((p) => p.badge === "Tope de gama"),
    products.find((p) => p.badge === "Más vendida"),
    products.find((p) => p.badge === "Nuevo"),
    products.find((p) => p.slug === "dell-optiplex-mini-pc"),
  ].filter((p): p is (typeof products)[number] => Boolean(p));

  return (
    <>
      {/* ---------- HERO CAROUSEL (full screen) ---------- */}
      <HeroCarousel items={carousel} />

      {/* ---------- BRAND MARQUEE ---------- */}
      <BrandMarquee />

      {/* ---------- TRUST BAR ---------- */}
      <section className="container">
        <div className={styles.trustBar}>
          {trust.map((t) => (
            <div key={t.title} className={styles.trustItem}>
              <span className="icon-tile">
                <Icon name={t.icon} size={22} />
              </span>
              <div>
                <strong>{t.title}</strong>
                <p className="text-sm text-soft">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CATEGORIES ---------- */}
      <section className="section container">
        <div className="sec-head">
          <span className="eyebrow">Explora por categoría</span>
          <h2 className="text-h1">Encuentra justo lo que necesitas</h2>
          <p className="text-soft text-body">
            Desde gaming de alto rendimiento hasta soluciones para tu negocio.
          </p>
        </div>
        <div className={styles.catGrid}>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/tienda?cat=${c.slug}`}
              className={`card card-hover ${styles.catCard}`}
            >
              <span className="icon-tile">
                <Icon name={catIcon[c.icon] ?? "layers"} size={22} />
              </span>
              <div className={styles.catText}>
                <strong>{c.name}</strong>
                <span className="text-sm text-soft">{c.blurb}</span>
              </div>
              <span className={styles.catCount}>{c.count}+</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- FEATURED PRODUCTS ---------- */}
      <section className="section-tight container">
        <div className="sec-head">
          <span className="eyebrow">Lo que más se lleva la gente</span>
          <div className={styles.headRow}>
            <h2 className="text-h1">Laptops gaming destacadas</h2>
            <Link href="/tienda" className="btn btn-ghost btn-sm">
              Ver todas
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
        <div className="grid cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* ---------- STAT BAND ---------- */}
      <section className="container">
        <div className={styles.statBand}>
          <div className={styles.statGlow} aria-hidden="true" />
          <div className={styles.statContent}>
            <h2 className="text-h1">
              Más de {site.clients} clientes confían en nosotros
            </h2>
            <p className="text-body">
              para adquirir sus equipos tecnológicos. Precios reales, garantía
              que se cumple y un equipo que te acompaña antes y después de tu
              compra.
            </p>
          </div>
          <div className={styles.stats}>
            {[
              { n: site.clients, l: "Clientes" },
              { n: `${site.rating}★`, l: "Valoración Google" },
              { n: "2", l: "Sucursales" },
              { n: "1 año", l: "Garantía" },
            ].map((s) => (
              <div key={s.l} className={styles.statItem}>
                <span className={`mono ${styles.statNum}`}>{s.n}</span>
                <span className="text-sm">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="section container">
        <div className="sec-head center">
          <span className="eyebrow">Lo que dicen quienes ya compraron</span>
          <h2 className="text-h1 text-balance">
            Estudiantes, profesionales y gamers que confiaron
          </h2>
        </div>
        <div className="grid cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className={`card ${styles.review}`}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" size={16} />
                ))}
              </div>
              <blockquote className="text-body">“{t.text}”</blockquote>
              <figcaption className={styles.reviewer}>
                <span className={styles.avatar}>{t.initial}</span>
                <span>
                  <strong>{t.name}</strong>
                  <span className="text-sm text-soft">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------- LOCATIONS ---------- */}
      <section className="section-tight container">
        <div className="sec-head">
          <span className="eyebrow">Visítanos</span>
          <h2 className="text-h1">Dos sucursales para atenderte</h2>
        </div>
        <div className="grid cols-2">
          {locations.map((l) => (
            <div key={l.slug} className={`card ${styles.locCard}`}>
              <div className={styles.locHead}>
                <span className="icon-tile">
                  <Icon name="mapPin" size={22} />
                </span>
                <div>
                  <strong>{l.name}</strong>
                  <p className="text-sm text-soft">{l.address}</p>
                </div>
              </div>
              <div className={styles.locMeta}>
                <a href={`tel:${l.phoneRaw}`} className="chip">
                  <Icon name="phone" size={14} /> {l.phone}
                </a>
                <span className="chip">
                  <Icon name="clock" size={14} /> {l.hours[0].time}
                </span>
              </div>
              <a
                className="btn btn-wa btn-sm full"
                href={`https://wa.me/${l.whatsapp}?text=${encodeURIComponent(
                  "Hola, quiero visitar la " + l.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={16} />
                Escribir a esta sucursal
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="container">
        <div className={styles.cta}>
          <div className={styles.ctaGlow} aria-hidden="true" />
          <span className="eyebrow" style={{ color: "#bfe6ff" }}>
            Sin compromiso y sin vueltas
          </span>
          <h2 className="text-hero text-balance">
            Tu próximo equipo está a un mensaje de distancia
          </h2>
          <p className={styles.ctaSub}>
            Dinos qué buscas y tu presupuesto. Te recomendamos el equipo ideal,
            te pasamos el precio final y te lo apartamos hoy.
          </p>
          <div className={styles.ctaButtons}>
            <WhatsAppButton
              className="btn btn-wa btn-lg"
              label="Pedir por WhatsApp"
            />
            <Link href="/tienda" className={`btn btn-lg ${styles.ctaGhost}`}>
              Explorar catálogo
              <Icon name="arrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

