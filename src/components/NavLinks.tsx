
import Link from 'next/link'
import React from 'react'
import { navLinks } from '@/data/nav-links'

const NavLinks = () => {
  return (
    <nav aria-label="Main" className='hidden md:flex items-center gap-8 text-[var(--eerie-black-1)]'>
        {navLinks && (
            navLinks.map(link => (
                <Link 
                    href={link.href} 
                    key={link.href}
                    className="transition hover:opacity-70"
                    prefetch={false}
                >
                    {link.label}
                </Link>
            ))
        )}
    </nav>
  )
}

export default NavLinks