/**
 * Centralised SVG icon components.
 * Each icon accepts standard SVG props so callers control sizing & colour
 * via className (e.g. "w-7 h-7 text-white").
 */

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const BASE_SVG_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
} satisfies Partial<IconProps>;

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...BASE_SVG_PROPS} {...props}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...BASE_SVG_PROPS} {...props}>
      <path d="M4 21V5l8-2v18" />
      <path d="M12 9h8v12" />
      <path d="M8 8h1M8 12h1M8 16h1M15 13h1M15 17h1" />
    </svg>
  );
}

export function CertificateIcon(props: IconProps) {
  return (
    <svg {...BASE_SVG_PROPS} {...props}>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L8 21l4-2 4 2-1-7.5" />
    </svg>
  );
}

export function PersonIcon(props: IconProps) {
  return (
    <svg {...BASE_SVG_PROPS} {...props}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    </svg>
  );
}

export function HousekeepingIcon(props: IconProps) {
  return (
    <svg {...BASE_SVG_PROPS} {...props}>
      <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 15h18" />
      <path d="M7 9V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

export function RestaurantIcon(props: IconProps) {
  return (
    <svg {...BASE_SVG_PROPS} {...props}>
      <path d="M6 3v7a2 2 0 0 0 2 2v9" />
      <path d="M10 3v7" />
      <path d="M17 3c-2 1.5-3 4-3 7h3v11" />
    </svg>
  );
}

export function CoffeeIcon(props: IconProps) {
  return (
    <svg {...BASE_SVG_PROPS} {...props}>
      <path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
      <path d="M16 10h2a2.5 2.5 0 0 1 0 5h-2" />
      <path d="M8 3v2M12 3v2" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg {...BASE_SVG_PROPS} {...props}>
      <path d="M4 5h16v11H9l-5 4z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...BASE_SVG_PROPS} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function CheckmarkIcon(props: IconProps) {
  return (
    <svg {...BASE_SVG_PROPS} strokeWidth={3} {...props}>
      <path d="M5 12l4 4 10-10" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...BASE_SVG_PROPS} {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...BASE_SVG_PROPS} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...BASE_SVG_PROPS} {...props}>
      <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
