"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import Icon from "./Icon";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [need, setNeed] = useState("Laptop gaming");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola Guiatechnology, soy ${name || "un cliente"}. Busco: ${need}.${
      budget ? ` Presupuesto: ${budget}.` : ""
    } ¿Qué me recomiendan?`;
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="cf-name">Tu nombre</label>
        <input
          id="cf-name"
          type="text"
          placeholder="Ej. Juan Pérez"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-need">¿Qué buscas?</label>
        <select
          id="cf-need"
          value={need}
          onChange={(e) => setNeed(e.target.value)}
        >
          {[
            "Laptop gaming",
            "Laptop para estudiantes",
            "Laptop de oficina",
            "Computadora de escritorio",
            "Impresora",
            "Equipos para mi negocio",
            "Accesorios",
          ].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-budget">Presupuesto (opcional)</label>
        <input
          id="cf-budget"
          type="text"
          placeholder="Ej. RD$ 60,000"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-wa full">
        <Icon name="whatsapp" size={18} />
        Enviar por WhatsApp
      </button>
      <p className={styles.note}>
        Al enviar, abrimos WhatsApp con tu mensaje listo. Sin compromiso.
      </p>
    </form>
  );
}
