"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { HiOutlineLogin } from "react-icons/hi";
import { IoPersonCircleSharp } from "react-icons/io5";
import toast from "react-hot-toast";

const Login = () => {
  return (
    <div className=" flex gap-2 items-center">
      <div
        onClick={() => toast.error("Please Login first...")}
        className=" text-[48px] text-violet-300 cursor-pointer"
      >
        <IoPersonCircleSharp />
      </div>
      <div>
        <button
          onClick={() => signIn()}
          className=" flex gap-1 items-center bg-violet-500 text-violet-100 rounded-full  p-2 lg:p-[9px] px-3 lg:px-5"
        >
          <p className=" hidden lg:block">Login</p>
          <HiOutlineLogin className=" text-lg lg:text-xl " />
        </button>
      </div>
    </div>
  );
};

export default Login;
