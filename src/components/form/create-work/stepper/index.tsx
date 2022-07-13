import React, { useEffect } from "react"

import s from "./index.module.scss"

import { FormOne } from "../forms/formOne"
import { FormTwo } from "../forms/formTwo"
import { FormThree } from "../forms/formThree"
import { Stepper, Button, Tooltip } from "@components"

export type IProps = {
  onSubmit: (formData: any) => any
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

export const FormStepper: React.FC<IProps> = ({ onSubmit }) => {
  const [compiledForm, setCompiledForm] = React.useState<any>({})
  const [steps, setSteps] = React.useState(STEPS)
  const [globalError, setGlobalError] = React.useState<string | null>(null)

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

        const res = await onSubmit({
          ...compiledForm?.one,
          ...compiledForm?.two,
          ...compiledForm?.three,
        })
        if (res.error) {
          setGlobalError("Oups, une erreur est survenue")
          return
        }

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
      {!!globalError && (
        <div className={s.errorContainer}>
          <Tooltip text={globalError} type="error" />
        </div>
      )}
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
