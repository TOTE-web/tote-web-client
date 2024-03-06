"use client"
import React, { RefObject, useLayoutEffect, useRef } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { routesList } from '@/data/sideNavbar';
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation';

const AccordionComponent = ({ title, iconPath, children, isAccordionOpened } : { title: string, iconPath?: string, children: React.ReactNode, isAccordionOpened: boolean } ) => {
  const btnRef: RefObject<HTMLButtonElement> = useRef(null);

  useLayoutEffect(()=> {
    if (isAccordionOpened && btnRef && btnRef.current?.getAttribute('data-state') === 'closed') btnRef.current.click();
  }, [isAccordionOpened, btnRef]);

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className={cn('border-none px-2 hover:bg-gray-50', isAccordionOpened && 'bg-gray-50')}>
          <AccordionTrigger className='gap-3' ref={btnRef} >
            <div className='flex gap-2'>
              {iconPath && <Image src={iconPath} width={1000} height={0} alt={title} className='w-4 h-4 self-center' />}
              <span className='capitalize text-sm'>{title}</span>
            </div>
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
      {routesList.map(({ title, listItems, iconPath, path }, idx)=> {
        if (!listItems) {
          const isActive = path.includes(parentPath);
          return (
            <Link key={idx} className={cn('border-none px-2 py-4 font-medium hover:bg-gray-50 flex gap-2', isActive && 'bg-gray-50')} href={path}>
              <Image src={iconPath} width={1000} height={0} alt={title} className='w-4 h-4 self-center' />
              <span className='capitalize text-sm'>{title}</span>
            </Link>
          )
        }

        const isAccordionOpened = !!(listItems && listItems.find((item: any)=> item.path === pathname));
        return (
          <AccordionComponent title={title} iconPath={iconPath} key={idx} isAccordionOpened={isAccordionOpened}>
            {listItems && listItems.map((item: any, idx1: number)=> (
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
