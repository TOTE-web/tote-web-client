"use client"
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white z-10 p-2 shadow-sm sticky top-0">
      <nav className="flex gap-4">
        {/* Logo with text */}
        <ul className="flex gap-4">
          <li><Link href={{ hash: '#about' }} className="hover:underline hover:text-primary">About</Link></li>
          <li><Link href={{ hash: '#benefits' }} className="hover:underline hover:text-primary">Benefits</Link></li>
          <li><Link href={{ hash: '#pricing' }} className="hover:underline hover:text-primary">Pricing</Link></li>
          <li><Link href={{ hash: '#contact' }} className="hover:underline hover:text-primary">Contact us</Link></li>
        </ul>
      </nav>
      <Link href="/login">
        <Button type="button" variant="outline" className="px-8 py-1 text-primary hover:text-primary font-semibold hover:underline" >Login</Button>
      </Link>
    </header>
  )
}

export default Header
