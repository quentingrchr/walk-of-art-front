import React, { useState } from "react";
import styles from "./formThree.module.scss";
import cn from "classnames";
import { Button, InputGroup, ExpositionBoard } from "@components";
import cardImg from "../../../../assets/images/cardImg.png"


export interface IProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  onClick: (any) => void;
  defaultValues?: any;
}

export interface IRecapProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  formState: any;
}


export const FormThree: React.FC<IRecapProps> = () => {

  const [orientation, setOrientation] = useState<string>('landscape')

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.boardOrientation}>Orientation du panneau</h1>

      <div className={styles.boardOrientationChoice}>
        <div onClick={() => setOrientation('landscape')}>
          <input type="radio" id="cc" name="cc" value={'cc'} />
          <label htmlFor="cc">Paysage</label>
        </div>

        <div onClick={() => setOrientation('portrait')} >
          <input type="radio" id="cc" name="cc" value={'cc'} />
          <label htmlFor="cc">Portrait</label>
        </div>
      </div>

      <div className={orientation === 'portrait' ? styles.portrait : ''}>
        <ExpositionBoard src={cardImg} alt={""} orientation={orientation} />
      </div>

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

      <form action="" className={styles.choiceExpositionDates}>
        <div className={styles.containerExpositionDate}><label htmlFor="startExpositionDate">Début</label>

          <input type="date" id="startExpositionDate" name="startExpositionDate"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31"></input></div>

        <div className={styles.containerExpositionDate}>
          <label htmlFor="endExpositionDate">Fin</label>

          <input type="date" id="endExpositionDate" name="endExpositionDate"
            value="2018-07-22"
            min="2018-01-01" max="2018-12-31"></input>
        </div>
      </form>

      <div className={styles.containerOfButtons}>
        <Button label={"Étape suivante"} color="black" bg="light" type="submit" />
        <Button label={"Étape précédente"} color="white" bg="dark" type="submit" />
      </div>
    </div>
  )
}
