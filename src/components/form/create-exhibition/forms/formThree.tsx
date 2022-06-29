import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { Button, Input, InputGroup } from "@components";
import { useForm, useFormContext, FormProvider } from "react-hook-form";

export type IProps = {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  defaultValues?: any;
};

export const FormThree: React.FC<IProps> = ({
  handleStepSubmit,
  handleBack,
  defaultValues = {},
}: IProps) => {
  const { register, handleSubmit } = useForm({ mode: "onBlur", defaultValues });

  const onSubmit = (e: any) => {
    console.log("submit");
    e.preventDefault();
    handleSubmit((d) => {
      handleStepSubmit(d);
    })(e);
  };

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <label>Price</label>
      <input {...register("price", { required: true })} type="number" />
      <div className={styles.ctaContainer}>
        <Button
          label={"Précédent"}
          color="white"
          bg="dark"
          onClick={handleBack}
        />
        <Button label={"Suivant"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  );
};
