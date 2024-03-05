"use client"
import React from 'react'
import { getSlugsByParentPath } from '@/data/routes-handler';
import { notFound } from 'next/navigation';

const validSlugs = getSlugsByParentPath('/employee-management');

const Page = ({ params }: { params: any }) => {
  const slug = `/${params.id}`;
  if (!validSlugs?.includes(slug)) {
    notFound();
  }

  return (
    <div className='flex justify-center items-center h-full text-4xl capitalize'>
      {params.id.replace('-', ' ')}
    </div>
  )
}

export default Page
