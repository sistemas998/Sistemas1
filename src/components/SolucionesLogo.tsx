interface SolucionesLogoProps {
  className?: string
  iconSize?: number
  textSize?: string
}

function SolucionesLogo({ className = '', iconSize = 56, textSize = '1rem' }: SolucionesLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Gold ring */}
        <circle cx="28" cy="28" r="27" fill="#F4C430" />
        {/* Dark navy inner circle */}
        <circle cx="28" cy="28" r="21" fill="#1B3B6F" />
        {/* White bold S */}
        <text
          x="28"
          y="37"
          textAnchor="middle"
          fill="white"
          fontSize="26"
          fontWeight="900"
          fontFamily="'Arial Black', 'Impact', sans-serif"
          letterSpacing="-1"
        >
          S
        </text>
      </svg>

      <div className="flex flex-col leading-tight">
        <span
          style={{
            color: 'white',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: textSize,
            letterSpacing: '0.08em',
            lineHeight: 1.15,
          }}
        >
          SOLUCIONES
        </span>
        <span
          style={{
            color: 'white',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 800,
            fontSize: textSize,
            letterSpacing: '0.08em',
            lineHeight: 1.15,
          }}
        >
          PARA CRECER
        </span>
      </div>
    </div>
  )
}

export default SolucionesLogo
