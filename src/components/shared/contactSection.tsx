"use client"

import Image from 'next/image'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from '../ui/textarea'
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  queryDescription: z.string().min(2).max(500),
});

const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (
    <section className="bg-background my-8" id="contact">
      <div className='w-max mx-auto'>
        <h1 className='text-5xl my-4 text-center font-bold'>Contact</h1>
        <hr className='w-10/12 mx-auto border-red-400 border-b-2 rounded-full' />
      </div>
      <p className='text-center text-base text-gray-500 mt-4'>Want to contact us? Choose an option below and well be happy to show you how we<br/> can transform companies web experience.</p>
      <div className="py-4 px-4 mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 lg:py-16 lg:px-6 lg:gap-8">
        <div>
          <h1 className='text-lg font-bold mb-4'>Contact Us</h1>
          <p className='text-base font-light text-gray-500'>Have something to say? We are here to help. Fill up<br/> the form or send email or call phone.</p>
          <div className='mt-6 flex flex-col gap-2 text-gray-500'>
            <div className='flex gap-4'>
              <Image src="/assets/home/street.svg" width={1000} height={0} alt='street' className='w-4 h-4' />
              <span>14 temporary street, Unknown city</span>
            </div>
            <div className='flex gap-4'>
              <Image src="/assets/home/envelope.svg" width={1000} height={0} alt='message' className='w-4 h-4' />
              <span>hello@company.com</span>
            </div>
            <div className='flex gap-4'>
              <Image src="/assets/home/call.svg" width={1000} height={0} alt='phone' className='w-4 h-4' />
              <span>+1-345-4566-345</span>
            </div>
          </div>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type='email' placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="queryDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder='Type your message...' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className='w-full p-6'>Send Message</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
