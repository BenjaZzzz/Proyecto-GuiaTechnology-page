import Link from "next/link";
import { site, waLink } from "@/lib/site";
import LogoMark from "./LogoMark";
import { categories } from "@/data/categories";
import { locations } from "@/data/locations";
import Icon from "./Icon";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand} aria-label={site.name}>
              <LogoMark height={46} />
            </Link>
            <p className="text-soft text-sm">
              Vendemos crecimiento a través de tecnología de calidad, con
              asesoría experta y un servicio excepcional. Más de {site.clients}{" "}
              clientes confían en nosotros.
            </p>
            <div className={styles.social}>
              <a
                href={site.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="instagram" size={18} />
              </a>
              <a
                href={site.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="facebook" size={18} />
              </a>
              <a
                href={waLink()}
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={18} />
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Categorías</h4>
            <ul>
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/tienda?cat=${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Guiatechnology</h4>
            <ul>
              <li>
                <Link href="/tienda">Tienda</Link>
              </li>
              <li>
                <Link href="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link href="/garantias">Garantías</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Sucursales</h4>
            <ul className={styles.locations}>
              {locations.map((l) => (
                <li key={l.slug}>
                  <span className={styles.locName}>
                    <Icon name="mapPin" size={14} /> {l.name.replace("Sucursal ", "")}
                  </span>
                  <a href={`tel:${l.phoneRaw}`}>{l.phone}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {new Date().getFullYear()} {site.legal}. Todos los derechos
            reservados.
          </span>
          <span className={styles.rating}>
            <Icon name="star" size={14} /> {site.rating} · {site.reviews}{" "}
            reseñas reales en Google
          </span>
        </div>
      </div>
    </footer>
  );
}
