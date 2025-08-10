"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { useRouter } from "next/navigation";


const formSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInFormValues = z.infer<typeof formSchema>;

export default function SignInView() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  const onSubmit = (values: SignInFormValues) => {
    setError("")
    authClient.signIn.email({ ...values, callbackURL: "/" }, {
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

  const handleGithubLogin = async () => {
    try {
      setLoading(true);
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        errorCallbackURL: "/",
        newUserCallbackURL: "/",
        disableRedirect: false,
      });
    } catch (err) {
      console.error("GitHub login error:", err);
    } finally {
      setLoading(false);
    }
  };



  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      console.error("google login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" w-full md:mx-10 mx-5 ">
      <h2 className="text-2xl font-bold mb-6">Sign In</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">


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
          <Button type="submit" disabled={loading} className="w-full h-12 uppercase">{loading ? "submitting..." : "Sign In"}</Button>

          <div className="grid grid-cols-2 gap-5 ">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  type="button"
                  disabled={loading}
                  onClick={handleGoogleLogin}
                  className="w-full h-12 uppercase flex items-center justify-center gap-2 shadow-sm"
                >
                  <FaGoogle className="w-5 h-5" />

                </Button>
              </TooltipTrigger>
              <TooltipContent>Sign in using your Google account</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>

                <Button
                  variant="outline"
                  type="button"
                  onClick={handleGithubLogin}
                  disabled={loading}
                  className="w-full h-12 uppercase flex items-center justify-center gap-2 shadow-sm"
                >


                  <FaGithub className="h-5 w-5" />

                </Button>
              </TooltipTrigger>
              <TooltipContent>Sign in using your Github account</TooltipContent>
            </Tooltip>


          </div>
        </form>
        <div className=" flex justify-center items-center mt-3">
          <p className="text-sm text-gray-600">
            don't have an account?{" "}
            <Link
              href="?mode=sign-up"
              className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
            >
              Go to Sign Up
            </Link>
          </p>
        </div>

      </Form>
    </div>
  );
}



