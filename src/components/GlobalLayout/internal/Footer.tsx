import { RiTwitterFill, RiGithubFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className="bg-deep-navy border-t border-line flex h-12.5 justify-between">
      <div className="flex">
        <div className="border-r border-line flex items-center justify-center w-36.5">
          <p className="text-grey text-base font-normal">find me in:</p>
        </div>
        <a
          className="items-center border-r border-line flex justify-center w-14"
          href="https://x.com/WannabeRealnerD"
          rel="noopener noreferrer"
          target="_blank"
        >
          <RiTwitterFill className="size-4.5 text-grey" />
        </a>
      </div>
      <div className="border-l border-line flex">
        <a
          className="items-center border-r border-line flex justify-center px-6 gap-1.5 text-grey"
          href="https://github.com/IwannabeRealnerD"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p>@IwannabeRealnerD</p>
          <RiGithubFill className="size-4.5" />
        </a>
      </div>
    </div>
  );
};
