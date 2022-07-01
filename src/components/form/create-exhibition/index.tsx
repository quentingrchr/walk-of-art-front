import React from "react";

import { ExhibitionStepper as CreateWorkStepper } from "./stepper";

export type IProps = {};

export const CreateExhibitionForm: React.FC<IProps> = () => {
  return <CreateWorkStepper activeStep={0} steps={[]} completeOne={function (index: number): void {
    throw new Error("Function not implemented.");
  } } setActiveStep={function (index: number): void {
    throw new Error("Function not implemented.");
  } } />;
};
