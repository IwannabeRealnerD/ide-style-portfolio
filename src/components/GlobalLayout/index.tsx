"use client";

import { FunctionComponent, ReactNode } from "react";

import { Footer } from "./internal/Footer";
import { NavBar } from "./internal/NavBar";

interface GlobalLayoutProps {
  children: ReactNode;
}

export const GlobalLayout: FunctionComponent<GlobalLayoutProps> = (props) => {
  return (
    <div className="bg-deep-navy border border-line rounded-lg flex flex-col m-10 ">
      <NavBar />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};
