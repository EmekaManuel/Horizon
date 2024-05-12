import AuthForm from "@/components/authForm";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const SignUpPage = async () => {
  // const currentUser = await getLoggedInUser();
  // console.log(currentUser);
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUpPage;
