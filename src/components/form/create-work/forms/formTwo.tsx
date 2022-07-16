import React from "react";
import styles from "./index.module.scss";
import { Button, InputFile } from "@components";
import { useForm } from "react-hook-form";

export interface IProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  defaultValues?: any;
}

export interface IRecapProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  formState: any;
}

export const FormTwo: React.FC<IProps> = ({
    handleStepSubmit,
    handleBack,
    defaultValues = {},
  }: IProps) => {
    const { register, handleSubmit, watch } = useForm({
      mode: "onBlur",
      defaultValues,
    });
  
    const watchPrimaryImage = watch("primary-image");
    const watchSecondaryImages = watch([
      "secondary-image-1",
      "secondary-image-2",
      "secondary-image-3",
    ]);
  
    const onSubmit = (e: any) => {
      e.preventDefault();
  
      const requiredFieldIsAlreadyFilled = watch("primary-image");
  
      if (requiredFieldIsAlreadyFilled) {
        handleStepSubmit(watch());
      } else {
        handleSubmit((d) => {
          handleStepSubmit(d);
        })(e);
      }
    };
  
    return (
      <form className={styles.formContainer} onSubmit={onSubmit}>
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