"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { type Product, formatRD, specIcon } from "@/data/products";
import { site, waLink } from "@/lib/site";
import Icon from "./Icon";
import styles from "./HeroCarousel.module.css";

const DURATION = 5500; // ms per slide

const trustChips = [
  "Garantía 1 año",
  "Técnicos propios",
  "Factura NCF",
  "Sellado y original",
];

export default function HeroCarousel({ items }: { items: Product[] }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduced(mq.matches);
      if (mq.matches) setPlaying(false);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Fallback timer (covers reduced-motion / background-tab pauses).
  useEffect(() => {
    if (!playing || reduced) return;
    const id = window.setTimeout(
      () => setActive((i) => (i + 1) % items.length),
      DURATION + 500
    );
    return () => window.clearTimeout(id);
  }, [active, playing, reduced, items.length]);

  const go = (i: number) => setActive((i + items.length) % items.length);
  const next = () => go(active + 1);

  return (
    <section
      className={styles.hero}
      aria-roledescription="carrusel"
      aria-label="Equipos destacados"
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.topbar}>
          <span className="eyebrow">{site.name}</span>
          <span className={styles.tagline}>{site.tagline}</span>
        </div>

        <div className={styles.stage}>
          {items.map((p, i) => (
            <article
              key={p.slug}
              className={`${styles.slide} ${i === active ? styles.active : ""}`}
              aria-hidden={i !== active}
            >
              <div className={styles.text}>
                <div className={styles.badges}>
                  <span className="badge badge-brand">
                    {p.badge ?? "Destacado"}
                  </span>
                  <span className={styles.cat}>{p.categoryLabel}</span>
                </div>

                <h1 className={styles.name}>{p.name}</h1>
                <p className={styles.tag}>{p.tagline}</p>

                <ul className={styles.pills}>
                  {p.specs.slice(0, 3).map((s) => (
                    <li key={s.label} className={styles.pill}>
                      <Icon name={specIcon(s.label)} size={15} />
                      <span>{s.value}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.priceRow}>
                  <span className={`mono ${styles.price}`}>
                    {formatRD(p.price)}
                  </span>
                  {p.oldPrice && (
                    <span className={`mono ${styles.old}`}>
                      {formatRD(p.oldPrice)}
                    </span>
                  )}
                </div>

                <div className={styles.ctas}>
                  <a
                    className="btn btn-wa btn-lg"
                    href={waLink(
                      `Hola, me interesa la ${p.name} (${formatRD(
                        p.price
                      )}). ¿Está disponible?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="whatsapp" size={18} />
                    Pedir por WhatsApp
                  </a>
                  <Link
                    href={`/producto/${p.slug}`}
                    className={`btn btn-ghost btn-lg ${styles.ctaGhost}`}
                  >
                    Ver equipo
                    <Icon name="arrowRight" size={18} />
                  </Link>
                </div>
              </div>

              <div className={styles.media}>
                <div className={styles.mediaGlow} aria-hidden="true" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className={styles.img}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.playBtn}
              onClick={() => setPlaying((v) => !v)}
              aria-label={playing ? "Pausar carrusel" : "Reproducir carrusel"}
            >
              <Icon name={playing ? "pause" : "play"} size={14} />
            </button>

            <div className={styles.bars} role="tablist" aria-label="Ir a equipo">
              {items.map((p, i) => (
                <button
                  key={p.slug}
                  type="button"
                  className={`${styles.bar} ${
                    i === active ? styles.barActive : ""
                  }`}
                  onClick={() => go(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Equipo ${i + 1}: ${p.name}`}
                >
                  {i === active && !reduced && (
                    <span
                      key={active}
                      className={styles.fill}
                      style={{
                        animationDuration: `${DURATION}ms`,
                        animationPlayState: playing ? "running" : "paused",
                      }}
                      onAnimationEnd={next}
                    />
                  )}
                  {i === active && reduced && (
                    <span className={styles.fillStatic} />
                  )}
                </button>
              ))}
            </div>

            <span className={styles.counter}>
              <b>{String(active + 1).padStart(2, "0")}</b>
              <i>/</i>
              {String(items.length).padStart(2, "0")}
            </span>
          </div>

          <ul className={styles.trust}>
            {trustChips.map((t) => (
              <li key={t}>
                <Icon name="check" size={14} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
