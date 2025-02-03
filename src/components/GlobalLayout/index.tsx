"use client";

import { FunctionComponent, ReactNode } from "react";

import { Footer } from "./internal/Footer";
import { NavBar } from "./internal/NavBar";

interface GlobalLayoutProps {
  children: ReactNode;
}

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = (props) => {
  return (
    <div className="bg-deep-navy border-line m-10 flex flex-col rounded-lg border">
      <NavBar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};
