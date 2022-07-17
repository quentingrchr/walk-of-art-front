import React from "react"

import styles from "./index.module.scss"

import { FormOne, FormTwo, FormThree, FormFour, FormFive, FormSix } from "../forms"
import { Stepper, Tooltip } from "@components"

export type IProps = {
  onSubmit: (formData: any) => void
}

const STEPS = [
  {
    id: 1,
    label: "Sélection",
    number: 1,
    completed: false,
  },
  {
    id: 2,
    label: "Liens",
    number: 2,
    completed: false,
  },
  {
    id: 3,
    label: "Détails exposition",
    number: 3,
    completed: false,
  },
  {
    id: 4,
    label: "Récapitulatif",
    number: 4,
    completed: false,
  },
  {
    id: 5,
    label: "Paiement",
    number: 5,
    completed: false,
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
          defaultValues={compiledForm.one}
        />
      )
    case 1:
      return (
        <FormTwo
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack}
          defaultValues={compiledForm.two}
          amountOfAdditionalLinks={[]}
        />
      )
    case 2:
      return (
        <FormThree
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack}
          defaultValues={compiledForm.three}
          onClick={() => { }}
        />
      )
    case 3:
      return (
        <FormFour
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack}
          defaultValues={compiledForm.four}
          onClick={() => { }}
          formState={{ ...compiledForm.one, ...compiledForm.two, ...compiledForm.three }}
        />
      )
    case 4:
      return (
        <FormFive
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack} onClick={() => { }}
        />
      )
    case 5:
      return (
        <FormSix />
      )
    default:
      return "Unknown step"
  }
}

export const FormStepper: React.FC<IProps> = ({ onSubmit }) => {
  const [compiledForm, setCompiledForm] = React.useState<any>({})
  const [steps, setSteps] = React.useState(STEPS)
  const [globalError, setGlobalError] = React.useState<string | null>(null)

  const [activeStep, setActiveStep] = React.useState(0)

  const completeStep = (stepNumber: number) => {
    const newSteps = steps.map((step, index) => {
      if (index === stepNumber) {
        return { ...step, completed: true }
      }
      return step
    })
    setSteps(newSteps)
  }

  const uncompleteStep = (stepNumber: number) => {
    const newSteps = steps.map((step, index) => {
      if (index === stepNumber) {
        return { ...step, completed: false }
      }
      return step
    })
    setSteps(newSteps)
  }

  const handleStepSubmit = async (data: any) => {
    setGlobalError(null)

    switch (activeStep) {
      case 0:
        setCompiledForm({ ...compiledForm, one: data })
        break
      case 1:
        setCompiledForm({ ...compiledForm, two: data })
        break
      case 2:
        setCompiledForm({ ...compiledForm, three: data })
        break
      case 3:
        setCompiledForm({ ...compiledForm, four: data })

        onSubmit({
          ...compiledForm?.one,
          ...compiledForm?.two,
          ...compiledForm?.three,
        })
        break
      default:
        throw new Error("Not a valid step")
    }

    setActiveStep((previousActiveStep) => {
      completeStep(previousActiveStep)
      return previousActiveStep + 1
    })
  }

  const handleBack = () => {
    setActiveStep((previousActiveStep) => {
      uncompleteStep(previousActiveStep - 1)
      return previousActiveStep - 1
    })
  }

  return (
    <div className={styles.container}>
      <div>
        <Stepper
          setActiveStep={setActiveStep}
          variant="checked"
          activeStep={activeStep}
          steps={steps}
          completeOne={() => { }}
        />
      </div>
      {!!globalError && (
        <div className={styles.errorContainer}>
          <Tooltip text={globalError} type="error" />
        </div>
      )}
      <div className={styles.formContainer}>
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
