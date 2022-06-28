import React, { useEffect } from "react";
import styles from "./index.module.scss";
import cn from "classnames";
import { Button, Input, InputGroup, InputFile } from "@components";
import { useForm, useFormContext, FormProvider } from "react-hook-form";
import { getBlopUrlFromFile } from "../../../../utility";

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
  defaultValues = {},
}: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues });

  const onSubmit = (e: any) => {
    console.log("submit");
    e.preventDefault();

    handleSubmit((d) => {
      console.log(d);
      handleStepSubmit(d);
    })(e);
  };

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <InputGroup
        placeholder="ex: Le radeau de la méduse"
        register={register}
        required={true}
        id="title"
        type="text"
        label="Titre de l'oeuvre"
        guidance={
          errors.title
            ? {
                type: "error",
                message:
                  "Le titre doit être rempli pour passer à l’étape suivante",
              }
            : null
        }
      />
      <InputGroup
        placeholder="Descriptif de mon oeuvre"
        register={register}
        id="description"
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

export const FormThree: React.FC<IRecapProps> = ({
  handleStepSubmit,
  handleBack,
  formState,
}: IRecapProps) => {
  console.log({ formState });
  return (
    <div className={cn(styles.formContainer, styles.recap)}>
      <div className={styles.imagesContainer}>
        {/* IMAGES */}

        {/* PRIMARY IMAGE  */}
        <div className={cn(styles.imageContainer, styles.primary)}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${getBlopUrlFromFile(
                formState["primary-image"][0]
              )})`,
            }}
          ></div>
        </div>

        {/* SECONDARY IMAGES */}
        {formState["secondary-image-1"][0] && (
          <div className={cn(styles.imageContainer, styles.secondary, styles.secondary1)}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${getBlopUrlFromFile(
                  formState["secondary-image-1"][0]
                )})`,
              }}
            ></div>
          </div>
        )}

        {formState["secondary-image-2"][0] && (
          <div className={cn(styles.imageContainer, styles.secondary, styles.secondary2)}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${getBlopUrlFromFile(
                  formState["secondary-image-2"][0]
                )})`,
              }}
            ></div>
          </div>
        )}

        {formState["secondary-image-3"][0] && (
          <div className={cn(styles.imageContainer, styles.secondary, styles.secondary3)}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${getBlopUrlFromFile(
                  formState["secondary-image-3"][0]
                )})`,
              }}
            ></div>
          </div>
        )}
      </div>

      <p className={styles.title}>{formState.title}</p>
      <p className={styles.description}>{formState.description}</p>
      <div className={styles.ctaContainer}>
        <Button
          label={"Précédent"}
          color="white"
          bg="dark"
          onClick={handleBack}
        />
        <Button
          label={"Valider"}
          color="white"
          bg="dark"
          onClick={() => {
            handleStepSubmit(null);
          }}
        />
      </div>
    </div>
  );
};
