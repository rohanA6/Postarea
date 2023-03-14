"use client";

import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";
import { PostType } from "../types/Post";

const AllPost = () => {
  //Fetch all posts
  const allpost = async () => {
    const response = await axios.get("/api/posts/getPost");
    return response.data;
  };

  const { data, error, isLoading } = useQuery<PostType[]>({
    queryFn: allpost,
    queryKey: ["posts"],
  });
  console.log(data);

  if (error) return error;
  if (isLoading)
    return (
      <div className=" my-20">
        <p className=" text-violet-300 font-bold flex justify-center">
          Loading....
        </p>
      </div>
    );

  if (data)
    return (
      <div className=" mt-8 lg:mt-10">
        {data?.map((post) => (
          <PostCard
            key={post.id}
            Comment={post.comment}
            name={post.user.name}
            avatar={post.user.image}
            postTitle={post.title}
            id={post.id}
          />
        ))}
      </div>
    );
};

export default AllPost;
