import React, { useEffect } from "react";
import { useForm, useFormContext, FormProvider } from "react-hook-form";

import styles from "./index.module.scss";
import { FormStepper as CreateWorkStepper } from "./stepper";

export type IProps = {};

export const CreateExhibitionForm: React.FC<IProps> = () => {
  return <CreateWorkStepper />;
};
