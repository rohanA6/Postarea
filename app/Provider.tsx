"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children?: ReactNode;
}

const quaryClient = new QueryClient();

const Provider = ({ children }: Props) => {
  return (
    <div>
      <ThemeProvider>
        <QueryClientProvider client={quaryClient}>
          <Toaster />
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
};

export default Provider;
