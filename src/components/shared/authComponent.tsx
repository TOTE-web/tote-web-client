"use client"

import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'

const AuthComponent = ({ children, title } : { children: React.ReactNode, title: string }) => {
  return (
    <Card className="h-screen border-none rounded-none grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:inline-block bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/assets/auth/sider.jpg)' }} />
      <Card className="w-full backdrop-blur-lg bg-background border-none rounded-none flex flex-col justify-center items-center bg-[#FCFCFC]">
        <CardHeader className="text-3xl lg:text-5xl text-center font-bold text-gradient">{title}</CardHeader>
        {children}
      </Card>
    </Card>
  )
}

export default AuthComponent
