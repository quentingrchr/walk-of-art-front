import React, { useRef } from "react";
import styles from "./index.module.scss";
import cx from "classnames";
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

const TextInput = ({ id, placeholder, register, required }: IProps) => {
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
    </div>
  );
};

const PasswordInput = ({ id, placeholder, register, required }: IProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className={styles.container}>
      <input
        id={id}
        placeholder={placeholder}
        className={styles.input}
        type={showPassword ? "text" : "password"}
        {...register(id, {
          required: required ? true : false,
        })}
      />
      <div
        className={cx("icon", "cta")}
        onClick={() => setShowPassword(!showPassword)}
      >
        <Icon type="avatar" size="large" />
      </div>
    </div>
  );
};

export const Input: React.FC<IProps> = ({ type, ...otherProps }: IProps) => {
  switch (type) {
    case "text":
      return <TextInput {...otherProps} />;
    case "password":
      return <PasswordInput {...otherProps} />;
    default:
      return <TextInput {...otherProps} />;
  }
};
