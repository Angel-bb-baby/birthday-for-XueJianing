export function Sun({ className, ...props }) {
  return (
    <svg viewBox="0 0 72 72" fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="36" cy="36" r="12" fill="#E7D7A2" />
      <circle cx="36" cy="36" r="7.5" fill="#F5F1E8" opacity="0.35" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="36"
          y1="36"
          x2="36"
          y2="8"
          stroke="#D49A84"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.7"
          transform={`rotate(${deg} 36 36)`}
        />
      ))}
    </svg>
  )
}

export function Flower({ className, ...props }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M32 12c4.2 7.5 3.6 12.8 0 18-3.6-5.2-4.2-10.5 0-18Z" fill="#D8B2AC" />
      <path d="M32 52c-4.2-7.5-3.6-12.8 0-18 3.6 5.2 4.2 10.5 0 18Z" fill="#D8B2AC" />
      <path d="M12 32c7.5 4.2 12.8 3.6 18 0-5.2-3.6-10.5-4.2-18 0Z" fill="#BAC5B1" />
      <path d="M52 32c-7.5-4.2-12.8-3.6-18 0 5.2 3.6 10.5 4.2 18 0Z" fill="#AAB7A2" />
      <path d="M18 18c7 5 10.5 8.4 11 15.2-6 .2-10.4-3.6-11-15.2Z" fill="#D49A84" opacity="0.85" />
      <path d="M46 46c-7-5-10.5-8.4-11-15.2 6-.2 10.4 3.6 11 15.2Z" fill="#E7D7A2" />
      <circle cx="32" cy="32" r="5.2" fill="#E7D7A2" />
    </svg>
  )
}

export function SmallFlower({ className, ...props }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M20 6c2.4 4.6 2.2 8 0 11.2C17.8 14 18 10.6 20 6Z" fill="#D8B2AC" />
      <path d="M20 34c-2.4-4.6-2.2-8 0-11.2C22.2 26 22 29.6 20 34Z" fill="#D8B2AC" />
      <path d="M6 20c4.6 2.4 8 2.2 11.2 0C14 17.8 10.6 18 6 20Z" fill="#AAB7A2" />
      <path d="M34 20c-4.6-2.4-8-2.2-11.2 0C26 22.2 29.6 22 34 20Z" fill="#BAC5B1" />
      <circle cx="20" cy="20" r="3.4" fill="#E7D7A2" />
    </svg>
  )
}

