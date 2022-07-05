import React, { useEffect } from "react"
import { useForm, useFormContext, FormProvider } from "react-hook-form"

import styles from "./index.module.scss"
import { FormStepper as EditWorkStepper } from "./stepper"

export type IProps = {}

export const EditWorkForm: React.FC<IProps> = () => {
  return <EditWorkStepper />
}
