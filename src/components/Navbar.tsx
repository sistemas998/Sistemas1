import { useState } from 'react'
import { Menu } from 'lucide-react'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

const NAV_LINKS = ['Vault', 'Plans', 'Install', 'News', 'Help']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="relative z-10 mx-auto w-full max-w-[1280px] px-5 py-4 sm:px-8 sm:py-5">
        <div className="flex items-center justify-between">
          <a href="#" aria-label="VaultShield home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium opacity-80 transition-opacity hover:opacity-100"
                style={{ color: '#192837' }}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              className="rounded-full px-5 py-2.5 text-sm font-medium text-white"
              style={{ background: '#7342E2' }}
            >
              Start For Free
            </button>
            <button
              type="button"
              className="rounded-full px-5 py-2.5 text-sm font-medium"
              style={{ background: '#F2F2EE', color: '#192837' }}
            >
              Sign In
            </button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          >
            <Menu size={24} color="#192837" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Navbar
