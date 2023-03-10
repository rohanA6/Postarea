import Link from "next/link";
import React from "react";
import Login from "./Login";
import ThemeButton from "./ThemeButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Logged from "./Logged";

const Nav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className=" flex justify-between items-center">
      <div>
        <Link href={"/"}>
          <h1 className=" text-violet-500 font-bold lg:font-semibold font-tiltNeon text-[34px] lg:text-[40px]">
            Postarea
          </h1>
        </Link>
      </div>

      <div className=" flex gap-2 items-center">
        <div>
          {!session?.user && <Login />}
          {session?.user && <Logged image={session?.user?.image || ""} />}
        </div>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Nav;
