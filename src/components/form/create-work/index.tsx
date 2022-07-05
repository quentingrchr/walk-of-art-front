import React, { useEffect } from "react"
import { useForm, useFormContext, FormProvider } from "react-hook-form"

import styles from "./index.module.scss"
import { FormStepper as CreateWorkStepper } from "./stepper"

export type IProps = {
  onFormSubmit: (values: any) => void
  hasSubmittedForm: boolean
}

export const CreateWorkForm: React.FC<IProps> = ({
  onFormSubmit,
  hasSubmittedForm,
}) => {
  return (
    <CreateWorkStepper
      hasSubmittedForm={hasSubmittedForm}
      onFormSubmit={onFormSubmit}
    />
  )
}
