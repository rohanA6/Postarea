"use client";

import React, { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className=" bg-violet-50 rounded-lg px-10 py-6">
      <p className=" font-tiltNeon font-semibold text-violet-700">
        What's on your mind ?
      </p>
      <div className=" bg-white my-2 ">
        <textarea
          className=" w-full border-2 rounded-md border-violet-300 text-base lg:text-lg p-2"
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

        <button className=" bg-violet-500 text-violet-50 font-semibold py-2 px-3 text-sm  rounded-lg">
          Add post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
