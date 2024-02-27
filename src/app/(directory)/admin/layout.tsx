"use client";

import React from "react";

import Sidebar from "@/app/components/sidebar";
import Footer from "@/app/components/footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
  params: {
    tag: string;
    item: string;
  };
}) {
  return (
    <div>
      <section className="flex">
        <Sidebar sidebar="admin" />
        <main className="min-h-screen w-full md:m-5 mx-3 mt-16">{children}</main>
      </section>
      <Footer styles="" />
    </div>
  );
}
