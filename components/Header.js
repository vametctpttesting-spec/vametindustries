import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        navbarOpen
      ) {
        setNavbarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen])

  return (
    <header
      ref={navRef}
      className="w-full sticky top-0 z-50 shadow-sm"
      style={{
        background: '#ffffff',
      }}
    >
      <div className="flex flex-col max-w-6xl mx-auto md:flex-row md:items-center">
        <div className="flex items-center justify-between py-1 px-2 md:py-1 md:px-2">
          <Link href="/#top">
            <a className="flex-shrink-0">
              <Image
                src="/images/site/vamet-header-logo.png"
                alt="Vamet Industries"
                width={250}
                height={80}
                className="object-contain w-auto h-10 md:h-12"
              />
            </a>
          </Link>
          <button
            className="p-1 ml-4 text-black outline-none md:hidden"
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="3" y1="6" y2="6" x2="21"></line>
              <line x1="3" y1="12" y2="12" x2="21"></line>
              <line x1="3" y1="18" y2="18" x2="21"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            'md:flex md:items-center md:justify-end md:flex-1 md:pr-4' +
            (navbarOpen ? ' block' : ' hidden')
          }
        >
          <nav className="flex flex-col space-y-1 py-1 px-2 md:flex-row md:space-y-0 md:space-x-6 md:py-0 md:px-0">
            <Link href="/#top">
              <a className="font-bold transition duration-300 brand-color brand-color-hover text-center md:text-left">
                Home
              </a>
            </Link>
            <Link href="/#about">
              <a className="font-bold transition duration-300 brand-color brand-color-hover text-center md:text-left">
                About Us
              </a>
            </Link>
            <Link href="/#products">
              <a className="font-bold transition duration-300 brand-color brand-color-hover text-center md:text-left">
                Products
              </a>
            </Link>
            <Link href="/#customers">
              <a className="font-bold transition duration-300 brand-color brand-color-hover text-center md:text-left">
                Clients
              </a>
            </Link>
            <Link href="/#quality">
              <a className="font-bold transition duration-300 brand-color brand-color-hover text-center md:text-left">
                Quality
              </a>
            </Link>
            <Link href="/#contact">
              <a className="font-bold transition duration-300 brand-color brand-color-hover text-center md:text-left">
                Contact
              </a>
            </Link>
          </nav>
        </div>
      </div>
      <div className="border-b border-gray-300"></div>
    </header>
  )
}
