import React from "react";
import cn from "classnames";
import s from "./index.module.scss";
import { Icon } from "@components";

export type IProps = {
  register: (id: string) => Object;
  primaryInput: string;
  secondaryInputs?: [string, string, string];
  label?: string;
  fileType?: string;
};

export const InputFile: React.FC<IProps> = ({
  register,
  primaryInput,
  secondaryInputs,
  label = "fichiers acceptés : .jpg, .png, .pdf, .stl, .etc",
  fileType = "image/png, image/jpg, image/gif, image/jpeg",
}: IProps) => {
  return (
    <div className={s.container}>
      <label className={cn(s.input, s.primary)}>
        <div className={s.inputContent}>
          <div className={s.inputIcon}>
            <Icon type="drop-file" size="xxlarge" />
          </div>
          <div className={s.inputLabel}>
            fichiers acceptés : .jpg, .png, .pdf, .stl, .etc
          </div>
          <input
            {...register(primaryInput)}
            type="file"
            accept={fileType}
            name={primaryInput}
          />
        </div>
      </label>
      {!!secondaryInputs?.length &&
        secondaryInputs.map((inputName, index) => {
          return (
            <label
              className={cn(s.input, s.secondary, s[`secondary${index + 1}`])}
            >
              <div className={s.inputContent}>
                <div className={s.inputIcon}>
                  <Icon type="drop-file" size="xlarge" />
                </div>
                <input
                  {...register(inputName)}
                  type="file"
                  accept={fileType}
                  name={inputName}
                />
              </div>
            </label>
          );
        })}
      <label className={cn(s.input, s.secondary, s.secondary2)}>
        <div className={s.inputContent}>
          <div className={s.inputIcon}>
            <Icon type="drop-file" size="xlarge" />
          </div>
          <input
            type="file"
            accept="image/png, image/jpg, image/gif, image/jpeg"
            name="image"
          />
        </div>
      </label>
      <label className={cn(s.input, s.secondary, s.secondary3)}>
        <div className={s.inputContent}>
          <div className={s.inputIcon}>
            <Icon type="drop-file" size="xlarge" />
          </div>
          <input
            type="file"
            accept="image/png, image/jpg, image/gif, image/jpeg"
            name="image"
          />
        </div>
      </label>
    </div>
  );
};
