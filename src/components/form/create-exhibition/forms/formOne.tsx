import React, { useState } from "react";
import styles from "./index.module.scss";
import formOneStyle from "./formOne.module.scss"
import { Button, InputGroup } from "@components";
import { useForm } from "react-hook-form";
import { Checkbox } from "@components/checkbox";
import { SelectWork } from './selectWork'

export interface IProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  defaultValues?: any;
}

export interface IRecapProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  formState: any;
}

export const FormOne: React.FC<IProps> = ({
  handleStepSubmit,
  defaultValues = {},
}: IProps) => {

  const [selectedWorkInFormOne, setSelectedWorkInFormOne] = useState<[]>()
  const [expositionTitle, setExpositionTitle] = useState<string>();
  const [isVisitorsCommentsAuthorized, setVisitorsCommentsAuthorized] = useState(false)
  const [isTitleShowedToVisitors, setShowTitleToVisitors] = useState(false)
  const [selectedWorkId, setSelectedWorkId] = useState<string>();
  const { register, handleSubmit, watch } = useForm({
    mode: "onBlur",
    defaultValues,
  });

  const updateExpositionTitle = (name: string): void => {
    
    setExpositionTitle(name)
  }

  const onSubmit = (event: any) => {
    event.preventDefault();

    const requiredFieldIsAlreadyFilled = watch("primary-image")?.length > 0;

    if (requiredFieldIsAlreadyFilled) {
      handleStepSubmit(watch());
    } else {
      handleSubmit((data) => {
        
        const formattedData = {
          ...data,
          isVisitorsCommentsAuthorized,
          isTitleShowedToVisitors,
          selectedWorkId,
          expositionTitle
        }

        handleStepSubmit(formattedData);
      })(event);
    }
  };

  const handleCheckVisitor = () => {
    return setVisitorsCommentsAuthorized(!isVisitorsCommentsAuthorized)
  }

  const handleShowTitleToVisitors = () => {
    return setShowTitleToVisitors(!isTitleShowedToVisitors)
  }

  const selectWorkId = (id: string): void => {
    return setSelectedWorkId(id)
  }


  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <SelectWork
        selectedWork={selectedWorkInFormOne}
        setSelectedWork={() => setSelectedWorkInFormOne}
        updateTitle={updateExpositionTitle}
        selectedWorkId={selectWorkId}
      />


      <div className={formOneStyle.ctaContainer}>

        <InputGroup
          placeholder={expositionTitle ? expositionTitle : "Titre de l'exposition"}
          register={register}
          id="title"
          type="text"
          label="Titre de l’exposition*"
          guidance={null}
          value={expositionTitle}
        />
        <InputGroup
          placeholder="Description de mon exposition..."
          register={register}
          id="description"
          type="textarea"
          label="Description de mon exposition"
          guidance={null}
        />

        <Checkbox checkboxName={"isVisitorsCommentsAuthorized"} checkboxLabel={"Autoriser les commentaires des visiteurs"} onChange={handleCheckVisitor} isChecked={isVisitorsCommentsAuthorized} />
        <Checkbox checkboxName={"showTitle"} checkboxLabel={"Afficher le titre de mon exposition aux visiteurs"} onChange={handleShowTitleToVisitors} isChecked={isTitleShowedToVisitors} />


        <Button label={"Étape suivante"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  )
}
