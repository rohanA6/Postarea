"use client";

import React, { useState } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  let toastPostID: string;

  //Create Post
  const { mutate } = useMutation(
    async (title: string) => await axios.post("/api/posts/addPost", { title }),

    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message);
        }
        setIsDisabled(false);
      },

      onSuccess: (data) => {
        // queryClient.invalidateQueries(["posts"]);
        toast.success("Post has been made ✌️");
        setTitle("");
        setIsDisabled(false);
      },
    }
  );

  //Submit handler
  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    toastPostID = toast.loading("Posting...", {duration: 1000});
    mutate(title);
  };

  return (
    <form onSubmit={submitPost} className=" bg-violet-50 rounded-lg px-10 py-6">
      <p className=" font-tiltNeon font-semibold text-violet-700">
        What's on your mind ?
      </p>
      <div className="  my-2 ">
        <textarea
          className=" w-full border-2 rounded-md border-violet-300 dark:bg-white text-black  text-base lg:text-lg p-2"
          name="post"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"write your thoughts..."}
        />
      </div>
      <div className=" flex justify-between items-center mt-3">
        <p
          className={`  font-semibold text-sm ${
            title.length > 300 ? "text-red-700" : "text-violet-400"
          }`}
        >{`${title.length}/300`}</p>

        <button
          disabled={isDisabled}
          type="submit"
          className=" bg-violet-500 text-violet-50 font-semibold py-2 px-3 text-sm  rounded-lg disabled:opacity-25"
        >
          Add post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
