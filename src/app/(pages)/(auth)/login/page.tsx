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
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Please enter a valid password."
  })
})

const Login = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [state, setState] = useState({ isLoading: false });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setState((prev)=> ({ ...prev, isLoading: true }));
      await axios.post('/api/auth/login', values);
      toast({ title: 'Logged In Successfully!!' });
      router.push('/dashboard');
    } catch (error: any) {
      toast({ title: error.message || 'Unable to login', variant: 'destructive' });
    } finally {
      setState((prev)=> ({ ...prev, isLoading: false }));
    }
  }

  return (
    <AuthComponent title="Welcome back!">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="py-8 w-10/12 mx-auto">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-base text-black font-normal">Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} className="placeholder:text-gray-400" />
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
                <FormLabel className="text-base text-black font-normal">Password</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" type="password" {...field} className="placeholder:text-gray-400" />
                </FormControl>
                <FormMessage className="text-red-500 font-light" />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={state.isLoading} className={` ${state.isLoading && 'cursor-not-allowed opacity-65'} w-full text-xl py-6 my-4 bg-primary transition-all hover:rounded-full`}>
            {state.isLoading ? 'Logging in...' :  'Login'}
          </Button>
          <div className="flex justify-between">
            <CardDescription className="text-black text-xs lg:text-base">
              Don{"'"}t have an account ? <Link className="text-primary" href={'/signup'}>Signup</Link>
            </CardDescription>
            <CardDescription className="text-black text-xs lg:text-base">
              <Link className="text-primary" href={'/forgotPassword'}>Forgot password?</Link>
            </CardDescription>
          </div>
        </form>
      </Form>
    </AuthComponent>
  );
}

export default Login;
