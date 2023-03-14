import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import MyPosts from "../components/MyPosts";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className=" my-10">
      <h1 className=" text-lg lg:text-xl font-semibold text-center  ">
        Hey👋!  <span className=" text-[19px] lg:text-[25px] font-bold text-violet-400"> {session?.user?.name}</span>
      </h1>
      <MyPosts />
    </div>
  );
};

export default Dashboard;
