import React, { useRef } from "react";
import styles from "./index.module.scss";
import { Icon } from "@components";
import { InputTypes } from "../../../types";

export type IProps = {
  id: string;
  placeholder: string;
  value?: string;
  type?: InputTypes;
  register: any;
  required?: boolean;
};

export const InputSelect = ({ id, placeholder, register, required }: IProps) => {
  return (
    <div className={styles.container}>
      <input
        id={id}
        placeholder={placeholder}
        className={styles.input}
        type="text"
        // required={required}
        {...register(id, {
          required: required ? true : false,
        })}
      />

      <Icon type={"littleDownArrow"} size={"small"} />
    </div>
  );
};
