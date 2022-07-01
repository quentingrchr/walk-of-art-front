import React, { useRef } from "react";
import styles from "./index.module.scss";
import { Icon } from "@components";
import cn from "classnames";

export type IProps = {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e) => void;
};

export const Search = ({ id, placeholder, value, onChange }: IProps) => {
  return (
    <div className={styles.container}>
      <Icon type="searchIcon" size={"small"} />

      <input
        id={id}
        placeholder={placeholder}
        className={cn(styles.input, styles.d)}
        type="text"
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}
