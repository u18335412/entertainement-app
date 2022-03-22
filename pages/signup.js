/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import InputField from "../src/components/shared/input";
import { useForm, FormProvider } from "react-hook-form";

const Signup = () => {
  const methods = useForm();

  const handleSubmit = (data) => {
    console.table(data);
  };

  return (
    <main className="flex justify-center flex-col items-center py-[4.875rem]">
      <img src="/favicon.svg" className="w-[2rem] h-[1.6rem]" alt="logo" />
      <div className="mt-[5.183rem] w-[25rem] p-8 bg-Semi-Dark-Blue text-Pure-White rounded-[20px] flex-col">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <p className=" text-lg font-light">Sing Up</p>
            <div className=" mt-[2.5rem] space-y-[1.5rem]">
              <InputField text="Email Address" name="email" type="email" />
              <InputField text="Password" name="password" type="password" />
              <InputField
                text="Password"
                name="password-confirm"
                type="password"
              />
            </div>
            <div className="mt-[2.5rem] text-center text-sm font-light">
              <button className="bg-Red py-[0.95rem] w-full rounded-md font-light ">
                Create an account
              </button>
              <p className=" mt-[1.5rem] flex gap-x-[9px] justify-center">
                Already have an account?
                <Link href="/login" passHref>
                  <span className="text-Red cursor-pointer hover:opacity-80">
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