export function Leaf({ className, ...props }) {
  return (
    <svg viewBox="0 0 36 72" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M18 70C18 70 3 46 6 24C8.6 7 18 2 18 2C18 2 27.4 7 30 24C33 46 18 70 18 70Z"
        fill="#AAB7A2"
        fillOpacity="0.55"
        stroke="#7F9176"
        strokeWidth="1.1"
      />
      <path d="M18 68V8" stroke="#7F9176" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

export function Blob({ className, fill = '#BAC5B1', ...props }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" {...props}>
      <path
        fill={fill}
        d="M54.5,-18.6C66.2,8.2,68.4,41.3,53.7,54.3C39,67.2,7.5,59.9,-16.4,45.8C-40.3,31.7,-56.5,10.8,-54.6,-12.4C-52.7,-35.6,-32.7,-61.1,-9.6,-63.9C13.6,-66.7,42.8,-45.4,54.5,-18.6Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}

export function Cloud({ className, ...props }) {
  return (
    <svg viewBox="0 0 120 54" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        fill="#AABCC4"
        fillOpacity="0.45"
        d="M28 42c-12 0-20-8-20-18S18 8 30 10c4-8 16-12 26-8 8-8 24-8 32 2 14-2 26 8 24 20 12 2 16 16 4 22H28Z"
      />
    </svg>
  )
}

export function PressedFlower({ className, ...props }) {
  return (
    <svg viewBox="0 0 80 90" fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M40 78C39 58 28 46 18 44" stroke="#7F9176" strokeWidth="1.2" />
      <path
        d="M18 44c8-2 14 4 16 12-8 1-15-4-16-12Z"
        fill="#AAB7A2"
        fillOpacity="0.7"
        stroke="#7F9176"
        strokeWidth="0.8"
      />
      <path d="M40 36c4 8 4 14 0 20-4-6-4-12 0-20Z" fill="#D8B2AC" />
      <path d="M40 36c-8 3-14 3-20 0 6-4 12-4 20 0Z" fill="#BAC5B1" />
      <path d="M40 36c8 3 14 3 20 0-6-4-12-4-20 0Z" fill="#D49A84" opacity="0.8" />
      <path d="M40 36c3-8 8-12 14-14-2 8-7 12-14 14Z" fill="#E7D7A2" />
      <circle cx="40" cy="36" r="4" fill="#C9B57A" />
    </svg>
  )
}

export function Squiggle({ className, ...props }) {
  return (
    <svg viewBox="0 0 120 24" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M2 14C18 4 28 22 46 12C62 3 70 20 88 11C100 5 110 14 118 10"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Tape({ className, ...props }) {
  return (
    <svg viewBox="0 0 80 24" className={className} aria-hidden="true" {...props}>
      <rect x="1" y="4" width="78" height="16" fill="#E7D7A2" fillOpacity="0.55" transform="rotate(-6 40 12)" />
    </svg>
  )
}

export function HeroPlant({ className, ...props }) {
  return (
    <svg viewBox="0 0 180 280" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M92 278C90 214 78 176 86 128C92 90 108 70 102 18"
        stroke="#7F9176"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M86 176C62 168 46 150 38 128" stroke="#7F9176" strokeWidth="1.2" />
      <path
        d="M38 128c16 2 28 14 32 30-16 2-30-10-32-30Z"
        fill="#AAB7A2"
        fillOpacity="0.75"
        stroke="#7F9176"
        strokeWidth="0.9"
      />
      <path d="M90 148C114 138 136 140 152 152" stroke="#7F9176" strokeWidth="1.2" />
      <path
        d="M152 152c-12 8-30 8-42-2 8-14 26-16 42 2Z"
        fill="#BAC5B1"
        fillOpacity="0.8"
        stroke="#7F9176"
        strokeWidth="0.9"
      />
      <path d="M88 108C64 92 58 70 62 48" stroke="#7F9176" strokeWidth="1.1" />
      <path
        d="M62 48c12 10 24 22 28 38-18-2-28-18-28-38Z"
        fill="#AAB7A2"
        fillOpacity="0.7"
        stroke="#7F9176"
        strokeWidth="0.9"
      />
      <path d="M100 86C124 70 138 48 140 28" stroke="#7F9176" strokeWidth="1.1" />
      <path
        d="M140 28c-4 18-18 34-36 42 2-18 16-34 36-42Z"
        fill="#D8B2AC"
        fillOpacity="0.85"
        stroke="#C08982"
        strokeWidth="0.8"
      />
      <path d="M102 18c4 8 4 12 0 16-4-4-4-8 0-16Z" fill="#D8B2AC" />
      <path d="M102 18c-8 2-12 2-16 0 4-3 8-3 16 0Z" fill="#AAB7A2" />
      <path d="M102 18c8 2 12 2 16 0-4-3-8-3-16 0Z" fill="#E7D7A2" />
      <circle cx="102" cy="18" r="3.2" fill="#C9B57A" />
    </svg>
  )
}

export function BloomFlower({ className, ...props }) {
  return (
    <svg viewBox="0 0 200 220" fill="none" className={className} aria-hidden="true" {...props}>
      <path d="M100 218C99 170 94 140 100 96" stroke="#7F9176" strokeWidth="2" strokeLinecap="round" />
      <path d="M100 160C78 154 62 140 54 122" stroke="#7F9176" strokeWidth="1.4" />
      <path
        d="M54 122c18 4 32 16 38 30-18 0-32-12-38-30Z"
        fill="#AAB7A2"
        fillOpacity="0.8"
        stroke="#7F9176"
      />
      <path d="M100 148C122 140 142 142 156 154" stroke="#7F9176" strokeWidth="1.4" />
      <path
        d="M156 154c-14 10-34 10-48-2 10-16 30-18 48 2Z"
        fill="#BAC5B1"
        fillOpacity="0.85"
        stroke="#7F9176"
      />
      <g>
        <path d="M100 42c8 18 8 30 0 42-8-12-8-24 0-42Z" fill="#D8B2AC" />
        <path d="M100 42c-18 8-30 8-42 0 12-8 24-8 42 0Z" fill="#D49A84" opacity="0.9" />
        <path d="M100 42c18 8 30 8 42 0-12-8-24-8-42 0Z" fill="#D8B2AC" />
        <path d="M100 42c8-18 18-28 32-32-6 16-16 26-32 32Z" fill="#E7D7A2" />
        <path d="M100 42c-8-16-20-26-34-30 8 16 18 26 34 30Z" fill="#BAC5B1" />
        <path d="M100 84c-16-6-28-18-32-34 16 4 28 16 32 34Z" fill="#AAB7A2" />
        <circle cx="100" cy="48" r="11" fill="#E7D7A2" />
        <circle cx="100" cy="48" r="5" fill="#C9B57A" />
      </g>
    </svg>
  )
}

export function EndingMark({ className, ...props }) {
  return (
    <svg viewBox="0 0 88 88" fill="none" className={className} aria-hidden="true" {...props}>
      <circle cx="44" cy="44" r="10" fill="#E7D7A2" />
      <path d="M44 18c3 8 3 12 0 16-3-4-3-8 0-16Z" fill="#D8B2AC" />
      <path d="M44 70c-3-8-3-12 0-16 3 4 3 8 0 16Z" fill="#AAB7A2" />
      <path d="M18 44c8 3 12 3 16 0-4-3-8-3-16 0Z" fill="#BAC5B1" />
      <path d="M70 44c-8-3-12-3-16 0 4 3 8 3 16 0Z" fill="#D49A84" opacity="0.85" />
    </svg>
  )
}
