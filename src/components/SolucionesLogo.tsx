interface SolucionesLogoProps {
  className?: string
  iconSize?: number
  textSize?: string
}

function SolucionesLogo({ className = '', iconSize = 56, textSize = '1rem' }: SolucionesLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logospc.png"
        alt="Soluciones Para Crecer"
        style={{
          width: iconSize,
          height: iconSize,
          borderRadius: '50%',
          objectFit: 'cover',
          display: 'block',
          flexShrink: 0,
        }}
      />

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
