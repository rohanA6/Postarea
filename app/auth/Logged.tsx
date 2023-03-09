"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { HiOutlineLogin } from "react-icons/hi";

type Props = {
  image: string;
};

const Logged = ({ image }: Props) => {
  return (
    <div className=" flex gap-2 items-center">
      <div>
        <img
          src={image}
          alt={"userImg"}
          className={" h-11 lg:h-12 w-auto rounded-full"}
        />
      </div>
      <div>
        <button
          onClick={() => signOut()}
          className=" flex gap-1 items-center bg-violet-500 text-violet-100 rounded-full  p-3 lg:p-[9px] px-3 lg:px-5"
        >
          <p className=" hidden lg:block">Logout</p>
          <HiOutlineLogin className=" text-lg lg:text-xl " />
        </button>
      </div>
    </div>
  );
};

export default Logged;
