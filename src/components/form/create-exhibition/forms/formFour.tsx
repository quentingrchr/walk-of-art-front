import React, { useEffect, useState } from "react";
import styles from "./formFour.module.scss";
import { Button, ExpositionBoard, Tooltip } from "@components";
import cardImg from "../../../../assets/images/cardImg.png"
import { useForm } from "react-hook-form";
import { axiosInstance, getDateWithoutHours } from "@utility/index";

const toolTipText = "Veuillez vérifier miniteusement les informations concernant votre exposition car aucune modification ne sera possible par la suite."

export interface IProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  onClick: (any) => void;
  defaultValues?: any;
  formState: any;
}

export interface IRecapProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
}


export const FormFour: React.FC<IProps> = ({ handleBack, handleStepSubmit, defaultValues = {}, formState }: IProps) => {
  const [orientation, setOrientation] = useState<string>('portrait')

  const {
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues });

  const onSubmit = (event: any) => {
    event.preventDefault();

    handleSubmit(() => {
      createExhibition(formState);
    })(event);
  };

  const setWorkOrientationFromForm = () => {
    setOrientation(formState.orientation)
  }

  useEffect(() => {
    setWorkOrientationFromForm()
  })

  const createExhibition = (formState) => {
    
    const expectedBodyForExhibition = {
      "title": formState.expositionTitle,
      "description": formState.description,
      "dateStart": formState.startExpositionDate,
      "dateEnd": formState.endExpositionDate,
      "comment": formState.isVisitorsAutorise,
      "work": '/api/works/' + formState.selectedWorkId,
      "snapshot": [
        {
          "name": "facebook",
          "url": formState.facebook
        },
        {
          "name": "tipeee",
          "url": formState.personnalWebsite
        }
      ],
      "orientation": formState.workOrientation,
      "gallery": formState.galleryId
    }

    return axiosInstance.post('/exhibitions', expectedBodyForExhibition)
      .then(response => {
        return response.data
      }).catch((error) => {
        return error
      })
  }

  return (
    <>
      <div className={styles.toolTip}>
        <Tooltip text={toolTipText} icon="info" type="info" />
      </div>

      <form className={styles.formContainer} onSubmit={onSubmit}>
        <div className={orientation === 'portrait' ? styles.portrait : ''}>
          <ExpositionBoard src={cardImg} alt={""} orientation={orientation} />
        </div>
        <div className={styles.alignLeft}>
          <h1 className={styles.title}>{formState.title}</h1>
          <p className={styles.description}>{formState.description}</p>
          <ul className={styles.list}>
            <li>
              <strong className={styles.bold}>
                Votre profil facebook : 
              </strong>
              {formState.facebookUrl}
            </li>
            <li>
              <strong className={styles.bold}>
                Votre site personnel : 
              </strong>
              {formState.personnalWebsiteUrl}
            </li>
          </ul>

          {/* <p className={styles.marginTop40}>
            Votre exposition à lieu à
            <strong className={styles.bold}>VILLE</strong>
            dans la gallerie n°<strong className={styles.bold}>NUMBER</strong>
            située à <strong className={styles.bold}>ADRESSE</strong>
          </p> */}

          <p className={styles.marginTop16}>
            Votre exposition aura lieu du
            <strong className={styles.bold}> {getDateWithoutHours(formState.startExpositionDate)} </strong>
            au <strong className={styles.bold}> {getDateWithoutHours(formState.endExpositionDate)}</strong>
          </p>

          <div className={styles.ctaContainer}>
            <Button label={"Étape précédente"} color="black" bg="light" type="submit" onClick={handleBack} />
            <Button label={"Passer au paiement"} color="white" bg="dark" type="submit" />
          </div>
        </div>

      </form>
    </>
  )
}
