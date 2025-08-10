"use client"
import React, { useState } from 'react'
import NavLinks from './NavLinks'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[var(--white)]/70 backdrop-blur shadow-[var(--shadow-1)]">
      <div className="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Go home">
          <Image src="/images/logo.png" alt="Logo" width={60} height={60} priority/>
        </Link>
        <NavLinks />
        <div className="flex items-center gap-3">
          <button
             onClick={() => setIsContactOpen(true)}
            className="rounded-[var(--radius-5)] px-4 py-2 text-base text-[var(--white)]
                       shadow-[var(--shadow-2)] transition
                       bg-[var(--kappel)] hover:opacity-90"
          >
            Contact me
          </button>
          <button
            className="md:hidden size-10 inline-flex items-center justify-center rounded-md border border-[var(--platinum)]"
            aria-label="Open menu"
          >
            <span className="i-lucide-menu" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header