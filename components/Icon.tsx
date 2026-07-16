import type { SVGProps } from "react";

type IconName =
  | "laptop"
  | "desktop"
  | "printer"
  | "briefcase"
  | "monitor"
  | "mouse"
  | "whatsapp"
  | "shield"
  | "headset"
  | "truck"
  | "layers"
  | "star"
  | "mapPin"
  | "phone"
  | "mail"
  | "clock"
  | "instagram"
  | "facebook"
  | "arrowRight"
  | "menu"
  | "x"
  | "check"
  | "sparkles"
  | "cpu"
  | "microchip"
  | "memory"
  | "hardDrive"
  | "gpu"
  | "display"
  | "play"
  | "pause"
  | "bolt";

const paths: Record<IconName, React.ReactNode> = {
  laptop: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M2 20h20" />
    </>
  ),
  desktop: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  printer: (
    <>
      <path d="M6 9V3h12v6" />
      <rect x="4" y="9" width="16" height="8" rx="2" />
      <path d="M8 17h8v4H8z" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  mouse: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="6" />
      <path d="M12 7v4" />
    </>
  ),
  whatsapp: (
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1-1.4-1-2.6 0-1.3.7-1.9.9-2.1.2-.3.5-.3.7-.3h.5c.2 0 .4-.1.7.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.6.1.3.7 1.1 1.5 1.8 1 .9 1.8 1.1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.6-.1 1.2Z" />
  ),
  shield: <path d="M12 2 4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3Z" />,
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2" y="13" width="4" height="7" rx="1.5" />
      <rect x="18" y="13" width="4" height="7" rx="1.5" />
      <path d="M20 20a4 4 0 0 1-4 3h-2" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h11v9H2zM13 9h5l3 3v3h-8z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5M3 18l9 5 9-5" />
    </>
  ),
  star: (
    <path d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.1l1-5.8L3.5 9.2l5.9-.9L12 3Z" />
  ),
  mapPin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14 8h2V5h-2a4 4 0 0 0-4 4v2H8v3h2v7h3v-7h2.5l.5-3H13V9a1 1 0 0 1 1-1Z" />
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="M20 6 9 17l-5-5" />,
  sparkles: (
    <path d="M12 3l1.9 4.6L18.5 9l-4.6 1.4L12 15l-1.9-4.6L5.5 9l4.6-1.4L12 3ZM19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z" />
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  microchip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3" />
    </>
  ),
  memory: (
    <>
      <path d="M3 8h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v2h-3v-2H9v2H6v-2H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <path d="M7 11v2M11 11v2M15 11v2M19 11v2" />
    </>
  ),
  hardDrive: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
      <circle cx="16.5" cy="12" r="2.4" />
      <path d="M6 12h5" />
    </>
  ),
  gpu: (
    <>
      <rect x="2" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
      <circle cx="8.5" cy="10" r="2" />
      <path d="M14 8h4M14 12h4" />
    </>
  ),
  display: (
    <>
      <rect x="2" y="3" width="20" height="13" rx="2" />
      <path d="M8 20h8M9 16l-.5 4M15 16l.5 4" />
    </>
  ),
  play: <path d="M7 4v16l13-8L7 4Z" />,
  pause: (
    <>
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </>
  ),
};

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export default function Icon({ name, size = 20, ...rest }: Props) {
  const filled =
    name === "whatsapp" ||
    name === "shield" ||
    name === "facebook" ||
    name === "play" ||
    name === "pause";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.9}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
