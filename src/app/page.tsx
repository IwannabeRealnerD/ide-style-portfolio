"use client";

import { FunctionComponent } from "react";
import Image from "next/image";

import BlueBlur from "@/app/IndexPage/BlueBlur.svg";
import GreenBlur from "@/app/IndexPage/GreenBlur.svg";

import { SnakeGame } from "./IndexPage/part/GamePart";

const Page: FunctionComponent = () => {
  return (
    <div className="relative mb-45 flex justify-center gap-30 px-40">
      <div className="md:mt-65 md:mb-20">
        <div>
          <p className="text-light-grey text-lg font-normal">Hi all. I am</p>
          <p className="text-light-grey mb-1 text-6xl">Khanne Jeong</p>
          <p className="text-lavender mb-20 text-2xl">{">"} Front-end developer</p>
          <p className="text-grey pb-1 text-base font-normal">
            {"// I don't know why I added game but enjoy it please lol. "}
          </p>
          <p className="text-grey pb-1 text-base font-normal">{"// you can also see it on my Github page. "}</p>
          <p className="text-base font-medium">
            <span className="text-lavender">const</span> <span className="text-turquoise">githubLink</span>
            <span className="text-white"> = </span>{" "}
            <span className="text-orange">“https://github.com/example/url”</span>
          </p>
        </div>
      </div>
      <div className="md:mt-65 md:mb-20">
        <SnakeGame />
        <div className="md:mt-65 md:mb-20">
          <Image fill alt="" src={GreenBlur} />
        </div>
        <div className="md:mt-65 md:mb-20">
          <Image fill alt="BlueBlur" src={BlueBlur} />
        </div>
      </div>
    </div>
  );
};

export default Page;
