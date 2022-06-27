import React, { useEffect } from "react";
import cn from "classnames";
import s from "./index.module.scss";
import { Icon } from "@components";
interface InputData {
  name: string;
  required?: boolean;
}

export type IProps = {
  register: any;
  primaryInput: InputData;
  secondaryInputs?: [InputData, InputData, InputData];
  primaryValue?: string;
  secondaryValues?: [string, string, string];
  label?: string;
  fileType?: string;
};

export const InputFile: React.FC<IProps> = ({
  register,
  primaryInput,
  secondaryInputs,
  label = "fichiers acceptés : .jpg, .png, .pdf, .stl, .etc",
  // fileType = "file",
  primaryValue,
  secondaryValues,
}: IProps) => {
  useEffect(() => {
    console.log(primaryValue);
  }, [primaryValue]);

  return (
    <div className={s.container}>
      <label className={cn(s.input, s.primary)}>
        <div className={s.inputContent}>
          <div className={s.inputIcon}>
            <Icon type="drop-file" size="xxlarge" />
          </div>
          <div className={s.inputLabel}>{label}</div>
          <input
            {...register(primaryInput.name, {
              required: !!primaryInput.required,
            })}
            type="file"
            // accept={fileType}
            name={primaryInput.name}
          />
        </div>
        {primaryValue && (
          <div
            className={s.preview}
            style={{
              backgroundImage: `url(${primaryValue})`,
              background: "red",
            }}
          ></div>
        )}
      </label>
      {!!secondaryInputs?.length &&
        secondaryInputs.map(({ name, required }, index) => {
          return (
            <label
              className={cn(s.input, s.secondary, s[`secondary${index + 1}`])}
            >
              <div className={s.inputContent}>
                <div className={s.inputIcon}>
                  <Icon type="drop-file" size="xlarge" />
                </div>
                <input
                  {...register(name, { required: !!required })}
                  type="file"
                  // accept={fileType}
                  name={name}
                />
              </div>
            </label>
          );
        })}
    </div>
  );
};
