import { RiTwitterFill, RiGithubFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className="flex h-12.5 shrink-0 justify-between border-t border-slate-700">
      <div className="flex">
        <div className="flex w-36.5 items-center justify-center border-r border-slate-700">
          <p className="text-base font-normal text-slate-400">find me in:</p>
        </div>
        <a
          className="flex items-center justify-center border-r border-slate-700 p-4"
          href="https://x.com/WannabeRealnerD"
          rel="noopener noreferrer"
          target="_blank"
        >
          <RiTwitterFill className="size-4.5 text-slate-400" />
        </a>
      </div>
      <div className="flex border-l border-slate-700">
        <a
          className="flex items-center justify-center gap-1.5 border-r border-slate-700 p-4 text-slate-400"
          href="https://github.com/IwannabeRealnerD"
          rel="noopener noreferrer"
          target="_blank"
        >
          <p className="hidden sm:block">@IwannabeRealnerD</p>
          <RiGithubFill className="size-4.5" />
        </a>
      </div>
    </div>
  );
};
