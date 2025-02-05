import { RiTwitterFill, RiGithubFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className="bg-deep-navy border-line flex h-12.5 justify-between border-t">
      <div className="flex">
        <div className="border-line flex w-36.5 items-center justify-center border-r">
          <p className="text-grey text-base font-normal">find me in:</p>
        </div>
        <a
          className="border-line flex w-14 items-center justify-center border-r"
          href="https://x.com/WannabeRealnerD"
          rel="noopener noreferrer"
          target="_blank"
        >
          <RiTwitterFill className="text-grey size-4.5" />
        </a>
      </div>
      <div className="border-line flex border-l">
        <a
          className="border-line text-grey flex items-center justify-center gap-1.5 border-r px-6"
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
