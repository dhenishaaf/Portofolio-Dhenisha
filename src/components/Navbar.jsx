import { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [location] = useLocation()
  const isHome = location === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(247,245,242,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <Link href="/" className="font-semibold text-base tracking-tight text-neutral-900 hover:opacity-70 transition-opacity">
        Dhenisha.
      </Link>
      <div className="flex gap-8 text-sm text-neutral-500">
        {isHome ? (
          <>
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#experience" className="hover:text-black transition-colors">Experience</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </>
        ) : (
          <>
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <a href="/#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="/#contact" className="hover:text-black transition-colors">Contact</a>
          </>
        )}
      </div>
    </nav>
  )
}
