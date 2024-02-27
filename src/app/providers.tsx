"use client";

import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import React from "react";

import TopLoader from "./top-loader";

export function Providers({children}: {children: React.ReactNode}) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <TopLoader />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
