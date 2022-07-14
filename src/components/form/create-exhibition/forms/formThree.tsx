import React, { useState, useEffect } from "react";
import styles from "./formThree.module.scss";
import { Button, InputGroup, ExpositionBoard, Map } from "@components";
import cardImg from "../../../../assets/images/cardImg.png"
import { FormProvider, useForm } from "react-hook-form";
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


export const FormThree: React.FC<IProps> = ({ handleStepSubmit, handleBack, defaultValues = {} }) => {

  const [orientation, setOrientation] = useState<string>('landscape')
  const [availableGalleries, setAvailableGalleries] = useState<IGalleryMap[]>([])

  const methods = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues });

  const onSubmit = (event: any) => {
    event.preventDefault();

    handleSubmit((data) => {
      const formattedData = {
        ...data,
        parentName,
        orientation
      }
      
      handleStepSubmit(formattedData);
    })(event);
  };

  const getAllAvailableGalleries = () => {
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

  const [parentName, setParentName] = useState<string>('Mr John Obi');
  const updateName = (name: string): void => {
    setParentName(name)
  }

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <h1 className={styles.boardOrientation}>Orientation du panneau</h1>

      <div className={styles.boardOrientationChoice}>
        <div onClick={() => setOrientation('landscape')}>
          <input type="radio" id="cc" name="cc" value={'cc'} checked={orientation === 'landscape'} />
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
      <FormProvider {...methods}>
        <Map name={"mapOfGalleries"} galleries={availableGalleries} updateName={updateName} />
      </FormProvider>
      <h2>Date d'exposition</h2>

      <form action="" className={styles.choiceExpositionDates}>
        <div className={styles.containerExpositionDate}><label htmlFor="startExpositionDate">Début</label>

          <InputGroup
            register={register}
            id="startExpositionDate"
            type="date"
            label="Début"
            guidance={null}
            value={'2022-09-08'}
          />

          <InputGroup
            register={register}
            id="endExpositionDate"
            type="date"
            label="Fin"
            guidance={null}
          />
        </div>
      </form>

      <div className={styles.containerOfButtons}>
        <Button label={"Étape précédente"} color="black" bg="light" type="submit" onClick={handleBack}/>
        <Button label={"Étape suivante"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  )
}
