"use client"
import AuthComponent from "@/components/shared/authComponent";
import { CardDescription, CardHeader } from "@/components/ui/card";
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

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Please enter a valid password."
  })
})

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    
  }

  return (
    <AuthComponent title="Welcome back!">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="py-8 max-w-[30rem] mx-auto">
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
                <FormLabel className="text-base text-black font-normal">Password</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" type="password" {...field} />
                </FormControl>
                <FormMessage className="text-red-500 font-light" />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full my-4 bg-gradient-to-r from-red-200 via-red-400 to-red-600">Login</Button>
          <div className="flex justify-between">
            <CardDescription className="text-black">
              Don{"'"}t have an account ? <Link className="text-primary" href={'/signup'}>Signup</Link>
            </CardDescription>
            <CardDescription className="text-black">
              <Link className="text-primary" href={'/forgotPassword'}>Forgot password?</Link>
            </CardDescription>
          </div>
        </form>
      </Form>
    </AuthComponent>
  );
}

export default Login;
