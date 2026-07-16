"use client";
import { useState } from "react";
import styles from "./ProductGallery.module.css";

type Props = {
  name: string;
  image: string;
  images?: string[];
  badge?: string;
  off?: number;
};

export default function ProductGallery({ name, image, images, badge, off }: Props) {
  const all = images && images.length > 1 ? images : [image];
  const [active, setActive] = useState(0);

  return (
    <div className={styles.gallery}>
      <div className={styles.stage}>
        <div className={styles.badges}>
          {badge && <span className="badge badge-brand">{badge}</span>}
          {off && off > 0 ? <span className="badge badge-off">-{off}%</span> : null}
        </div>
        <img
          src={all[active]}
          alt={`${name} — imagen ${active + 1}`}
          className={styles.mainImg}
        />
      </div>

      {all.length > 1 && (
        <div className={styles.thumbs}>
          {all.map((src, i) => (
            <button
              key={src}
              className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Ver imagen ${i + 1}`}
              aria-current={i === active}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
