import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-full text-3xl'>
      Page not found go to
      <Link href={'/dashboard'} className='text-primary underline'>dashboard</Link>
    </div>
  )
}

export default NotFound
