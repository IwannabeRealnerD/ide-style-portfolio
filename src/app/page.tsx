"use client";

import { FunctionComponent } from "react";
// import Image from "next/image";

// import BlueBlur from "@/app/IndexPage/BlueBlur.svg";
// import GreenBlur from "@/app/IndexPage/GreenBlur.svg";

// import { SnakeGame } from "./IndexPage/part/GamePart";

const Page: FunctionComponent = () => {
  return (
    <div className="relative mb-45 flex h-full justify-center gap-30 overflow-scroll px-40">
      <div className="md:mt-65 md:mb-20">
        <div>
          <p className="text-lg font-normal text-slate-400">Hi all. I am</p>
          <p className="mb-1 text-6xl text-slate-50">Khanne Jeong</p>
          <p className="mb-20 text-2xl text-indigo-500">{">"} Front-end developer</p>
          <p className="pb-1 text-base font-normal text-slate-400">
            {"// I don't know why I added game but enjoy it please lol. "}
          </p>
          <p className="pb-1 text-base font-normal text-slate-400">{"// you can also see it on my Github page. "}</p>
          <p className="text-base font-medium">
            <span className="text-indigo-500">const</span> <span className="text-teal-400">githubLink</span>
            <span className="text-gray-50"> = </span>{" "}
            <span className="text-rose-300">“https://github.com/example/url”</span>
          </p>
        </div>
      </div>
      <div className="md:mt-65 md:mb-20">
        {/* <SnakeGame /> */}
        <div className="md:mt-65 md:mb-20">{/* <Image fill alt="" src={GreenBlur} /> */}</div>
        <div className="md:mt-65 md:mb-20">{/* <Image fill alt="BlueBlur" src={BlueBlur} /> */}</div>
      </div>
    </div>
  );
};

export default Page;
