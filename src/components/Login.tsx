import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff, Lock, Mail, ArrowRight, AlertCircle } from 'lucide-react'
import SolucionesLogo from './SolucionesLogo'

const DEMO_USER = {
  email: 'admin@spc.com',
  password: 'Demo2026',
  redirectTo: '/dashboard.html',
}

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

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
    background: '#FDFDFD',
    border: '1px solid #E4E5E8',
    borderRadius: '12px',
    padding: '14px 14px 14px 44px',
    color: '#021A3C',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
  }

  const inputFocused: React.CSSProperties = {
    ...inputBase,
    border: '1px solid #B3CEE7',
    background: '#DFEEFB',
  }

  const inputError: React.CSSProperties = {
    ...inputBase,
    border: '1px solid #e05c5c',
    background: '#fff5f5',
  }

  function getInputStyle(field: string) {
    if (error) return field === 'password' ? { ...inputError, paddingRight: '44px' } : inputError
    if (focusedField === field) return field === 'password' ? { ...inputFocused, paddingRight: '44px' } : inputFocused
    return field === 'password' ? { ...inputBase, paddingRight: '44px' } : inputBase
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    setTimeout(() => {
      if (
        email.trim().toLowerCase() === DEMO_USER.email &&
        password === DEMO_USER.password
      ) {
        window.location.href = DEMO_USER.redirectTo
      } else {
        setLoading(false)
        setError('Correo o contraseña incorrectos.')
      }
    }, 700)
  }

  return (
    <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariant}
        style={{
          width: '100%',
          maxWidth: '370px',
          background: 'rgba(253, 253, 253, 0.78)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1px solid #E4E5E8',
          padding: '30px 28px 24px',
          boxShadow: '0 24px 60px rgba(2,26,60,0.18)',
        }}
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <SolucionesLogo iconSize={52} textSize="0.95rem" />
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#E4E5E8', marginBottom: '28px' }} />

        {/* Title */}
        <div className="mb-6">
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.4rem, 4vw, 1.75rem)',
              color: '#021A3C',
              lineHeight: 1.1,
              marginBottom: '6px',
            }}
          >
            Bienvenido
          </h1>
          <p style={{ color: '#5F6F73', fontSize: '0.875rem', fontFamily: 'var(--font-body)' }}>
            Ingresa tus credenciales para continuar
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Email field */}
          <div style={{ position: 'relative' }}>
            <Mail
              size={17}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: error ? '#e05c5c' : focusedField === 'email' ? '#021A3C' : '#5F6F73',
                transition: 'color 0.2s',
                pointerEvents: 'none',
              }}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(null) }}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              style={getInputStyle('email')}
              autoComplete="email"
              required
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
                color: error ? '#e05c5c' : focusedField === 'password' ? '#021A3C' : '#5F6F73',
                transition: 'color 0.2s',
                pointerEvents: 'none',
              }}
            />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(null) }}
              onFocus={() => setFocusedField('password')}
              onBlur={() => setFocusedField(null)}
              style={getInputStyle('password')}
              autoComplete="current-password"
              required
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
                color: '#5F6F73',
                padding: 0,
                display: 'flex',
              }}
              aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            >
              {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
            </button>
          </div>

          {/* Error message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#fff5f5',
                  border: '1px solid #f5c6c6',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  color: '#b03030',
                  fontSize: '0.84rem',
                  fontFamily: 'var(--font-body)',
                  marginTop: '-4px',
                }}
              >
                <AlertCircle size={15} style={{ flexShrink: 0 }} />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Forgot password */}
          <div className="flex justify-end" style={{ marginTop: '-8px' }}>
            <a
              href="#"
              style={{
                color: '#021A3C',
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
            disabled={loading}
            whileHover={loading ? {} : { scale: 1.03, filter: 'brightness(1.08)' }}
            whileTap={loading ? {} : { scale: 0.97 }}
            style={{
              marginTop: '4px',
              width: '100%',
              background: loading ? '#B3CEE7' : '#DFEEFB',
              color: '#021A3C',
              border: 'none',
              borderRadius: '12px',
              padding: '15px 24px',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              boxShadow: '0 4px 20px rgba(2,26,60,0.08)',
              transition: 'background 0.2s',
            }}
          >
            {loading ? 'Verificando...' : 'Iniciar Sesión'}
            {!loading && <ArrowRight size={18} />}
          </motion.button>
        </form>

        {/* Footer */}
        <p
          style={{
            marginTop: '24px',
            textAlign: 'center',
            color: '#5F6F73',
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
