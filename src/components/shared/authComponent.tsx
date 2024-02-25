"use client"

import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/card'

const AuthComponent = ({ children, title } : { children: React.ReactNode, title: string }) => {
  return (
    <Card className="h-screen bg-no-repeat border-none rounded-none bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: 'url(/assets/auth/sideImage.jpg)' }}>
      <Card className="w-[36rem] backdrop-blur-lg bg-background border-none shadow-2xl shadow-red-500 rounded-2xl">
        <CardHeader className="text-3xl text-center font-bold bg-gradient-to-r from-red-200 text-white via-red-400 to-red-600">{title}</CardHeader>
        <hr className="w-full border-primary-foreground" />
        {children}
      </Card>
    </Card>
  )
}

export default AuthComponent
