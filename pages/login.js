/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import InputField from "../src/components/shared/input";
import { useForm, FormProvider } from "react-hook-form";

const Login = () => {
  const methods = useForm();

  const handleSubmit = (data) => {
    console.table(data);
  };

  return (
    <main className="flex justify-center flex-col items-center py-12 xl:py-[4.875rem] w-fit sm:w-screen px-[1.5rem] sm:px-0">
      <img src="/favicon.svg" className="w-[2rem] h-[1.6rem]" alt="logo" />
      <div className="mt-[3.65rem] min-w-fit xl:mt-[5.183rem] w-screen sm:w-[25rem] p-8 bg-Semi-Dark-Blue text-Pure-White rounded-[20px] flex-col">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <p className="text-lg font-light ">Login</p>
            <div className=" mt-[2.5rem] space-y-[1.5rem]">
              <InputField text="Email Address" name="email" />
              <InputField text="Password" name="password" type="password" />
            </div>
            <div className="mt-[2.5rem] text-center text-sm font-light">
              <button
                type="submit"
                className="bg-Red py-[0.95rem] hover:bg-Pure-White transition-all hover:text-Dark-Blue w-full rounded-md font-light "
              >
                Login to you account
              </button>
              <p className=" mt-[1.5rem] flex gap-y-4 flex-wrap gap-x-[9px] justify-center">
                Dont have an account?
                <Link href="/signup" passHref>
                  <span className="cursor-pointer text-Red hover:opacity-80">
                    Sign Up
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

export default Login;
