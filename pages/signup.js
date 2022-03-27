/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import InputField from "../src/components/shared/input";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";

const Signup = () => {
  const methods = useForm();

  const [error, setPasswordError] = useState("");

  const handleSubmit = (data) => {
    setPasswordError("");
    if (!(data.password === data["password-confirm"])) {
      methods.setError("password");
      methods.setError("password-confirm");
      setPasswordError("Passwords don't match.");
      return;
    }
  };

  return (
    <main className="flex justify-center flex-col items-center xl:py-[4.875rem] w-fit sm:w-screen px-[1.5rem] py-12 sm:px-0">
      <img src="/favicon.svg" className="w-[2rem] h-[1.6rem]" alt="logo" />
      <div className="mt-[5.183rem] min-w-fit  w-screen sm:w-[25rem] p-8 bg-Semi-Dark-Blue text-Pure-White rounded-[20px] flex-col">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <p className="text-lg font-light ">Sing Up</p>
            <div className=" mt-[2.5rem] space-y-[1.5rem]">
              <InputField text="Email Address" name="email" type="email" />
              <InputField text="Password" name="password" type="password" />
              <InputField
                text="Password"
                name="password-confirm"
                type="password"
              />
            </div>
            {error.length > 0 && (
              <p className="mt-8 text-sm text-Red">{error}</p>
            )}
            <div className="mt-[2.5rem] text-center text-sm font-light">
              <button className="bg-Red hover:text-Dark-Blue hover:bg-Pure-White transition-all py-[0.95rem] w-full rounded-md font-light ">
                Create an account
              </button>
              <p className=" mt-[1.5rem] flex flex-wrap gap-y-4 gap-x-[9px] justify-center">
                Already have an account?
                <Link href="/login" passHref>
                  <span className="cursor-pointer text-Red hover:opacity-80">
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </FormProvider>
      </div>
    </main>
  );
};

export default Signup;
