"use client";

import { ThemeProvider } from "next-themes";
import React from "react";
import { Toaster } from "react-hot-toast";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ThemeProvider>
        <Toaster />
        {children}
      </ThemeProvider>
    </div>
  );
};

export default Provider;
