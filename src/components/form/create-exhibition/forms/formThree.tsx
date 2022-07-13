import React, { useState, useEffect } from "react";
import styles from "./formThree.module.scss";
import { Button, InputGroup, ExpositionBoard, Map } from "@components";
import cardImg from "../../../../assets/images/cardImg.png"
import { FormProvider, useForm } from "react-hook-form";
import { BASE_API_URL } from "@const/index";
import axios from "axios";
import { axiosInstance } from "@utility/index"


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
  latitude: number
  longitude: number
  price: number
  name: string
}


export const FormThree: React.FC<IProps> = (   { handleStepSubmit, defaultValues = {} } ) => {

  console.log('formstate', { formState })

  const [orientation, setOrientation] = useState<string>('landscape')
  const [availableGalleries, setAvailableGalleries] = useState<IGalleryMap[]>()

  const methods = useForm();

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

  const getAllAvailableGalleries = () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTc3MjEyMDgsImV4cCI6MTY1NzcyNDgwOCwicm9sZXMiOlsiUk9MRV9BUlRJU1QiLCJST0xFX1VTRVIiXSwiaWQiOiIxZWNmZmI2Yy1kYTIyLTYxYTYtODdmNi05MzU1Mzg3OWViYTQiLCJlbWFpbCI6ImV4cG9AZG9tYWluLmZyIiwiZmlyc3RuYW1lIjoiZXhwbyIsImxhc3RuYW1lIjoiZG9tYWluciJ9.mdRNgg5JRWO2uUpGvCs8Ikv136rlaVqPzCis-02es6esvOAbmUqFAuzg0ufDTexbffl_I7_DuByxfa1MecOlKNgop4wqlcDmbxwxp1ou839XUBRb02V1u4EDH54hH6pTcQKnwoJ9lzSUGowvRMRr_PkP7wcJLMt2uf8xvqlfEershA0vr19-payL-BGkVSEDc8gy4WW-MkB2fOA3D-OgCOWhMQasFbpJHRWeQod4TrfG5FnUDyJU0LIQM7G4VMG0cRX3kIkEUFytMECnfbOUtQWmxOwoR8hIqef5K9w8deq11l0VWlrioICMQuGoY0arIkVz_riUDxcAeZyj8LRuLQ'
    const body = {
      "dateStart": "2022-07-12",
      "dateEnd": "2022-07-14",
      "orientation": "portrait"
    }
    return axiosInstance.post('/galleries/available', body)
      .then(response => {
        return setAvailableGalleries(response.data);
      }).catch((error) => {
        return error
      })
  }

  useEffect(() => {
    getAllAvailableGalleries()
    
  }, [])

  return (
    <FormProvider {...methods} className={styles.formContainer} onSubmit={onSubmit}>
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
     </FormProvider>
  )
}
