import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import foStyles from "./formOne.module.scss"
import cn from "classnames";
import { Button, Input, InputGroup, InputFile, ExpoCard,  } from "@components";
import { useForm, useFormContext, FormProvider } from "react-hook-form";
import { getBlopUrlFromFile } from "../../../../utility";
import Xx from '../../../../assets/images/artwork.png'
import { Checkbox } from "@components/checkbox";

export interface IProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  defaultValues?: any;
}

interface SelectWorkProps {
  selectedWork?: boolean;
  setSelectedWork: (boolean) => void;
}

export interface IRecapProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  formState: any;
}


const SelectWorks: React.FC<SelectWorkProps> = ({
  selectedWork,
  setSelectedWork,
}: SelectWorkProps) => {

  const handleImageClick = () => {
    setSelectedWork(true)
  }
  const handleBack = () => {
    setSelectedWork(false)
  }

  const titleText = selectedWork ? "Choix de l’oeuvre" : "Sélection de l’oeuvre"
  return (
  <div>
      <h3 className={foStyles.selectionTitle}>{titleText}</h3>
      <div className={foStyles.selectionContainer}>
        { 
        selectedWork ?
          <div className={foStyles.selectionChoice}>
                 <div className={foStyles.huit}>enifj</div>

                 <div className={foStyles.ctas}>
                 <Button label={"Utiliser le titre comme titre d’exposition"} color="black" bg="light" type="submit" />
                 <div className={foStyles.modify} onClick={handleBack}>
                 <Button label={"Modifier"} color="white" bg="dark" type="submit"  />
                 </div>

                 </div>
          </div> 
        : 
            <div className={foStyles.selectWorks}>
              <div className={foStyles.huit} onClick={handleImageClick}>enifj</div>
              <div className={foStyles.huit} onClick={handleImageClick}>enifj</div>
              <div className={foStyles.huit} onClick={handleImageClick}>enifj</div>
              <div className={foStyles.huit} onClick={handleImageClick}>enifj</div>
              <div className={foStyles.huit} onClick={handleImageClick}>enifj</div>
              <div className={foStyles.huit} onClick={handleImageClick}>enifj</div>
              <div className={foStyles.huit} onClick={handleImageClick}>enifj</div>
              <div className={foStyles.huit} onClick={handleImageClick}>enifj</div>     
            </div>
        }
      </div>
    </div>
  )
};

export const FormOne: React.FC<IProps> = ({
    handleStepSubmit,
    handleBack,
    defaultValues = {},
  }: IProps) => {

    const [selectedWork, setSelectedWork] = useState(false)
    const { register, handleSubmit, watch } = useForm({
      mode: "onBlur",
      defaultValues,
    });
  
    const watchPrimaryImage = watch("primary-image");
    const watchSecondaryImages = watch([
      "secondary-image-1",
      "secondary-image-2",
      "secondary-image-3",
    ]);
  
    const onSubmit = (e: any) => {
      e.preventDefault();
  
      const requiredFieldIsAlreadyFilled = watch("primary-image").length > 0;

      if (requiredFieldIsAlreadyFilled) {
        handleStepSubmit(watch());
      } else {
        handleSubmit((d) => {
          handleStepSubmit(d);
        })(e);
      }
    };
  
    return (
      <form className={styles.formContainer} onSubmit={onSubmit}>
      <SelectWorks selectedWork={selectedWork} setSelectedWork={setSelectedWork}/>


      <div className={styles.ctaContainer}>

      <InputGroup
                placeholder="Titre de l'exposition"
                register={register}
                id="description"
                type="text"
                label="Titre de l’exposition*"
                guidance={null}
        />
        <InputGroup
          placeholder="Description de mon exposition..."
          register={register}
          id="description"
          type="text"
          label="Description de mon exposition"
          guidance={null}
        />

        <Checkbox checkboxName={"autoriseVistisors"} checkboxLabel={"Autoriser les commentaires des visiteurs"} />
        <Checkbox checkboxName={"showTitle"} checkboxLabel={"Afficher le titre de mon exposition aux visiteurs"} />


          <Button label={"Étape suivante"} color="white" bg="dark" type="submit" />
        </div>
      </form>
    );
  };