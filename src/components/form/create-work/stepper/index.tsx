import React, { useEffect } from "react"
import { useFormContext } from "react-hook-form"

import s from "./index.module.scss"

import { FormOne, FormTwo, FormThree } from "../forms"
import { Stepper, Button } from "@components"

export type IProps = {
  onFormSubmit: (values: any) => void
  hasSubmittedForm: boolean
}

const STEPS = [
  {
    id: 1,
    label: "Etape 1",
    number: 1,
    completed: false,
  },
  {
    id: 2,
    label: "Etape 2",
    number: 2,
    completed: false,
  },
  {
    id: 3,
    label: "Etape 3",
    number: 3,
    completed: false,
  },
]

const getStepComponent = (
  step: number,
  compiledForm,
  handleStepSubmit,
  handleBack,
  handleFormSubmit
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
        />
      )
    case 2:
      return (
        <FormThree
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack}
          formState={{ ...compiledForm.one, ...compiledForm.two }}
        />
      )

    case 3:
      handleFormSubmit({ ...compiledForm.one, ...compiledForm.two })
      return <h1>Completed</h1>
    default:
      return "Unknown step"
  }
}

export const FormStepper: React.FC<IProps> = ({
  onFormSubmit,
  hasSubmittedForm,
}: IProps) => {
  const [compiledForm, setCompiledForm] = React.useState({})
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
    setSteps(newSteps)
  }

  const handleStepSubmit = (data: any) => {
    switch (activeStep) {
      case 0:
        setCompiledForm({ ...compiledForm, one: data })
        break
      case 1:
        setCompiledForm({ ...compiledForm, two: data })
        break
      case 2:
        setCompiledForm({ ...compiledForm })
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
  }

  useEffect(() => {
    console.log({ compiledForm })
  }, [compiledForm])

  return (
    <div className={s.container}>
      <div>
        {!hasSubmittedForm && (
          <Stepper
            variant="checked"
            activeStep={activeStep}
            steps={steps}
            completeOne={() => {}}
            setActiveStep={setActiveStep}
          />
        )}
      </div>
      <div className={s.formContainer}>
        {getStepComponent(
          activeStep,
          compiledForm,
          handleStepSubmit,
          handleBack,
          onFormSubmit
        )}
      </div>
    </div>
  )
}
