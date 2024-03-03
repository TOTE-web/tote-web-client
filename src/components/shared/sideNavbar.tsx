"use client"
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'

const AccordionComponent = ({ title, iconPath, children, pathname } : { title: string, iconPath?: string, children: React.ReactNode, pathname: string } ) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <Link href={pathname}>
          <AccordionTrigger>
            {iconPath && <Image src={iconPath} width={1000} height={0} alt={title} />}
            <span>{title}</span>
          </AccordionTrigger>
        </Link>
        <AccordionContent className='flex flex-col pl-2 gap-4'>
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

const data = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    listItems: [
      {
        title: 'Overview', path: '/overview'
      },
      {
        title: 'Analytics', path: '/analytics'
      },
      {
        title: 'Notifications', path: '/notifications'
      },
    ]
  },
  {
    title: 'Employee Management',
    path: '/employee-management',
    listItems: [
      {
        title: 'Employee Directory', path: '/directory'
      },
      {
        title: 'Add New Employee', path: '/new'
      },
      {
        title: 'Employee Profiles', path: '/profiles'
      },
      {
        title: 'Attendance Management', path: '/attendance'
      },
      {
        title: 'Leave Management', path: '/leave'
      },
    ]
  },
]

const SideNavbar = ({ className }: { className: string }) => {
  return (
    <Card className={cn('rounded-none border-t-0 border-b-0 border-l-0 z-50 px-2 py-4 overflow-auto', className)}>
      {data.map(({ title, listItems, path }, idx)=> (
        <AccordionComponent title={title} pathname={path} key={idx}>
          {listItems.map((item, idx1)=> (
            <Link href={path + item.path} key={idx1}>{item.title}</Link>
          ))}
        </AccordionComponent>
      ))}
    </Card>
  )
}

export default SideNavbar
