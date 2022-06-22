import React, { useEffect } from "react";
import { useForm, useFormContext, FormProvider } from "react-hook-form";

import styles from "./index.module.scss";
import { FormStepper as CreateWorkStepper } from "./stepper";

export type IProps = {};

export const CreateWorkForm: React.FC<IProps> = () => {
  const methods = useForm({ mode: "onBlur" });

  const { watch, errors } = methods;

  useEffect(() => {
    console.log("FORM CONTEXT", watch(), errors);
  }, [watch, errors]);
  return (
    <FormProvider {...methods}>
      <CreateWorkStepper />
    </FormProvider>
  );
};
