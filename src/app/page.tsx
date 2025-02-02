"use client";

import { FunctionComponent } from "react";
import Image from "next/image";

import BlueBlur from "@/app/IndexPage/BlueBlur.svg";
import GreenBlur from "@/app/IndexPage/GreenBlur.svg";

import { SnakeGame } from "./IndexPage/part/GamePart";

const Page: FunctionComponent = () => {
  return (
    <div className="flex gap-30 justify-center mb-45 px-40 relative">
      <div className="md:mt-65 md:mb-20">
        <div>
          <p className="text-light-grey text-lg font-normal">Hi all. I am</p>
          <p className="text-light-grey text-6xl mb-1">Khanne Jeong</p>
          <p className="text-lavender text-2xl mb-20">{">"} Front-end developer</p>
          <p className="font-normal text-grey text-base pb-1">
            {"// I don't know why I added game but enjoy it please lol. "}
          </p>
          <p className="font-normal text-grey text-base pb-1">{"// you can also see it on my Github page. "}</p>
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
