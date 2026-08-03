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
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="innerCircleClip">
            <circle cx="50" cy="50" r="39" />
          </clipPath>
        </defs>

        {/* Yellow ring — Pantone 109 C #FFD100 */}
        <circle cx="50" cy="50" r="48" fill="#FFD100" />
        {/* White inner circle */}
        <circle cx="50" cy="50" r="40" fill="white" />

        {/* 3-D extruded S clipped to inner circle */}
        <g clipPath="url(#innerCircleClip)">
          {/* Back shadow layer 2 — darkest, furthest back */}
          <text
            x="55" y="72"
            textAnchor="middle"
            fill="#021A3C"
            fontSize="72"
            fontWeight="900"
            fontFamily="Impact, 'Arial Black', 'Franklin Gothic Heavy', sans-serif"
          >S</text>
          {/* Back shadow layer 1 — intermediate */}
          <text
            x="53" y="71"
            textAnchor="middle"
            fill="#021A3C"
            fontSize="72"
            fontWeight="900"
            fontFamily="Impact, 'Arial Black', 'Franklin Gothic Heavy', sans-serif"
            opacity="0.5"
          >S</text>
          {/* Front face — white */}
          <text
            x="50" y="69"
            textAnchor="middle"
            fill="white"
            fontSize="72"
            fontWeight="900"
            fontFamily="Impact, 'Arial Black', 'Franklin Gothic Heavy', sans-serif"
          >S</text>
        </g>
      </svg>

      <div className="flex flex-col leading-tight">
        <span
          style={{
            color: '#021A3C',
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
            color: '#021A3C',
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
