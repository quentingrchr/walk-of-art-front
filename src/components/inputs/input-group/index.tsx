import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { Input, InputDropdown, Text, Guidance } from "@components";
import { Semantic, SelectOption } from "@interfaces/index";
import { InputTypes } from "../../../types";


export interface IGuidance {
  type: Semantic;
  message: string;
}

export type IProps = {
  id: string;
  label?: string;
  type: InputTypes;
  placeholder?: string;
  guidance: IGuidance | null;
  selectOptions?: SelectOption[];
  register: any;
  control?: any;
  required?: boolean;
};

export const InputGroup: React.FC<IProps> = ({
  id,
  label,
  type,
  placeholder = "",
  register,
  control,
  guidance,
  selectOptions,
  required = false,
}: IProps) => {


  const getInput = () => {
    switch(type) {
      case "text":
      case "password":
      case "email":
      case "textarea":
        return (
          <Input
            register={register}
            placeholder={placeholder}
            value=""
            type={type}
            id={id}
            required={required}
          />
        )
      case "select":
        return (
          <InputDropdown 
            control={control}
            id={id}
            placeholder={placeholder}
            defaultValue={selectOptions ? selectOptions[0] : undefined}
            options={selectOptions}
            required={required}
          />
        )
    }
  }

  return (
    <div className={styles.container}>
      {label != undefined && (
        <div className={styles.label}>
          <Text typo="label" color="black" tag="label">
            {label}
          </Text>
        </div>
      )}
      {getInput()}
      {guidance != null && (
        <div className={styles.guidance}>
          <Guidance type={guidance.type}>{guidance.message}</Guidance>
        </div>
      )}
    </div>
  );
};
