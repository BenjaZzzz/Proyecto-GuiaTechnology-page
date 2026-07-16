import Image from "next/image";
import Link from "next/link";
import { type Product, formatRD, specIcon } from "@/data/products";
import { waLink } from "@/lib/site";
import Icon from "./Icon";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  const off =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round((1 - product.price / product.oldPrice) * 100)
      : 0;

  return (
    <article className={`card card-hover ${styles.card}`}>
      <Link href={`/producto/${product.slug}`} className={styles.media}>
        <Image
          src={product.image}
          alt={product.name}
          width={900}
          height={600}
          className={styles.img}
          sizes="(max-width: 640px) 100vw, 300px"
        />
        <div className={styles.badges}>
          {product.badge && (
            <span className="badge badge-brand">{product.badge}</span>
          )}
          {off > 0 && <span className="badge badge-off">-{off}%</span>}
        </div>
      </Link>

      <div className={styles.body}>
        <span className={styles.brand}>{product.categoryLabel}</span>
        <Link href={`/producto/${product.slug}`} className={styles.name}>
          {product.name}
        </Link>

        <ul className={styles.specs}>
          {product.specs.slice(0, 3).map((s) => (
            <li key={s.label} title={`${s.label}: ${s.value}`}>
              <Icon name={specIcon(s.label)} size={14} />
              <span>{s.value}</span>
            </li>
          ))}
        </ul>

        <div className={styles.priceRow}>
          <div>
            <span className={`mono ${styles.price}`}>
              {formatRD(product.price)}
            </span>
            {product.oldPrice && (
              <span className={`mono ${styles.old}`}>
                {formatRD(product.oldPrice)}
              </span>
            )}
          </div>
          <span className={styles.stock}>{product.stock}</span>
        </div>

        <div className={styles.actions}>
          <a
            className="btn btn-wa btn-sm full"
            href={waLink(
              `Hola, me interesa la ${product.name}. ¿Está disponible?`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={16} />
            Pedir por WhatsApp
          </a>
          <Link
            className="btn btn-ghost btn-sm"
            href={`/producto/${product.slug}`}
            aria-label={`Ver detalle de ${product.name}`}
          >
            Detalle
          </Link>
        </div>
      </div>
    </article>
  );
}
