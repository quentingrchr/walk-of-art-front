import React from "react";
import styles from "./index.module.scss";
import cx from "classnames";
import { Icon } from "@components";
import { InputTypes } from "../../../types";
import { Icons } from "@interfaces/index";

export type IProps = {
  id: string;
  placeholder: string;
  value?: string;
  type?: InputTypes;
  register?: any;
  required?: boolean;
  icon?: Icons
};

const TextInput = ({ id, placeholder, register, required, icon }: IProps) => {
  return (
    <div className={styles.container}>
      <input
        id={id}
        placeholder={placeholder}
        className={styles.input}
        type="text"
        // required={required}
        // {...register(id, {
        //   required: required ? true : false,
        // })}
      />
      {
        icon && (
          <div
            className={styles.icon}
          >
            <Icon type={icon} size="large" />
          </div>
        )
      }
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

const TextareaInput = ({ id, placeholder, register, required }: IProps) => {

  return (
    <div className={styles.container}>
      <textarea
        id={id}
        placeholder={placeholder}
        className={cx(styles.input, styles.textarea)}
        {...register(id, {
          required: required ? true : false,
        })}
      />
    </div>
  );
};

export const Input: React.FC<IProps> = ({ type, ...otherProps }: IProps) => {
  switch (type) {
    case "text":
      return <TextInput {...otherProps} />
    case "password":
      return <PasswordInput {...otherProps} />
    case "textarea":
      return <TextareaInput {...otherProps} />
    default:
      return <TextInput {...otherProps} />
  }
};
