"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import Icon from "./Icon";
import LogoMark from "./LogoMark";
import WhatsAppButton from "./WhatsAppButton";
import styles from "./NavIsland.module.css";

export default function NavIsland() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className={`${styles.island} ${scrolled ? styles.scrolled : ""}`}>
        <Link href="/" className={styles.brand} aria-label={site.name}>
          <LogoMark height={40} priority />
        </Link>

        <div className={styles.links}>
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.link} ${isActive(item.href) ? styles.active : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <WhatsAppButton className={styles.wa} ariaLabel="WhatsApp">
            <Icon name="whatsapp" size={18} />
            <span className={styles.waLabel}>WhatsApp</span>
          </WhatsAppButton>
          <button
            className={styles.toggle}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "x" : "menu"} size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        <div className={styles.drawerLinks}>
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.drawerLink} ${isActive(item.href) ? styles.active : ""}`}
            >
              {item.label}
              <Icon name="arrowRight" size={18} />
            </Link>
          ))}
        </div>
        <WhatsAppButton
          className="btn btn-wa full"
          label="Escríbenos por WhatsApp"
          onOpen={() => setOpen(false)}
        />
      </aside>
    </>
  );
}
