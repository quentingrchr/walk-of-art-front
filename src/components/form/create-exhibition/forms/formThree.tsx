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

  const [workOrientation, setWorkOrientation] = useState<string>('portrait')
  const [availableGalleries, setAvailableGalleries] = useState<IGalleryMap[]>([])
  const [galleryId, setGalleryId] = useState<string>('');

  const setGalleryIdFromMap = (id: string): void => {
    setGalleryId(id)
  }

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
        galleryId,
        workOrientation
      }

      handleStepSubmit(formattedData);
    })(event);
  };

  const getAllAvailableGalleriesForSpecificDate = () => {
    const specificValuesToFindAvailableGalleries = {
      "dateStart": "2022-07-09",
      "dateEnd": "2022-07-11",
      "orientation": "portrait"
    }
    return axiosInstance.post('/galleries/available', specificValuesToFindAvailableGalleries)
      .then(response => {
        const correctDatas = setSpecificDateWhenDataIsAnEmptyArray(response)
    
        return setAvailableGalleries(correctDatas);
      }).catch((error) => {
        return error
      })
  }

  const setSpecificDateWhenDataIsAnEmptyArray = (response) => {

    if (response.data.length < 1) {
      const data = [{
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        longitude: 2.3522219,
        latitude: 48.856614,
        zoom: 3.5
      }]

      return data
    }
    return response.data
  }

  useEffect(() => {
    getAllAvailableGalleriesForSpecificDate()
  }, [])

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <h1 className={styles.boardOrientation}>Orientation du panneau</h1>

      <div className={styles.boardOrientationChoice}>
        <div onClick={() => setWorkOrientation('landscape')}>
          <input type="radio" id="landscape" name="landscape" value={'landscape'} checked={workOrientation === 'landscape'} />
          <label htmlFor="paysage">Paysage</label>
        </div>

        <div onClick={() => setWorkOrientation('portrait')} >
          <input type="radio" id="portrait" name="portrait" value={'portrait'} checked={workOrientation === 'portrait'} />
          <label htmlFor="portrait">Portrait</label>
        </div>
      </div>

      <div className={workOrientation === 'portrait' ? styles.portrait : ''}>
        <ExpositionBoard src={cardImg} alt={"tableau d'exposition d'une oeuvre"} orientation={workOrientation} />
      </div>

      <h2>Date d'exposition</h2>

      <div className={styles.choiceExpositionDates}>

        <InputGroup
          register={register}
          id="startExpositionDate"
          type="date"
          label="Début"
          guidance={
            errors.title
              ? {
                type: "error",
                message:
                  "La date de début doit être sélectionnée pour passer à l’étape suivante",
              }
              : null
          }
        />

        <InputGroup
          register={register}
          id="endExpositionDate"
          type="date"
          label="Fin"
          guidance={
            errors.title
              ? {
                type: "error",
                message:
                  "La date de fin doit être sélectionnée pour passer à l’étape suivante",
              }
              : null
          }
        />
      </div>

      <h1 className={styles.panneauOrientation}>Choix du panneau d'exposition</h1>
      <FormProvider {...methods}>
        <Map name={"mapOfGalleries"} galleries={availableGalleries} setGalleryId={setGalleryIdFromMap} />
      </FormProvider>

      <div className={styles.containerOfButtons}>
        <Button label={"Étape précédente"} color="black" bg="light" type="submit" onClick={handleBack} />
        <Button label={"Étape suivante"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  )
}
