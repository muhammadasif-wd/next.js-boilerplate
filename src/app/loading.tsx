import {Spinner} from "@nextui-org/react";
import React from "react";
export default function Loading(): React.ReactNode {
  return (
    <div className="flex justify-center h-screen items-center">
      <Spinner color="primary" label="Quick Quest..." />
    </div>
  );
}
