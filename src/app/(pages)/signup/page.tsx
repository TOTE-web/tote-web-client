"use client"
import AuthComponent from "@/components/shared/authComponent";
import { CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Please enter a valid username"
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Please enter a valid password"
  }),
  confirmPassword: z.string().min(8, {
    message: "Please enter a valid password"
  })
})

const SignUp = () => {
  const { toast } = useToast();
  const [state, setState] = useState({ isLoading: false });
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
 
  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values.password !== values.confirmPassword) {
      toast({ title: 'Confirm password not matching!', variant: 'destructive' });
      return;
    }
    try {
      setState(prev => ({ ...prev, isLoading: true }));
      await axios.post('/api/auth/signup', values);
      toast({ title: 'Successfully! created account', description: 'Please do login!' });
      router.push('/login');
    } catch (error: any) {
      toast({ title: error.message || 'Unable to create account!', variant: 'destructive' });
    } finally {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }
  return (
    <AuthComponent title="Create new account">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="py-8 w-10/12 mx-auto">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-base text-black font-normal">Username</FormLabel>
                <FormControl>
                  <Input placeholder="@example" type="text" {...field} />
                </FormControl>
                <FormMessage className="text-red-500 font-light" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-base text-black font-normal">Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage className="text-red-500 font-light" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-base text-black font-normal">Create Password</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" type="password" {...field} />
                </FormControl>
                <FormMessage className="text-red-500 font-light" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-base text-black font-normal">Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" type="password" {...field} />
                </FormControl>
                <FormMessage className="text-red-500 font-light" />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={state.isLoading} className={` ${state.isLoading && 'cursor-not-allowed opacity-65'} w-full text-xl py-6 my-4 bg-primary transition-all hover:rounded-full`}>
            {state.isLoading ? 'Logging in...' :  'Create Account'}
          </Button>
          <CardDescription className="text-black text-xs lg:text-base text-center">
            Already have an account ? <Link className="text-primary" href={'/login'}>Login</Link>
          </CardDescription>
        </form>
      </Form>
    </AuthComponent>
  );
}

export default SignUp;
