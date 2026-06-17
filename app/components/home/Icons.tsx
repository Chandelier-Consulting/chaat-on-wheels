type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ChiliIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} {...base}>
      <path d="M12,3 L12,5" />
      <path d="M12,5 C16,7 17,13 14,17 C12.5,19 10,19.5 8.5,18 C10,16 11,13.5 10,10 C9.3,7.5 10,6 12,5 Z" />
    </svg>
  );
}

export function LeafIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} {...base}>
      <path d="M12,3 C15,3 17.5,6.5 17.5,11 C17.5,16 15,20 12,21 C9,20 6.5,16 6.5,11 C6.5,6.5 9,3 12,3 Z" />
      <path d="M12,5 L12,19" />
      <path d="M12,9 L9,7.5" />
      <path d="M12,9 L15,7.5" />
      <path d="M12,14 L9,12.5" />
      <path d="M12,14 L15,12.5" />
    </svg>
  );
}

export function CupIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} {...base}>
      <path d="M7,9 L17,9 L15,21 L9,21 Z" />
      <path d="M8,11 L16,11" />
      <path d="M9,7 C8,5 10,4 9,2" />
      <path d="M14,7 C13,5 15,4 14,2" />
    </svg>
  );
}

export function SamosaIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} {...base}>
      <path d="M12,2 C16,8 18,14 16,19 C15,21 9,21 8,19 C6,14 8,8 12,2 Z" />
      <path d="M12,5 C14,9 14,14 11,18" />
    </svg>
  );
}
