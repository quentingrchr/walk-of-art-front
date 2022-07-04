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

export const FormThree: React.FC<IRecapProps> = ({
  handleStepSubmit,
  handleBack,
  formState,
}: IRecapProps) => {
  console.log({ formState });
  return (
    <div className={cn(styles.formContainer, styles.recap)}>
      <h1 className={styles.panneauOrientation}>Orientation du panneau</h1>

      <form action="" className={styles.orientationChoice}>
        <div>
          <input type="radio" id="cc" name="cc" value={'cc'} />
          <label htmlFor="cc">Paysage</label>
        </div>

        <div>
          <input type="radio" id="cc" name="cc" value={'cc'} />
          <label htmlFor="cc">Portrait</label>
        </div>

      </form>

      <img src="" alt="" />

      <h1 className={styles.panneauOrientation}>Choix du panneau d'exposition</h1>

      <p>Maps</p>

      <InputGroup
        placeholder="Selectionner la ville"
        id="description"
        type="text"
        label="Ville d'exposition*"
        guidance={null}
      />

      <InputGroup
        placeholder="Selectionner la galerie"
        id="description"
        type="text"
        label="Galerie d'exposition*"
        guidance={null}
      />

      <h2>Date d'exposition</h2>

      <form action="" className={styles.eheheh}>
        <div className={styles.x}><label htmlFor="startExpositionDate">Début</label>

          <input type="date" id="startExpositionDate" name="startExpositionDate"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31"></input></div>

        <div className={styles.x}>
          <label htmlFor="endExpositionDate">Fin</label>

          <input type="date" id="endExpositionDate" name="endExpositionDate"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31"></input>
        </div>
      </form>

      <div className={styles.y}>
        <Button label={"Étape suivante"} color="black" bg="light" type="submit" />
        <Button label={"Étape précédente"} color="white" bg="dark" type="submit" />
      </div>
    </div>
  );
};
