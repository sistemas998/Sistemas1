import { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react'
import SolucionesLogo from './SolucionesLogo'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  const inputBase: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '12px',
    padding: '14px 14px 14px 44px',
    color: 'white',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
  }

  const inputFocused: React.CSSProperties = {
    ...inputBase,
    border: '1px solid #F4C430',
    background: 'rgba(244,196,48,0.06)',
  }

  return (
    <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariant}
        style={{
          width: '100%',
          maxWidth: '420px',
          background: 'rgba(10, 22, 48, 0.88)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: '24px',
          border: '1px solid rgba(244,196,48,0.2)',
          padding: '40px 36px 36px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
        }}
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <SolucionesLogo iconSize={52} textSize="0.95rem" />
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(244,196,48,0.3), transparent)',
            marginBottom: '28px',
          }}
        />

        {/* Title */}
        <div className="mb-6">
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.4rem, 4vw, 1.75rem)',
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '6px',
            }}
          >
            Bienvenido
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>
            Ingresa tus credenciales para continuar
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">

          {/* Email field */}
          <div style={{ position: 'relative' }}>
            <Mail
              size={17}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: focusedField === 'email' ? '#F4C430' : 'rgba(255,255,255,0.4)',
                transition: 'color 0.2s',
                pointerEvents: 'none',
              }}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              style={focusedField === 'email' ? inputFocused : inputBase}
              autoComplete="email"
            />
          </div>

          {/* Password field */}
          <div style={{ position: 'relative' }}>
            <Lock
              size={17}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: focusedField === 'password' ? '#F4C430' : 'rgba(255,255,255,0.4)',
                transition: 'color 0.2s',
                pointerEvents: 'none',
              }}
            />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              style={
                focusedField === 'password'
                  ? { ...inputFocused, paddingRight: '44px' }
                  : { ...inputBase, paddingRight: '44px' }
              }
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              style={{
                position: 'absolute',
                right: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.4)',
                padding: 0,
                display: 'flex',
              }}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>

          {/* Forgot password */}
          <div className="flex justify-end" style={{ marginTop: '-8px' }}>
            <a
              href="#"
              style={{
                color: '#F4C430',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
                opacity: 0.85,
              }}
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Submit button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, filter: 'brightness(1.08)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginTop: '4px',
              width: '100%',
              background: '#F4C430',
              color: '#0A1630',
              border: 'none',
              borderRadius: '12px',
              padding: '15px 24px',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 4px 20px rgba(244,196,48,0.3)',
            }}
          >
            Iniciar Sesión
            <ArrowRight size={18} />
          </motion.button>
        </form>

        {/* Footer */}
        <p
          style={{
            marginTop: '24px',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.35)',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-body)',
          }}
        >
          © 2026 Soluciones Para Crecer. Todos los derechos reservados.
        </p>
      </motion.div>
    </div>
  )
}

export default Login
