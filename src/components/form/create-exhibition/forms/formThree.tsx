import React, { useState } from "react";
import styles from "./formThree.module.scss";
import { Button, InputGroup, ExpositionBoard, Map } from "@components";
import cardImg from "../../../../assets/images/cardImg.png"
import { FormProvider, useForm } from "react-hook-form";

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

interface IGalleryMap {
  id: string
  lat: number
  lng: number
  price: number
  name: string
}


export const FormThree: React.FC<IProps> = (   { handleStepSubmit, defaultValues = {} } ) => {

  const [orientation, setOrientation] = useState<string>('landscape')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues });

  const onSubmit = (event: any) => {
    event.preventDefault();

    handleSubmit((data) => {
      handleStepSubmit(data);
    })(event);
  };

  const galleries: IGalleryMap[] = [
    {
      id: "1",
      lat: 48.852614,
      lng: 2.3522219,
      price: 100,
      name: "Paris",
    },
    {
      id: "2",
      lat: 48.856614,
      lng: 2.3521219,
      price: 90,
      name: "Paris",
    },
    {
      id: "3",
      lat: 48.956614,
      lng: 2.3622219,
      price: 110,
      name: "Paris",
    },
  ]

  return (
    <FormProvider>
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <h1 className={styles.boardOrientation}>Orientation du panneau</h1>

      <div className={styles.boardOrientationChoice}>
        <div onClick={() => setOrientation('landscape')}>
          <input type="radio" id="cc" name="cc" value={'cc'} checked={orientation === 'landscape'}/>
          <label htmlFor="cc">Paysage</label>
        </div>

        <div onClick={() => setOrientation('portrait')} >
          <input type="radio" id="cc" name="cc" value={'cc'} checked={orientation === 'portrait'} />
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
        register={register}
        required={true}
      />

      <InputGroup
        placeholder="Selectionner la galerie"
        id="description"
        type="text"
        label="Galerie d'exposition*"
        guidance={null}
        register={register}
        required={true}
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
        <Button label={"Étape précédente"} color="black" bg="light" type="submit" />
        <Button label={"Étape suivante"} color="white" bg="dark" type="submit" />
      </div>
    </form>
     </FormProvider>
  )
}
