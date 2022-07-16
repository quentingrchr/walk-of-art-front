import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import foStyles from "./formOne.module.scss"
import { Button, InputGroup, Cards, Icon } from "@components";
import { useForm } from "react-hook-form";
import cardImage from '../../../../assets/images/cardImg.png'
import { Checkbox } from "@components/checkbox";
import { axiosInstance } from "@utility/index"

export interface IProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  defaultValues?: any;
}

interface SelectWorkProps {
  selectedWork?: [];
  setSelectedWork: () => {};
  updateName: (arg: string) => void,
  workId: (arg: string) => void,
}

export interface IRecapProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  formState: any;
}


const SelectWorks: React.FC<SelectWorkProps> = ({updateName, workId
}: SelectWorkProps) => {

  const [work, setWorks] = useState<any[]>([]);
  const [selectedWork, setSelectedWork] = useState<any>()


  function handleImageClick (selectedWork)  {
    workId(selectedWork.id)
    setSelectedWork(selectedWork)
  }
  const handleBack = () => {
    setSelectedWork([])
  }


  const getAllWorks = () => {
    return axiosInstance.get('/works')
      .then(response => {
        return setWorks(response.data);
      }).catch((error) => {
        return error
      })
  }

  useEffect(() => {
    getAllWorks()
  }, [])

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
                <Button label={"Utiliser le titre comme titre d’exposition"} color="black" bg="light" onClick={() => updateName(selectedWork.title)}/>
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
  const [parentName, setParentName] = useState<string>();
  const [isVisitorsAutorise, setVisitorsAutorise] = useState(false)
  const [isTitleShowedToVisitors, setShowTitleToVisitors] = useState(false)
  const [selectedWorkId, setSelectedWorkId] = useState<string>();
  const { register, handleSubmit, watch } = useForm({
    mode: "onBlur",
    defaultValues,
  });

  const updateName = (name: string): void => {
    setParentName(name)
  }

  const onSubmit = (event: any) => {
    event.preventDefault();

    const requiredFieldIsAlreadyFilled = watch("primary-image")?.length > 0;

    if (requiredFieldIsAlreadyFilled) {
      handleStepSubmit(watch());
    } else {
      handleSubmit((data) => {
        console.log(selectedWorkId);
        
        const formattedData = {
          ...data,
          isVisitorsAutorise,
          isTitleShowedToVisitors,
          selectedWorkId
        }
        handleStepSubmit(formattedData);
      })(event);
    }
  };

  const handleCheckVisitor = () => {
    return setVisitorsAutorise(!isVisitorsAutorise)
  }

  const handleShowTitleToVisitors = () => {
    return setShowTitleToVisitors(!isTitleShowedToVisitors)
  }

  const selectWorkId = (name: string): void => {
    console.log(name);
    
    return setSelectedWorkId(name)
  }
  

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <SelectWorks selectedWork={selectedWork} setSelectedWork={setSelectedWork} updateName={updateName} workId={selectWorkId}/>


      <div className={foStyles.ctaContainer}>

        <InputGroup
          placeholder={parentName ? parentName : "Titre de l'exposition"}
          register={register}
          id="description"
          type="text"
          label="Titre de l’exposition*"
          guidance={null}
          value={parentName}
        />
        <InputGroup
          placeholder="Description de mon exposition..."
          register={register}
          id="description"
          type="textarea"
          label="Description de mon exposition"
          guidance={null}
        />

        <Checkbox checkboxName={"autoriseVistisors"} checkboxLabel={"Autoriser les commentaires des visiteurs"} onChange={handleCheckVisitor} isChecked={isVisitorsAutorise} />
        <Checkbox checkboxName={"showTitle"} checkboxLabel={"Afficher le titre de mon exposition aux visiteurs"} onChange={handleShowTitleToVisitors} isChecked={isTitleShowedToVisitors} />


        <Button label={"Étape suivante"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  )
}
