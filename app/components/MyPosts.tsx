"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthPosts } from "../types/AuthPosts";
import EditPost from "../dashboard/EditPost";

//Fetch My Posts
const fetchAuthPost = async () => {
  const response = await axios.get("/api/posts/authPosts");
  return response.data;
};

const MyPosts = () => {
  const { data, error, isLoading } = useQuery<AuthPosts>({
    queryFn: fetchAuthPost,
    queryKey: ["auth-posts"],
  });

  if (error) return error;
  if (isLoading)
    return (
      <div className=" my-20">
        <p className=" text-violet-300 font-bold flex justify-center">
          Loading....
        </p>
      </div>
    );
  console.log(data);

  if (data)
    return (
      <div className=" mt-8 lg:mt-10">
        {data?.post?.map((posts) => (
          <EditPost
            key={posts.id}
            postTitle={posts.title}
            id={posts.id}
            avatar={data.image}
            name={data.name}
            Comment={posts.comment}
          />
        ))}
      </div>
    );
};

export default MyPosts;
