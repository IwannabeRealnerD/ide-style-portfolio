import React, { FunctionComponent, ReactNode, useId } from "react";

import clsx from "clsx";

interface GlobalCheckBoxProps {
  isChecked: boolean;
  onChange: () => void;
  label: ReactNode;
  className?: string;
}

export const GlobalCheckBox: FunctionComponent<GlobalCheckBoxProps> = (props) => {
  const id = useId();

  return (
    <label className={clsx("group flex items-center gap-2 hover:cursor-pointer", props.className)} htmlFor={id}>
      <input
        checked={props.isChecked}
        className="peer hidden"
        id={id}
        type="checkbox"
        onChange={() => props.onChange()}
      />
      <div
        className={clsx("relative h-4.5 w-4.5 cursor-pointer rounded-xs border border-slate-500", {
          "after:border-r-0.25 after:border-b-0.25 after:absolute after:top-0.75 after:left-1.5 after:h-2.25 after:w-1 after:rotate-45 after:border after:border-t-0 after:border-l-0 after:border-white after:content-['']":
            props.isChecked,
          "bg-slate-500": props.isChecked,
        })}
      />
      <span className="text-base font-normal text-slate-400 group-hover:text-slate-600! peer-checked:text-white">
        {props.label}
      </span>
    </label>
  );
};
