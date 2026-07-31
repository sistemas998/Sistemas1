import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Logo from './Logo'

const NAV_LINKS = ['Vault', 'Plans', 'Install', 'News', 'Help']

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(25,40,55,0.35)', backdropFilter: 'blur(4px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed right-0 top-0 z-50 flex flex-col"
            style={{
              width: 'min(88vw, 360px)',
              height: '100dvh',
              background: '#CFC8C5',
              boxShadow: '-12px 0 48px rgba(25,40,55,0.18)',
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full"
              >
                <X size={22} color="#192837" />
              </button>
            </div>
            <div style={{ height: 1, background: 'rgba(25,40,55,0.12)' }} />
            <nav className="flex flex-col gap-1 px-5 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="py-3 text-base font-medium"
                  style={{ color: '#192837' }}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 px-5 py-6">
              <button
                type="button"
                className="w-full rounded-full px-5 py-2.5 text-sm font-medium text-white"
                style={{ background: '#7342E2' }}
              >
                Start For Free
              </button>
              <button
                type="button"
                className="w-full rounded-full px-5 py-2.5 text-sm font-medium"
                style={{ background: '#F2F2EE', color: '#192837' }}
              >
                Sign In
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
