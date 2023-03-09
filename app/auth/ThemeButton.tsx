"use client";

import React from "react";
import { useTheme } from "next-themes";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className=" text-violet-500 border-2 border-violet-500 hover:bg-violet-500 hover:text-violet-50 p-2 lg:p-[9px] rounded-full" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? (
        <BsMoonFill className=" text-lg lg:text-xl " />
      ) : (
        <BsFillSunFill className="  text-lg lg:text-xl" />
      )}
    </div>
  );
};

export default ThemeButton;