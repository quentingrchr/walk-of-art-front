
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
export const FormTwo: React.FC<IProps> = ({
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
          placeholder="https://facebook.com/mon-profil"
          register={register}
          required={true}
          id="title"
          type="text"
          label="URL de mon profil Facebook"
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
          placeholder="https://twitter.com/mon-profil"
          register={register}
          id="description"
          type="text"
          label="URL de mon profil Twitter"
          guidance={null}
        />
        <InputGroup
          placeholder="https://mon-site-personnel.com/"
          register={register}
          id="description"
          type="text"
          label="URL de mon site personnel"
          guidance={null}
        />
          <InputGroup
            placeholder="https://mon-portoflio.com/"
            register={register}
            id="description"
            type="text"
            label="URL de mon portfolio"
            guidance={null}
          />
        <InputGroup
          placeholder="https://ma-boutique-en-ligne.com/"
          register={register}
          id="description"
          type="text"
          label="URL de ma boutique en ligne"
          guidance={null}
        />
        <InputGroup
          placeholder="https://ma-boutique-en-ligne.com/"
          register={register}
          id="description"
          type="text"
          label="URL de ma boutique en ligne"
          guidance={null}
        />
        <InputGroup
          placeholder="Texte avant le lien de donation"
          register={register}
          id="description"
          type="text"
          guidance={null}
        />
                  <Button label={"Ajouter un lien personnel"} color="white" bg="dark" type="submit" />

        <div className={styles.ctaContainer}>
          <Button label={"Suivant"} color="white" bg="dark" type="submit" />
          <Button label={"Suivant"} color="white" bg="dark" type="submit" />
        </div>
      </form>
    );
  };