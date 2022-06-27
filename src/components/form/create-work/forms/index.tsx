import React, { useEffect } from "react";
import s from "./index.module.scss";
import { Button, Input, InputGroup, InputFile } from "@components";
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
    <form className={s.formContainer} onSubmit={onSubmit}>
      <InputGroup
        placeholder="ex: Le radeau de la méduse"
        register={register}
        required={true}
        id="title"
        type="text"
        label="Titre de l'oeuvre"
        guidance={null}
      />
      <InputGroup
        placeholder="Descriptif de mon oeuvre"
        register={register}
        id="description"
        type="text"
        label="Descriptif"
        guidance={null}
      />
      <div className={s.ctaContainer}>
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

  console.log({ watchPrimaryImage, watchSecondaryImages });

  const onSubmit = (e: any) => {
    console.log("submit");
    e.preventDefault();
    handleSubmit((d) => {
      handleStepSubmit(d);
    })(e);
  };

  return (
    <form className={s.formContainer} onSubmit={onSubmit}>
      <InputFile
        register={register}
        primaryInput={{
          name: "primary-image",
          required: true,
        }}
        primaryValue={watchPrimaryImage}
        secondaryInputs={[
          { name: "secondary-image-1", required: false },
          { name: "secondary-image-2", required: false },
          { name: "secondary-image-3", required: false },
        ]}
        secondaryValues={watchSecondaryImages}
      />
      <div className={s.ctaContainer}>
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
    <form className={s.formContainer} onSubmit={onSubmit}>
      <label>Price</label>
      <input {...register("price", { required: true })} type="number" />
      <div className={s.ctaContainer}>
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
