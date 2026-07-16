import Image from "next/image";
import styles from "./LogoMark.module.css";

type Props = { height?: number; priority?: boolean };

export default function LogoMark({ height = 40, priority = false }: Props) {
  const fs = Math.round(height * 0.42);

  return (
    <span className={styles.mark}>
      <Image
        src="/logo-icon.png"
        alt=""
        width={height}
        height={height}
        className={styles.icon}
        priority={priority}
      />
      <span className={styles.wordmark} style={{ fontSize: fs }}>
        <span className={styles.wDark}>Guia</span>
        <span className={styles.wBlue}>technology</span>
      </span>
    </span>
  );
}
