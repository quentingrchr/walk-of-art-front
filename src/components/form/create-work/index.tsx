import React from "react"

import { FormStepper as CreateWorkStepper } from "./stepper"

export type IProps = {
  onSubmit: (formData: any) => void
}

export const CreateWorkForm: React.FC<IProps> = ({ onSubmit }) => {
  return <CreateWorkStepper onSubmit={onSubmit} />
}
