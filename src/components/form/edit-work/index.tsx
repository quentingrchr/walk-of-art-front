import React from "react"

import { FormStepper as EditWorkStepper } from "./stepper"
import { IWorkDataApi } from "../../../types"

export type IProps = {
  onSubmit: (formData: any) => void
  workData?: IWorkDataApi
}

export const EditWorkForm: React.FC<IProps> = ({ onSubmit, workData }) => {
  return !!workData ? (
    <EditWorkStepper onSubmit={onSubmit} work={workData} />
  ) : null
}
