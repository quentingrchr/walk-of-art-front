import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import foStyles from "./formOne.module.scss"
import { Button, InputGroup, Cards, Icon } from "@components";
import { useForm } from "react-hook-form";
import cardImage from '../../../../assets/images/cardImg.png'
import { Checkbox } from "@components/checkbox";
import axios from "axios";
import { BASE_API_URL } from "@const/index";

export interface IProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  defaultValues?: any;
}

interface SelectWorkProps {
  selectedWork?: [];
  setSelectedWork: () => {};
}

export interface IRecapProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  formState: any;
}


const SelectWorks: React.FC<SelectWorkProps> = ({
}: SelectWorkProps) => {

  const [work, setWorks] = useState<any[]>([]);
  const [selectedWork, setSelectedWork] = useState<any>()


  function handleImageClick (selectedWork)  {
    setSelectedWork(selectedWork)
    
  }
  const handleBack = () => {
    setSelectedWork([])
  }

  useEffect(() => {
    getAllWorks()
  }, [])

  const getAllWorks = () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NTc3MjA0NzUsImV4cCI6MTY1NzcyNDA3NSwicm9sZXMiOlsiUk9MRV9BUlRJU1QiLCJST0xFX1VTRVIiXSwiaWQiOiIxZWNmZmI2Yy1kYTIyLTYxYTYtODdmNi05MzU1Mzg3OWViYTQiLCJlbWFpbCI6ImV4cG9AZG9tYWluLmZyIiwiZmlyc3RuYW1lIjoiZXhwbyIsImxhc3RuYW1lIjoiZG9tYWluciJ9.Gc4cgct1A1XvxT-YwdQLwKPC2za7NjTkDsCLggOkSau5dS6H8yQ7MPloGsYB6fN58BUqTbAZ2v_2mTX2ZRW9eHYr7pFgU56TIRyKR9hjuXvagbGWEsdUHEUYJDv2hdbhWvmX4g2rM86ihlwG98kOIsOi9mp5ewh6XY_k56cyopPg9luUeDBnv2FSqYoyze2DXRoQuvigzygO8lbpaDpXPjW7nwQT6DXUtQNinRaZhbUAkqTTSg_IpooL11_gcQWACi3Xi8MBTe4t8PdleuA8PHUodNAGVZG0Rreu9jAnentm0dWMHditx_X7Tohmpsofu_PqtkIJMbycicEC-olMPQ'
    return axios.get(`${BASE_API_URL}/works`, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(response => {
        return setWorks(response.data);
      }).catch((error) => {
        return error
      })
  }

  const titleText = selectedWork ? "Choix de l’oeuvre" : "Sélection de l’oeuvre"

  const previousSelectedWork = () => {
    const currentIndex = work.findIndex(oneWork => oneWork.id === selectedWork.id);
    if(currentIndex > 0) {
      setSelectedWork(work[currentIndex - 1])
    } else {
      setSelectedWork(work[work.length - 1])
    }
  }

  const nextSelectedWork = () => {
    const currentIndex = work.findIndex(oneWork => oneWork.id === selectedWork.id);
    if(currentIndex < work.length - 1) {
      setSelectedWork(work[currentIndex + 1])
    } else {
      setSelectedWork(work[0])
    }
  }
  return (
    <div>
      <h3 className={foStyles.selectionTitle}>{titleText}</h3>
      <div className={foStyles.selectionContainer}>
        {
          selectedWork ?
            <div className={foStyles.selectionChoice}>
              <div className={foStyles.containerSelectedExhibition}>
                <div className={foStyles.selectCheckIcon}>
                  <Icon classname={foStyles.arrow} type={"selectCheck"} size={"none"} />
                </div>
                <div className={foStyles.cardContainer}>
                  <Icon classname={foStyles.arrowLeft} type={"chevronLeft"} size={"small"} onClick={previousSelectedWork} />

                  <Cards title={selectedWork.title} img={cardImage.src} showLink={true} />
                  <Icon classname={foStyles.arrowRight} type={"chevronRight"} size={"small"} onClick={nextSelectedWork} />

                </div>
              </div>

              <div className={foStyles.ctas}>
                <Button label={"Utiliser le titre comme titre d’exposition"} color="black" bg="light" type="submit" />
                <div className={foStyles.link}>
                  <Button label={"Accéder à l’oeuvre"} color="black" bg="light" to={`${window.location.origin}/work/${selectedWork.id}`} />
                </div>
                <div className={foStyles.modify} onClick={handleBack}>
                  <Button label={"Modifier"} color="white" bg="dark" type="submit" />
                </div>
              </div>
            </div>
            :
            <div className={foStyles.selectWorks}>
              {work.map((work) => (
                <Cards
                  key={work.id}
                  title={work.title}
                  img={work.mainFile ? work.mainFile.fileUrl : null}
                  handleClick={() => {handleImageClick(work)}}
                  showLink={false} />
              ))
              }
            </div>
        }
      </div>
    </div>
  )
}

export const FormOne: React.FC<IProps> = ({
  handleStepSubmit,
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

  const onSubmit = (event: any) => {
    event.preventDefault();

    const requiredFieldIsAlreadyFilled = watch("primary-image")?.length > 0;

    // ? ADDED TO GO STEP 2 FAST.

    // NEED TO CHECK IF REQURIEF FIELD ARE REMPLIE
    if (requiredFieldIsAlreadyFilled) {
      handleStepSubmit(watch());
    } else {
      handleSubmit((data) => {
        handleStepSubmit(data);
      })(event);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <SelectWorks selectedWork={selectedWork} setSelectedWork={setSelectedWork} />


      <div className={foStyles.ctaContainer}>

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
          type="textarea"
          label="Description de mon exposition"
          guidance={null}
        />

        <Checkbox checkboxName={"autoriseVistisors"} checkboxLabel={"Autoriser les commentaires des visiteurs"} />
        <Checkbox checkboxName={"showTitle"} checkboxLabel={"Afficher le titre de mon exposition aux visiteurs"} />


        <Button label={"Étape suivante"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  )
}
