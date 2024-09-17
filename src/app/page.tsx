"use client";

import { FunctionComponent } from "react";
import Image from "next/image";

import BlueBlur from "@/app/IndexPage/BlueBlur.svg";
import GreenBlur from "@/app/IndexPage/GreenBlur.svg";

import { GamePart } from "./IndexPage/part/GamePart";
import * as styles from "./IndexPage/style.css";

const Page: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.greetingContainer}>
          <p className={styles.greetingMessage1}>Hi all. I am</p>
          <p className={styles.greetingMessage2}>Khanne Jeong</p>
          <p className={styles.greetingMessage3}>{">"} Front-end developer</p>
        </div>
        <div>
          <p className={styles.subMessage1}>{"// I don't know why I added game but enjoy it please lol. "}</p>
          <p className={styles.subMessage2}>{"// you can also see it on my Github page. "}</p>
          <p className={styles.code}>
            <span>const</span> <span>githubLink</span>
            <span> = </span> <span>“https://github.com/example/url”</span>
          </p>
        </div>
      </div>
      <div className={styles.gameContainer}>
        <GamePart />
        <div className={styles.greenBlur}>
          <Image fill alt="" src={GreenBlur} />
        </div>
        <div className={styles.blueBlur}>
          <Image fill alt="BlueBlur" src={BlueBlur} />
        </div>
      </div>
    </div>
  );
};

export default Page;
