import type { CSSProperties } from 'react'
import { motion, type Variants } from 'framer-motion'
import { ArrowRightCircle, Zap, LockKeyhole, Fingerprint } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const iconStyle: CSSProperties = {
  display: 'inline-block',
  verticalAlign: 'middle',
  position: 'relative',
  top: '-2px',
  color: '#192837',
}

function Hero() {
  return (
    <div
      className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8"
      style={{ paddingTop: 'clamp(40px, 8vw, 72px)' }}
    >
      <div style={{ maxWidth: '560px' }}>
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.65rem, 5vw, 3rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: '#192837',
            marginBottom: '24px',
          }}
        >
          <Zap size={24} style={iconStyle} /> Lock Down Your{' '}
          Passwords <LockKeyhole size={24} style={iconStyle} /> with Ironclad
          Security <Fingerprint size={24} style={iconStyle} />
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
            lineHeight: 1.65,
            opacity: 0.8,
            maxWidth: '560px',
            marginBottom: '32px',
          }}
        >
          Zero stress, total control. VaultShield keeps you covered with
          unbreakable storage, one-tap access, and pro-grade tools for your
          non-stop world.
        </motion.p>

        <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp}>
          <motion.button
            type="button"
            whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-between font-semibold text-white"
            style={{
              background: '#7342E2',
              borderRadius: '50px',
              padding: '17px 24px',
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              boxShadow: '0 4px 24px rgba(115,66,226,0.28)',
              minWidth: '210px',
              gap: '32px',
            }}
          >
            Get It Free
            <ArrowRightCircle size={20} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
