import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const socialData = [
  {
    path: 'twitter.svg',
    alt: 'x'
  },
  {
    path: 'facebook.svg',
    alt: 'Facebook'
  },
  {
    path: 'telegram.svg',
    alt: 'telegram'
  },
  {
    path: 'instagram.svg',
    alt: 'instagram'
  },
  {
    path: 'linkedin.svg',
    alt: 'linkedin'
  },
] 

const FooterSection = () => {
  return (
    <footer className='bg-slate-200 px-4 py-8'>
      <div className='flex justify-around'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold text-gradient'>Let{"'"}s keep in touch!</h1>
          <p className='text-lg font-light text-gray-400'>Find us on any of these platforms, we respond 1-2 business days.</p>
          <div className='flex gap-4 mt-4'>
            {socialData.map((item, idx)=> (
              <div className='w-max p-4 bg-accent rounded-full shadow-2xl' key={idx}>
                <Image src={`/assets/home/${item.path}`} alt={item.alt} width={1000} height={0} className='w-4' />
              </div>
            ))}
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-base text-gray-500'>Useful links</h1>
            <ul className='flex flex-col gap-2 text-base'>
              <li><Link href={{ hash: '#about' }} className="hover:underline text-gray-400">About</Link></li>
              <li><Link href={{ hash: '#benefits' }} className="hover:underline text-gray-400">Benefits</Link></li>
              <li><a href="#" className="hover:underline text-gray-400">Github</a></li>
              <li><Link href={{ hash: '#pricing' }} className="hover:underline text-gray-400">Pricing</Link></li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-base text-gray-500'>Other resources</h1>
            <ul className='flex flex-col gap-2 text-base'>
              <li><a href="#" className="hover:underline text-gray-400">MIT License</a></li>
              <li><a href="#" className="hover:underline text-gray-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline text-gray-400">Privacy Policy</a></li>
              <li><Link href={{ hash: '#contact' }} className="hover:underline text-gray-400">Contact us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='w-10/12 mx-auto border-white border-b-2 rounded-full my-8' />
      <p className='text-center text-gray-400'>Copyright © 2024 Next Js by Sumit Baghel.</p>
    </footer>
  )
}

export default FooterSection
