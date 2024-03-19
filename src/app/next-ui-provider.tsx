"use client";

import React from "react";
import {NextUIProvider} from "@nextui-org/react";

import {Theme} from "./theme";
import TopLoader from "./top-loader";

export function NextProvider({children}: {children: React.ReactNode}) {
  return (
    <NextUIProvider>
      <Theme>
        <TopLoader />
        {children}
      </Theme>
    </NextUIProvider>
  );
}
