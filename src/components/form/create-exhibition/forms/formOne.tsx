import React, { useEffect } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Button, Input, InputGroup, InputFile, ExpoCard } from "@components";
import { useForm, useFormContext, FormProvider } from "react-hook-form";
import { getBlopUrlFromFile } from "../../../../utility";
import Xx from '../../../../assets/images/artwork.png'
import { Checkbox } from "@components/checkbox";

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

export const FormOne: React.FC<IProps> = ({
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
  
      const requiredFieldIsAlreadyFilled = watch("primary-image").length > 0;
  
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
        <div className={styles.selectWorks}>
        <div className={styles.huit}>enifj</div>
        <div className={styles.huit}>enifj</div>
        <div className={styles.huit}>enifj</div>
        <div className={styles.huit}>enifj</div>
        <div className={styles.huit}>enifj</div>
        <div className={styles.huit}>enifj</div>
        <div className={styles.huit}>enifj</div>
        <div className={styles.huit}>enifj</div>
        <div className={styles.huit}>enifj</div>
        <div className={styles.huit}>enifj</div>
      </div>

<InputGroup
          placeholder="Titre de l'exposition"
          register={register}
          id="description"
          type="text"
          label="Titre de l'exposition"
          guidance={null}
        />
        <InputGroup
          placeholder="Description de mon exposition..."
          register={register}
          id="description"
          type="text"
          label="Description de mon exposition"
          guidance={null}
        />

        <Checkbox checkboxName={"autoriseVistisors"} checkboxLabel={"Autoriser les commentaires des visiteurs"} />
        <Checkbox checkboxName={"showTitle"} checkboxLabel={"Afficher le titre de mon exposition aux visiteurs"} />

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