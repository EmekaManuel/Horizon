"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomInput from "./customInput";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { SignIn, SignUp } from "@/lib/actions/user.actions";
import PlaidLink from "./plaidLink";

interface AuthFormProps {
  type: string;
}

const AuthForm: React.FC<AuthFormProps> = (props) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(props.type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      if (props.type === "sign-in") {
        const response = await SignIn({
          email: data.email,
          password: data.password,
        });
        console.log(response);
        if (response) {
          router.push("/");
        }
      }
      if (props.type === "sign-up") {
        const newUser = await SignUp(data);
        console.log(newUser);
        setUser(newUser);
      }
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-1">
        <Link href="/" className="mb-5 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            className="size-[24px] max-xl:size-14"
            width={34}
            height={34}
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {
              user && "Link Account"
              // : props.type === "sign-in"
              // ? "Sign In"
              // : "Sign Up"
            }
            <p className="text-14 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          <PlaidLink user={user} variant="primary" />
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {props.type === "sign-up" ? (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      placeholder="ex: Emeka"
                    />
                    <CustomInput
                      control={form.control}
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      placeholder="ex: Manuel"
                    />
                  </div>

                  <CustomInput
                    control={form.control}
                    id="address"
                    name="address1"
                    label="Address"
                    placeholder="Enter Your Address"
                  />
                  <CustomInput
                    control={form.control}
                    id="city"
                    name="city"
                    label="City"
                    placeholder="Enter Your City"
                  />

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      id="state"
                      name="state"
                      label="State"
                      placeholder="ex: Lagos"
                    />
                    <CustomInput
                      control={form.control}
                      id="postalCode"
                      name="postalCode"
                      label="Postal Code"
                      placeholder="ex: 101101"
                    />
                  </div>

                  <div className="flex gap-4">
                    <CustomInput
                      control={form.control}
                      id="dob"
                      name="dob"
                      label="Date Of Birth"
                      placeholder="YY-MM-DD"
                    />
                    <CustomInput
                      control={form.control}
                      id="ssn"
                      name="ssn"
                      label="State Security Number"
                      placeholder="ex: 12345AB"
                    />
                  </div>

                  <CustomInput
                    control={form.control}
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="ex: manuel@gmail.com"
                  />
                  <CustomInput
                    control={form.control}
                    id="password"
                    name="password"
                    label="Password"
                    placeholder="Enter Your Password"
                  />
                </>
              ) : (
                <>
                  <CustomInput
                    control={form.control}
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="Enter Your Email"
                  />
                  <CustomInput
                    control={form.control}
                    id="password"
                    name="password"
                    label="Password"
                    placeholder="Enter Your Password"
                  />
                </>
              )}

              <div className="flex flex-col gap-4">
                <Button className="form-btn" type="submit">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading ...
                    </>
                  ) : props.type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {props.type === "sign-in"
                ? "Don't have an account ?"
                : "Already have an account ?"}
            </p>
            <Link
              className="form-link"
              href={props.type === "sign-in" ? "/sign-up" : "/sign-in"}
            >
              {props.type === "sign-in" ? "Create an Account" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
