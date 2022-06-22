import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { useFormContext } from "react-hook-form";

export type IProps = {
  formContent: any;
};

export const FormOne: React.FC<IProps> = ({ formContent }: IProps) => {
  const methods = useFormContext();
  const { reset, register } = methods;
  useEffect(() => {
    reset({ ...formContent.one });
  }, []);
  return (
    <div>
      Form One
      <label>Title</label>
      <input {...register("name", { required: true })} type="text" />
    </div>
  );
};

export const FormTwo: React.FC<IProps> = ({ formContent }: IProps) => {
  const methods = useFormContext();
  const { reset, register } = methods;
  useEffect(() => {
    reset({ ...formContent.two });
  }, []);
  return (
    <div>
      <label>Artiste</label>
      <input {...register("artist", { required: true })} type="text" />
    </div>
  );
};

export const FormThree: React.FC<IProps> = ({ formContent }: IProps) => {
  const methods = useFormContext();
  const { reset, register } = methods;
  useEffect(() => {
    reset({ ...formContent.three });
  }, []);
  return (
    <div>
      <label>Price</label>
      <input {...register("price", { required: true })} type="number" />
    </div>
  );
};
