import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { Button, Input, InputGroup, Tooltip, MediaSelector} from "@components";
import { useForm, useFormContext, FormProvider } from "react-hook-form";

export type IProps = {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  defaultValues?: any;
};

const toolTipText = "Votre mot de passe doit contenir au minimum 8 caractères dont au moins une lettre majuscule, un chiffre et un caractère spécial."

export const FormTwo: React.FC<IProps> = ({
  handleStepSubmit,
  handleBack,
  defaultValues = {},
}: IProps) => {
  const { register, handleSubmit } = useForm({ mode: "onBlur", defaultValues });

  const onSubmit = (event: any) => {
    console.log("submit");
    event.preventDefault();
    handleSubmit((d) => {
      handleStepSubmit(d);
    })(event);
  };

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      {/* <label>Artiste</label>
      <input {...register("artist", { required: true })} type="text" /> */}ous
      <Tooltip type="info" text={toolTipText} classname={styles.toolTip}/>
     <MediaSelector/>
     <MediaSelector/>
     <MediaSelector/>
     <MediaSelector/>
     <MediaSelector/>
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

