interface LogoProps {
  className?: string;
  color?: string;
  showTagline?: boolean;
}

export default function Logo({ className = '', color = '#1C1C1C', showTagline = false }: LogoProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Crescent moon icon */}
        <path
          d="M20 4C13.373 4 8 9.373 8 16s5.373 12 12 12c2.12 0 4.12-.55 5.86-1.52A10 10 0 0 1 14 16a10 10 0 0 1 11.86-9.84C24.28 4.68 22.2 4 20 4z"
          fill={color}
          opacity="0.9"
        />
        {/* Small star */}
        <circle cx="30" cy="8" r="1.5" fill={color} opacity="0.6" />
        <circle cx="33" cy="12" r="1" fill={color} opacity="0.4" />
        {/* Text: LUNA BIJOUX */}
        <text x="44" y="15" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="16" fontWeight="600" letterSpacing="3" fill={color}>
          LUNA
        </text>
        <text x="44" y="31" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="16" fontWeight="300" letterSpacing="5" fill={color}>
          BIJOUX
        </text>
      </svg>
      {showTagline && (
        <span
          className="mt-2 text-[10px] tracking-[0.3em] uppercase"
          style={{ color, opacity: 0.6 }}
        >
          Timeless Elegance
        </span>
      )}
    </div>
  );
}
