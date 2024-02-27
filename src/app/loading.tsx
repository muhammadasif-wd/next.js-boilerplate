import React from "react";
import "../styles/loading.css";
export default function Loading(): React.ReactNode {
  return (
    <div className="absolute left-[50%] top-[50%]">
      <div className="loader">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
    </div>
  );
}
