import React, { FunctionComponent, ReactNode, useId } from "react";

import clsx from "clsx";

import * as styles from "./style.css";

interface GlobalCheckBoxProps {
  isChecked: boolean;
  onChange: () => void;
  label: ReactNode;
}

export const GlobalCheckBox: FunctionComponent<GlobalCheckBoxProps> = (props) => {
  const id = useId();

  return (
    <label className={styles.container} htmlFor={id}>
      <input
        checked={props.isChecked}
        className={styles.hiddenCheckbox}
        id={id}
        type="checkbox"
        onChange={() => props.onChange()}
      />
      <div
        className={clsx(styles.customCheckbox, {
          [styles.checkIcon]: props.isChecked,
          [styles.checkedCheckBoxWrapper]: props.isChecked,
        })}
      />
      <span className={styles.label}>{props.label}</span>
    </label>
  );
};
