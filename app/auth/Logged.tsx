"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

type User = {
  image: string;
};

const Logged = ({ image }: User) => {
  return (
    <div className=" flex gap-2 items-center">
      <div>
        <Link href={"/dashboard"}>
          <Image
            src={image}
            alt={"userImg"}
            height={35}
            width={35}
            className={" h-11 lg:h-12 w-auto rounded-full"}
          />
        </Link>
      </div>
      <div>
        <button
          onClick={() => signOut()}
          className=" flex gap-1 items-center bg-violet-500 text-violet-100 rounded-full  p-3 lg:p-[9px] px-3 lg:px-5"
        >
          <p className=" hidden lg:block">Logout</p>
          <HiOutlineLogout className=" text-lg lg:text-xl " />
        </button>
      </div>
    </div>
  );
};

export default Logged;
