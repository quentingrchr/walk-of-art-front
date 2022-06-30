import React, { useRef } from "react";
import styles from "./index.module.scss";
import { Icon } from "@components";
import cn from "classnames";

export type IProps = {
  id: string;
  placeholder: string;
  value?: string;
};

export const Search = ({ id, placeholder }: IProps) => {
  return (
    <div className={styles.container}>
      <Icon type="searchIcon" size={"small"} />

      <input
        id={id}
        placeholder={placeholder}
        className={cn(styles.input, styles.d)}
        type="text"
      />
    </div>
  );
};
