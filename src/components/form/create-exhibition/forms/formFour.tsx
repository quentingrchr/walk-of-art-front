import React, { useState } from "react";
import styles from "./formFour.module.scss";
import { Button, ExpositionBoard } from "@components";
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


export const FormFour: React.FC<IRecapProps> = () => {

  const [orientation, setOrientation] = useState<string>('landscape')

  return (
    <form className={styles.formContainer}>
      <div className={orientation === 'portrait' ? styles.portrait : ''}>
        <ExpositionBoard src={cardImg} alt={""} orientation={orientation} />
      </div>
      <h1 className={styles.title}>Exposition title</h1>

      <div className={styles.alignLeft}>
        <ul>
          <li>
            <strong className={styles.bold}>Votre profil facebook :</strong> https://facebook.com/mon-profil
          </li>
          <li>
            <strong className={styles.bold}>Votre site personnel :</strong> https://facebook.com/mon-profil
          </li>
          <li>
            <strong className={styles.bold}>Votre portfolio :</strong>https://facebook.com/mon-profil
          </li>
          <li>
            <strong className={styles.bold}>Votre boutique en ligne :</strong> https://facebook.com/mon-profil
          </li>
        </ul>

        <p className={styles.marginTop40}>Votre exposition à lieu à VILLE dans la gallerie n°NUMBER située à ADRESSE</p>
        <p className={styles.marginTop16}>Votre exposition aura lieu du STARTDATE au ENDDATE</p>
      </div>


      <div className={styles.containerOfButtons}>
        <Button label={"Étape suivante"} color="black" bg="light" type="submit" />
        <Button label={"Étape précédente"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  )
}
