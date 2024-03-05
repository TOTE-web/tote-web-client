"use client"
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { routesList } from '@/data/sideNavbar';
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation';

const AccordionComponent = ({ title, iconPath, children, pathname, isActive } : { title: string, iconPath?: string, children: React.ReactNode, pathname: string, isActive: boolean } ) => {
  
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className={cn('border-none px-2 hover:bg-gray-50', isActive && 'bg-gray-50')}>
          <AccordionTrigger className='gap-3'>
            <Link href={pathname} className='flex gap-2'>
              {iconPath && <Image src={iconPath} width={1000} height={0} alt={title} className='w-4 h-4 self-center' />}
              <span className='capitalize text-sm'>{title}</span>
            </Link>
          </AccordionTrigger>
        <AccordionContent className='flex flex-col pl-3 gap-4'>
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

const SideNavbar = ({ className }: { className: string }) => {
  const pathname = usePathname();
  const [, parentPath] = pathname.split('/');

  return (
    <Card className={cn('rounded-none border-t-0 border-b-0 border-l-0 z-50 pb-4 overflow-auto', className)}>
      {routesList.map(({ title, listItems, path, iconPath }, idx)=> {
        return (
        <AccordionComponent title={title} pathname={path} iconPath={iconPath} key={idx} isActive={path.includes(parentPath)}>
          {listItems.map((item, idx1)=> (
            <Link href={item.path} key={idx1} className={cn('capitalize text-sm flex gap-3 w-max', (item.path === pathname) && 'underline')}>
              <Image src={item.iconPath} width={1000} height={0} alt={title} className='w-4 h-4 self-center' />
              <span>{item.title}</span>
            </Link>
          ))}
        </AccordionComponent>
      )})}
    </Card>
  )
}

export default SideNavbar
