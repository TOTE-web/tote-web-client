"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Card } from '../ui/card'
import axios from 'axios';
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter();
  const [isPopUpOpened, setIsPopUpOpened] = useState(false);
  const isLoggedIn = true;

  const handleLogout = async () => {
    try {
      await axios.get('/api/auth/logout');
      router.push('/login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="flex justify-between items-center bg-white z-10 p-4 px-16 shadow-black/10 shadow-lg sticky top-0">
      <nav className="flex gap-4">
        {/* Logo with text */}
        <ul className="flex gap-4 text-xl text-gray-600">
          <li><Link href={{ hash: '#about' }} className="hover:underline hover:text-xl">About</Link></li>
          <li><Link href={{ hash: '#benefits' }} className="hover:underline hover:text-xl">Benefits</Link></li>
          <li><Link href={{ hash: '#pricing' }} className="hover:underline hover:text-xl">Pricing</Link></li>
          <li><Link href={{ hash: '#contact' }} className="hover:underline hover:text-xl">Contact us</Link></li>
        </ul>
      </nav>
      <div className={`relative ${!isLoggedIn && 'hidden' }`} onClick={() => setIsPopUpOpened(prev => !prev)}>
        <div className='flex gap-2 justify-center items-center cursor-pointer'>
          <Image src="/assets/home/user.png" width={1000} height={0} alt='user' className='w-8' />
          <span className='text-gray-500'>hi username</span>
        </div>
        <Card className={`absolute top-10 w-max flex flex-col gap-4 py-4 px-2 shadow-black/10 shadow-xl border-2 border-b-0 border-l-0 border-r-0 ${!isPopUpOpened && 'hidden' }`}>
          <Link href="/dashboard" className='cursor-pointer text-base text-primary hover:underline'>Go to dashboard</Link>
          <div className='text-base text-destructive cursor-pointer' onClick={handleLogout}>Logout</div>
        </Card>
      </div>
      <Link href="/login" className={`${isLoggedIn && 'hidden'}`}>
        <Button type="button" variant="outline" className="px-8 py-1 text-primary hover:text-primary font-semibold hover:underline" >Login</Button>
      </Link>
    </header>
  )
}

export default Header
