"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { HiOutlineLogin } from "react-icons/hi";

type Props = {
  image: string;
  name: string;
};

const Logged = ({ image, name }:Props) => {
  return (
    <div className=" flex gap-2 items-center">
      <div>
        <img src={image} alt={'userImg'} className={"h-12 w-auto rounded-full"} />
      </div>
      <div>
        <button
          onClick={() => signOut()}
          className=" flex gap-1 items-center bg-violet-500 text-violet-100 rounded-full  p-2 lg:p-[9px] px-3 lg:px-5"
        >
          Login <HiOutlineLogin className=" text-lg lg:text-xl " />
        </button>
      </div>
    </div>
  );
};

export default Logged;
