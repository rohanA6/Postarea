"use client";

import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";

const AllPost = () => {
  //Fetch all posts
  const allpost = async () => {
    const response = await axios.get("/api/posts/getPost");
    return response.data;
  };

  const { data, error, isLoading } = useQuery({
    queryFn: allpost,
    queryKey: ["posts"],
  });
  console.log(data);

  if (error) return error;
  if (isLoading) return "Loading....";

  return (
    <div>
      {data?.map((post) => (
        <PostCard
          key={post.id}
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
