import React from "react";
import styles from "./index.module.scss";
import cx from "classnames";
import { Icon } from "@components";

import { InputTypes } from "../../../types";

export type IProps = {
  customInputTitle: string;
  idDescription: string;
  placeholder: string;
  idFieldValue: string;
  fieldValuePlaceHolder: string;
  value?: string;
  type?: InputTypes;
  register: any;
  required?: boolean;
  handleRemoveLink: (idFieldValue: string) => any;
};

const TextInput = ({ customInputTitle, idDescription, idFieldValue, placeholder, fieldValuePlaceHolder, register, required, handleRemoveLink }: IProps) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.customLinkTitle}>{ customInputTitle} 
        <span className={styles.trash} onClick={() => handleRemoveLink(idFieldValue)} >
        <Icon type="trash" size={"none"} />

        </span>
      </h4>
      <div className={styles.inputs}>

      <input
        id={idDescription}
        placeholder={placeholder}
        className={styles.input}
        type="text"
        // required={required}
        {...register(idDescription, {
          required: required ? true : false,
        })}
      />
      <input
        id={idFieldValue}
        placeholder={fieldValuePlaceHolder}
        className={cx(styles.input, styles.inputSecond)}
        type="text"
        // required={required}
        {...register(idFieldValue, {
          required: required ? true : false,
        })}
      />
      </div>
    </div>
  );
};


export const InputCustomDouble: React.FC<IProps> = ({ type, ...otherProps }: IProps) => {
      return <TextInput {...otherProps} />
};
