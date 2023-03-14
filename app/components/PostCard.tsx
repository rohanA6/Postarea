"use cient";

import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  postTitle: string;
  avatar: string;
  id: string;
}

const PostCard = ({ name, postTitle, avatar, id }: Props) => {
  return (
    <div className=" bg-violet-50 text-black rounded-lg my-4 p-5">
      <div className=" flex items-center gap-1">
        <img
          className=" h-[30px] lg:h-[35px] w-auto rounded-full"
          src={avatar}
          alt="user image"
        />
        <p className=" text-gray-500 underline text-sm  lg:text-base">{name}</p>
      </div>

      <div className="  text-baselg:text-lg font-semibold p-2 lg:p-4">
        <p>{postTitle}</p>
      </div>

      <div>
        <Link href={`/post/${id}`}>
          <p className=" text-violet-700 text-xs font-semibold mt-2">
            Comment <span className=" text-sm">(0)</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
