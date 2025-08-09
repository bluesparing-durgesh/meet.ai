"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Globe, Github } from "lucide-react";

import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";


const formSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),

});

type SignUpFormValues = z.infer<typeof formSchema>;

export default function SignUpView() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = (values: SignUpFormValues) => {
    setError("")
    authClient.signUp.email(values, {
      onError: ({ error }) => {
        setLoading(false)
        setError(error.message)
      },
      onSuccess: () => {
        setLoading(false)
        router.push("/")
      },
      onRequest: () => {
        setLoading(true);
      }
    });
  };

  return (
    <div className=" w-full mx-2 ">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input className="h-12" placeholder="Enter your name" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="h-12" placeholder="Enter your email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input className="h-12" type="password" placeholder="Enter your password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {
            !!error && <Alert variant="destructive">
              <Info />
              <AlertTitle>error!</AlertTitle>
              <AlertDescription>
                {error}
              </AlertDescription>
            </Alert>
          }
          <Button type="submit" disabled={loading} className="w-full h-12 uppercase">Sign Up</Button>
          <div className="grid grid-cols-2 gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  type="button"
                  disabled={loading}
                  className="w-full h-12 uppercase flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Globe className="w-5 h-5" />

                </Button>
              </TooltipTrigger>
              <TooltipContent>Sign in using your Google account</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>

                <Button
                  variant="outline"
                  type="button"
                  disabled={loading}
                  className="w-full h-12 uppercase flex items-center justify-center gap-2 cursor-pointer"
                >

                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" /></svg>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Sign in using your Google account</TooltipContent>
            </Tooltip>


          </div>
        </form>
        <div className=" flex justify-center items-center mt-3">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
            >
              Go to Sign In
            </Link>
          </p>
        </div>

      </Form>

    </div>
  );
}





