import React, { useEffect } from "react"
import { IWorkDataApi } from "../../../../types"
import { BASE_BACK_URL } from "@const/index"

import s from "./index.module.scss"

// import { FormOne, FormTwo, FormThree } from "../forms"
import { FormOne } from "../forms/formOne"
import { FormTwo } from "../forms/formTwo"
import { FormThree } from "../forms/formThree"
import { Stepper, Button } from "@components"

export type IProps = {
  onSubmit: (formData: any) => void
  work: IWorkDataApi
}

const STEPS = [
  {
    id: 1,
    label: "Etape 1",
    number: 1,
    completed: true,
  },
  {
    id: 3,
    label: "Etape 2",
    number: 2,
    completed: true,
  },
]

const getStepComponent = (
  step: number,
  compiledForm,
  handleStepSubmit,
  handleBack
) => {
  switch (step) {
    case 0:
      return (
        <FormOne
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack}
          defaultValues={compiledForm}
        />
      )
    case 1:
      return (
        <FormThree
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack}
          formState={compiledForm}
          imagesUrls={compiledForm.imagesUrls}
        />
      )
    case 2:
      return (
        <div className={s.formContainer}>
          <h1 className={s.title}>Formulaire terminé</h1>
          <Button to="/artist/works" label="Voir mes oeuvres" />
        </div>
      )
    case 2:
      return (
        <div className={s.formContainer}>
          <h1 className={s.title}>Formulaire terminé</h1>
          <Button to="/artist/works" label="Voir mes oeuvres" />
        </div>
      )
    default:
      return "Unknown step"
  }
}

export const FormStepper: React.FC<IProps> = ({ onSubmit, work }) => {
  const [compiledForm, setCompiledForm] = React.useState<any>({
    title: work.title,
    description: work.description,
    imagesUrls: work.workFiles.map((workFile) => {
      return `${BASE_BACK_URL}/${workFile.fileUrl}`
    }),
  })
  
  const [steps, setSteps] = React.useState(STEPS)

  const [activeStep, setActiveStep] = React.useState(0)

  const completeStep = (step: number) => {
    const newSteps = steps.map((s, i) => {
      if (i === step) {
        return { ...s, completed: true }
      }
      return s
    })
    setSteps(newSteps)
  }

  const uncompleteStep = (step: number) => {
    const newSteps = steps.map((s, i) => {
      if (i === step) {
        return { ...s, completed: false }
      }
      return s
    })
  }

  const handleStepSubmit = (data: any) => {
    switch (activeStep) {
      case 0:
        setCompiledForm((prev) => {
          return {
            ...compiledForm,
            title: data.title,
            description: data.description,
            imagesUrls: work.workFiles.map((workFile) => {
              return `${BASE_BACK_URL}/${workFile.fileUrl}`
            }),
          }
        })
        break
      case 1:
        setCompiledForm((prev) => {
          return {
            ...compiledForm,
            imagesUrls: work.workFiles.map((workFile) => {
              return `${BASE_BACK_URL}/${workFile.fileUrl}`
            }),
          }
        })
        onSubmit({
          ...compiledForm,
        })

        break
      default:
        throw new Error("not a valid step")
    }
    setActiveStep((prevActiveStep) => {
      completeStep(prevActiveStep)
      return prevActiveStep + 1
    })
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      uncompleteStep(prevActiveStep - 1)
      return prevActiveStep - 1
    })
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompiledForm({})
  }

  return (
    <div className={s.container}>
      <div>
        <Stepper
          setActiveStep={setActiveStep}
          variant="checked"
          activeStep={activeStep}
          steps={steps}
          completeOne={() => {}}
        />
      </div>
      <div className={s.formContainer}>
        {getStepComponent(
          activeStep,
          compiledForm,
          handleStepSubmit,
          handleBack
        )}
      </div>
    </div>
  )
}
