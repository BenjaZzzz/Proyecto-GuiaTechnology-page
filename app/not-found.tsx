import Link from "next/link";
import Icon from "@/components/Icon";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <section
      className="container"
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "1rem",
        paddingTop: "calc(var(--nav-h) + 2rem)",
      }}
    >
      <span className="eyebrow">Error 404</span>
      <h1 className="text-hero text-balance">Esta página se agotó</h1>
      <p className="text-body text-soft" style={{ maxWidth: "44ch" }}>
        El enlace que buscas no existe o cambió de lugar. Vuelve al inicio o
        escríbenos y te ayudamos a encontrar tu equipo.
      </p>
      <div className="flex gap-3 wrap justify-center" style={{ marginTop: "0.5rem" }}>
        <Link href="/" className="btn btn-brand">
          Volver al inicio
          <Icon name="arrowRight" size={18} />
        </Link>
        <WhatsAppButton className="btn btn-wa" label="Escríbenos" />
      </div>
    </section>
  );
}
