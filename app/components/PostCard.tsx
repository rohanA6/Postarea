"use cient";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type EditProps = {
  id: string
  avatar: string
  name: string
  postTitle: string
  Comment?: {
    id: string
    postId: string
    userId: string
  }[]
}


const PostCard = ({ name, postTitle, avatar, id, Comment }: EditProps) => {
  return (
    <div className=" bg-violet-50 text-black rounded-lg my-4 p-5">
      <div className=" flex items-center gap-1">
        <Image
          className=" h-[30px] lg:h-[35px] w-auto rounded-full"
          height={35}
          width={35}
          src={avatar}
          alt="img"
        />
        <p className=" text-gray-500 underline text-sm  lg:text-base">{name}</p>
      </div>

      <div className="  text-baselg:text-lg font-semibold p-2 lg:py-5">
        <p>{postTitle}</p>
      </div>

      <div className=" -mt-4">
        <Link href={`/post/${id}`}>
          <p className=" text-violet-700 text-xs font-semibold mt-2">
            Comment <span className=" text-sm">({Comment?.length})</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
