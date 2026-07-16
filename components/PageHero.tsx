import Link from "next/link";
import Icon from "./Icon";
import styles from "./PageHero.module.css";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <header className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <nav className={styles.crumbs} aria-label="Ruta de navegación">
          <Link href="/">Inicio</Link>
          <Icon name="arrowRight" size={13} />
          <span>{crumb}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="text-h1">{title}</h1>
        {subtitle && <p className={`text-body text-soft ${styles.sub}`}>{subtitle}</p>}
      </div>
    </header>
  );
}
