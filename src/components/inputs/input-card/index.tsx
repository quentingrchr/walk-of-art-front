import React from "react";
import styles from "./index.module.scss";
import { Text } from "@components";
import { InputTypes } from "../../../types";

export type IProps = {
  id: string;
  name?: string;
  placeholder: string;
  type?: InputTypes;
  register?: any;
  required?: boolean;
  label?: string;
  onChangeMethod: (any) => void;

};
export const InputCard = ({id, name, placeholder, type, register, required, label, onChangeMethod }) => {
  return (
    <div className={styles.fieldContainer}>
    <div className={styles.label}>
      <Text typo="label" color="black" tag="label">
       {label}
      </Text>
    </div>
    <div className={styles.inputContainer}>
      <input
          // {...register(id, {
          //   required: required ? true : false,
          // })}
          required={required}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChangeMethod}
          className={styles.input}
          maxLength={12}
        />
     </div>
  </div>
  )
}

