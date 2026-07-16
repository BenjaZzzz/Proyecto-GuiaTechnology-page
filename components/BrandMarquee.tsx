import styles from "./BrandMarquee.module.css";

type Brand = { name: string; slug: string };

const brands: Brand[] = [
  { name: "ASUS", slug: "asus" },
  { name: "MSI", slug: "msi" },
  { name: "Dell", slug: "dell" },
  { name: "Lenovo", slug: "lenovo" },
  { name: "HP", slug: "hp" },
  { name: "Acer", slug: "acer" },
  { name: "Intel", slug: "intel" },
  { name: "NVIDIA", slug: "nvidia" },
  { name: "AMD Ryzen", slug: "amd" },
  { name: "Razer", slug: "razer" },
  { name: "Samsung", slug: "samsung" },
];

export default function BrandMarquee() {
  return (
    <section className={styles.marquee} aria-label="Marcas que trabajamos">
      <div className={styles.track}>
        {[...brands, ...brands].map((b, i) => (
          <span
            key={i}
            className={styles.item}
            aria-hidden={i >= brands.length}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/brands/${b.slug}.svg`}
              alt=""
              className={styles.logo}
              width={26}
              height={26}
              loading="lazy"
            />
            <span className={styles.name}>{b.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
