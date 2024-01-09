import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="flex flex-col lg:flex-row flex-1">
      <div className="basis-1/2 grow">
        <div className="h-[40vh] lg:h-full w-full bg-no-repeat bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
      </div>
      <div className="basis-1/2 my-10 lg:my-0 flex items-center justify-center">
        <div className="w-[456px]">
          <form className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-semibold text-[#141718] text-4xl leading-10 tracking-tight">
                Sign Up
              </h1>
              <p className="text-base font-normal text-[#6C7275] leading-6">
                Don’t have an accout yet?{" "}
                <Link to="signup" className="text-[#38CB89]">
                  Sign up
                </Link>
              </p>
            </div>
            <div>
              <label className="mb-2 block text-lg font-medium">
                Email or Username
              </label>
              <input
                type="text"
                className="text-base block w-full py-2 border-b focus:border-b-gray-500 outline-none"
                placeholder="Your usernam or email address"
              />
            </div>
            <div>
              <label className="mb-2 block text-lg font-medium">Password</label>
              <input
                type="password"
                className="text-base block w-full py-2 border-b focus:border-b-gray-500 outline-none"
                placeholder="*****"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="h-6 w-6" />
                <label className="text-lg font-normal text-[#6C7275] leading-5">
                  Remember me
                </label>
              </div>
              <Link className="font-bold text-[#141718]" to="#">
                Forgot Password?
              </Link>
            </div>
            <button className="py-2.5 px-10 rounded-lg bg-black text-white w-full font-medium">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
