import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
import { locations } from "@/data/locations";
import styles from "./contacto.module.css";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Visítanos en nuestras sucursales de Villa Mella y San Vicente, o escríbenos por WhatsApp. Estamos para ayudarte a elegir tu equipo.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu próximo equipo"
        subtitle="Escríbenos por WhatsApp, llámanos o visítanos en cualquiera de nuestras dos sucursales en Santo Domingo."
        crumb="Contacto"
      />

      <section className="section-tight container">
        <div className={styles.layout}>
          {/* Locations */}
          <div className={styles.locations}>
            {locations.map((l) => (
              <div key={l.slug} className={`card ${styles.locCard}`}>
                <div className={styles.locHead}>
                  <span className="icon-tile">
                    <Icon name="mapPin" size={22} />
                  </span>
                  <div>
                    <h2 className="text-h3">{l.name}</h2>
                    <p className="text-sm text-soft">{l.address}</p>
                  </div>
                </div>

                <ul className={styles.details}>
                  <li>
                    <Icon name="phone" size={16} />
                    <a href={`tel:${l.phoneRaw}`}>{l.phone}</a>
                  </li>
                  <li>
                    <Icon name="mail" size={16} />
                    <a href={`mailto:${l.email}`}>{l.email}</a>
                  </li>
                  <li>
                    <Icon name="clock" size={16} />
                    <span>
                      {l.hours.map((h) => (
                        <span key={h.days} className={styles.hourRow}>
                          <b>{h.days}:</b> {h.time}
                        </span>
                      ))}
                    </span>
                  </li>
                </ul>

                <div className={styles.map}>
                  <iframe
                    title={`Mapa ${l.name}`}
                    src={`https://www.google.com/maps?q=${l.mapQuery}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  className="btn btn-wa btn-sm full"
                  href={`https://wa.me/${l.whatsapp}?text=${encodeURIComponent(
                    "Hola, quiero información sobre un equipo (" + l.name + ")."
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

          {/* Form */}
          <aside className={styles.formCol}>
            <div className={`card ${styles.formCard}`}>
              <span className="eyebrow">Cuéntanos qué buscas</span>
              <h2 className="text-h3">Te ayudamos a elegir</h2>
              <p className="text-sm text-soft">
                Completa y te llevamos directo a WhatsApp con tu mensaje listo.
              </p>
              <ContactForm />
            </div>

            <div className={`card ${styles.socialCard}`}>
              <strong>Síguenos</strong>
              <div className={styles.social}>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                  <Icon name="instagram" size={18} /> Instagram
                </a>
                <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                  <Icon name="facebook" size={18} /> Facebook
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
