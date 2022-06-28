import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { Button, Input, InputGroup } from "@components";
import { useForm, useFormContext, FormProvider } from "react-hook-form";

export type IProps = {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  defaultValues?: any;
};

export const FormOne: React.FC<IProps> = ({
  handleStepSubmit,
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
      <InputGroup
        placeholder="ex: Le radeau de la méduse"
        register={register}
        required
        id="title"
        type="text"
        label="Titre de l'oeuvre"
        guidance={null}
      />
      <InputGroup
        placeholder="Descriptif de mon oeuvre"
        register={register}
        id="title"
        type="text"
        label="Descriptif"
        guidance={null}
      />
      <div className={styles.ctaContainer}>
        <Button label={"Suivant"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  );
};
