import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { products, getProduct, formatRD, specIcon } from "@/data/products";
import { site, waLink } from "@/lib/site";
import Icon, { type IconName } from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";
import styles from "./product.module.css";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "Producto no encontrado" };
  return {
    title: p.name,
    description: `${p.name} — ${p.tagline} ${formatRD(p.price)} en Guiatechnology.`,
  };
}

const perks: { icon: IconName; text: string }[] = [
  { icon: "shield", text: "Garantía de 1 año" },
  { icon: "check", text: "Sellado y original" },
  { icon: "truck", text: "Envío a todo el país" },
  { icon: "briefcase", text: "Factura con NCF" },
];

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const off =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round((1 - product.price / product.oldPrice) * 100)
      : 0;

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <div className={styles.top}>
        <div className={styles.glow} aria-hidden="true" />
        <div className={`container ${styles.grid}`}>
          {/* Gallery */}
          <ProductGallery
            name={product.name}
            image={product.image}
            images={product.images}
            badge={product.badge}
            off={off}
          />

          {/* Info */}
          <div className={styles.info}>
            <nav className={styles.crumbs} aria-label="Ruta de navegación">
              <Link href="/">Inicio</Link>
              <Icon name="arrowRight" size={12} />
              <Link href="/tienda">Tienda</Link>
              <Icon name="arrowRight" size={12} />
              <span>{product.brand}</span>
            </nav>

            <span className="eyebrow">{product.categoryLabel}</span>
            <h1 className="text-h1">{product.name}</h1>
            <p className="text-body text-soft">{product.tagline}</p>

            <div className={styles.priceBox}>
              <div className={styles.priceRow}>
                <span className={`mono ${styles.price}`}>
                  {formatRD(product.price)}
                </span>
                {product.oldPrice && (
                  <span className={`mono ${styles.old}`}>
                    {formatRD(product.oldPrice)}
                  </span>
                )}
              </div>
              <span className={styles.stock}>
                <Icon name="bolt" size={14} /> {product.stock}
              </span>
            </div>

            <div className={styles.cta}>
              <a
                className="btn btn-wa btn-lg full"
                href={waLink(
                  `Hola, me interesa la ${product.name} (${formatRD(
                    product.price
                  )}). ¿Sigue disponible?`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={18} />
                Pedir por WhatsApp
              </a>
              <a className="btn btn-ghost btn-lg" href={`tel:${site.whatsapp}`}>
                <Icon name="phone" size={18} />
                Llamar
              </a>
            </div>

            <ul className={styles.perks}>
              {perks.map((p) => (
                <li key={p.text}>
                  <Icon name={p.icon} size={16} />
                  {p.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Specs */}
      <section className="section-tight container">
        <div className={styles.specsWrap}>
          <div className={styles.specsHead}>
            <span className="icon-tile">
              <Icon name="cpu" size={22} />
            </span>
            <div>
              <h2 className="text-h3">Especificaciones técnicas</h2>
              <p className="text-sm text-soft">
                Cada equipo se entrega probado por nuestros técnicos.
              </p>
            </div>
          </div>
          <table className={styles.specsTable}>
            <tbody>
              {product.specs.map((s) => (
                <tr key={s.label}>
                  <th scope="row">
                    <Icon name={specIcon(s.label)} size={17} />
                    {s.label}
                  </th>
                  <td className="mono">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-tight container">
          <div className="sec-head">
            <span className="eyebrow">También te puede interesar</span>
            <h2 className="text-h2">Equipos similares</h2>
          </div>
          <div className="grid cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
