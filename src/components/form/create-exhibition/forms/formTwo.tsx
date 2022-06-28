import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { Button, Input, InputGroup, Tooltip, InputFile} from "@components";
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
  const { register, handleSubmit, watch } = useForm({ mode: "onBlur", defaultValues });
  const watchPrimaryImage = watch("primary-image");
  const watchSecondaryImages = watch([
    "secondary-image-1",
    "secondary-image-2",
    "secondary-image-3",
  ]);

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
      <InputFile
        register={register}
        primaryInput={{
          name: "primary-image",
          required: true,
        }}
        primaryValue={watchPrimaryImage || defaultValues.primaryImage}
        secondaryInputs={[
          { name: "secondary-image-1", required: false },
          { name: "secondary-image-2", required: false },
          { name: "secondary-image-3", required: false },
        ]}
        secondaryValues={watchSecondaryImages || defaultValues.secondaryImages}
      />
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

