"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { locations } from "@/data/locations";
import { site } from "@/lib/site";
import Icon from "./Icon";
import styles from "./WhatsAppButton.module.css";

type Props = {
  /** Mensaje que se prellenará en WhatsApp. */
  message?: string;
  /** Clases del botón disparador (por defecto el estilo WhatsApp). */
  className?: string;
  /** Tamaño del icono del botón disparador. */
  iconSize?: number;
  /** Texto del botón. Ignorado si se pasan `children`. */
  label?: ReactNode;
  /** Contenido personalizado del botón (reemplaza icono + label). */
  children?: ReactNode;
  /** Etiqueta accesible cuando el botón no tiene texto visible. */
  ariaLabel?: string;
  /** Callback opcional al abrir el selector (p. ej. cerrar un menú). */
  onOpen?: () => void;
};

export default function WhatsAppButton({
  message,
  className = "btn btn-wa",
  iconSize = 18,
  label = "WhatsApp",
  children,
  ariaLabel,
  onOpen,
}: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const msg = encodeURIComponent(message ?? site.whatsappMsg);

  const openModal = () => {
    onOpen?.();
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={openModal}
        aria-label={ariaLabel}
      >
        {children ?? (
          <>
            <Icon name="whatsapp" size={iconSize} />
            {label}
          </>
        )}
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            className={styles.overlay}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Selecciona una sucursal"
          >
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.close}
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
                type="button"
              >
                <Icon name="x" size={20} />
              </button>

              <div className={styles.head}>
                <span className={styles.headIcon}>
                  <Icon name="whatsapp" size={24} />
                </span>
                <h3 className={styles.title}>
                  ¿Con cuál sucursal quieres hablar?
                </h3>
                <p className={styles.sub}>
                  Elige la más cercana y te atenderemos por WhatsApp.
                </p>
              </div>

              <div className={styles.options}>
                {locations.map((l) => (
                  <a
                    key={l.slug}
                    className={styles.option}
                    href={`https://wa.me/${l.whatsapp}?text=${msg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    <span className={styles.optIcon}>
                      <Icon name="mapPin" size={20} />
                    </span>
                    <span className={styles.optBody}>
                      <strong>{l.name}</strong>
                      <span className={styles.optAddr}>{l.address}</span>
                      <span className={styles.optPhone}>
                        <Icon name="phone" size={13} /> {l.phone}
                      </span>
                    </span>
                    <span className={styles.optGo}>
                      <Icon name="whatsapp" size={18} />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
