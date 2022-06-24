import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { Button, Input, InputGroup } from "@components";
import { useForm, useFormContext, FormProvider } from "react-hook-form";

export type IProps = {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  defaultValues?: any;
};

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
      <label>Artiste</label>
      <input {...register("artist", { required: true })} type="text" />
      <div className={styles.ctaContainer}>
      <InputGroup
        placeholder="ex: Le radeau de la méduse"
        register={register}
        required
        id="title"
        type="text"
        label="Titre de l'oeuvre"
        guidance={null}
      /> <InputGroup
      placeholder="ex: Le radeau de la méduse"
      register={register}
      required
      id="title"
      type="text"
      label="Titre de l'oeuvre"
      guidance={null}
    /> <InputGroup
    placeholder="ex: Le radeau de la méduse"
    register={register}
    required
    id="title"
    type="text"
    label="Titre de l'oeuvre"
    guidance={null}
  /> <InputGroup
  placeholder="ex: Le radeau de la méduse"
  register={register}
  required
  id="title"
  type="text"
  label="Titre de l'oeuvre"
  guidance={null}
/>
<InputGroup
        placeholder="ex: Le radeau de la méduse"
        register={register}
        required
        id="title"
        type="text"
        label="Titre de l'oeuvre"
        guidance={null}
      />
      </div>
    </form>
  );
};

