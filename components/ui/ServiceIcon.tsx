import type { Service } from "@/types";

const common = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ServiceIcon({ icon, className = "" }: { icon: Service["icon"]; className?: string }) {
  switch (icon) {
    case "cabinet":
      return (
        <svg {...common} className={className}>
          <rect x="4" y="2" width="16" height="20" rx="0.5" />
          <line x1="12" y1="2" x2="12" y2="22" />
          <circle cx="10" cy="12" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="14" cy="12" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "factory":
      return (
        <svg {...common} className={className}>
          <path d="M3 21V10l5 3v-3l5 3v-3l5 3v9H3Z" />
          <line x1="3" y1="21" x2="21" y2="21" />
        </svg>
      );
    case "cut":
      return (
        <svg {...common} className={className}>
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="6" cy="18" r="2.2" />
          <line x1="20" y1="4" x2="7.6" y2="16.4" />
          <line x1="8.4" y1="7.6" x2="20" y2="20" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common} className={className}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2 2.7-2.7Z" />
        </svg>
      );
    case "leg":
      return (
        <svg {...common} className={className}>
          <rect x="7" y="2" width="10" height="7" rx="0.5" />
          <line x1="9" y1="9" x2="9" y2="22" />
          <line x1="15" y1="9" x2="15" y2="22" />
        </svg>
      );
    case "spray":
      return (
        <svg {...common} className={className}>
          <path d="M6 10h9l4-3v9l-4-3H6a2 2 0 0 1-2-2v0a2 2 0 0 1 2-1Z" />
          <line x1="2" y1="6" x2="2" y2="6.01" />
          <line x1="2" y1="10" x2="2" y2="10.01" />
          <line x1="2" y1="14" x2="2" y2="14.01" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common} className={className}>
          <rect x="4.5" y="10.5" width="15" height="10" rx="1" />
          <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
        </svg>
      );
    default:
      return null;
  }
}
