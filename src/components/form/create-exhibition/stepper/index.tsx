import React from "react";

import s from "./index.module.scss";

import { FormOne, FormTwo, FormThree } from "../forms";
import { Stepper, Artwork } from "@components";
import image from '../../../../assets/images/artwork.png'
export interface IStep {
  id: number;
  label: string;
  number: number;
  completed: boolean;
}

export type IProps = {
  activeStep: number;
  steps: IStep[];
  completeOne: (index: number) => void;
  variant?: "default" | "checked";
  setActiveStep:  (index: number) => void,
};
const STEPS = [
  {
    id: 1,
    label: "Identification",
    number: 1,
    completed: false,
  },
  {
    id: 2,
    label: "Fichiers",
    number: 2,
    completed: false,
  },
  {
    id: 3,
    label: "Récapitulatif",
    number: 3,
    completed: false,
  },
];

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
      );
    case 1:
      return (
        <FormTwo
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack}
          defaultValues={compiledForm.two}
        />
      );
    case 2:
      return (
        <FormThree
          handleStepSubmit={handleStepSubmit}
          handleBack={handleBack}
          defaultValues={compiledForm.three}
        />
      );
    default:
      return "Unknown step";
  }
};
export const ExhibitionStepper: React.FC<IProps> = (props: IProps) => {
  const [compiledForm, setCompiledForm] = React.useState({});
  const [steps, setSteps] = React.useState(STEPS);

  const [activeStep, setActiveStep] = React.useState(0);

  const completeStep = (step: number) => {
    const newSteps = steps.map((s, i) => {
      if (i === step) {
        return { ...s, completed: true };
      }
      return s;
    });
    setSteps(newSteps);
  };

  const uncompleteStep = (step: number) => {
    const newSteps = steps.map((s, i) => {
      if (i === step) {
        return { ...s, completed: false };
      }
      return s;
    });
    setSteps(newSteps);
  };

  const handleStepSubmit = (data: any) => {
    switch (activeStep) {
      case 0:
        setCompiledForm({ ...compiledForm, one: data });
        break;
      case 1:
        setCompiledForm({ ...compiledForm, two: data });
        break;
      case 2:
        setCompiledForm({ ...compiledForm, three: data });
        break;
      default:
        throw new Error("not a valid step");
    }
    setActiveStep((prevActiveStep) => {
      completeStep(prevActiveStep);
      return prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      uncompleteStep(prevActiveStep - 1);
      return prevActiveStep - 1;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompiledForm({});
  };

  const handleSubmit = (form: any) => {
    console.log("submit", form);
    return true;
  };

  return (
    <div className={s.container}>
      <div>
        <Stepper
          variant="checked"
          activeStep={activeStep}
          steps={steps}
          completeOne={() => {}}
          setActiveStep={setActiveStep}
        />
      </div>
      <Artwork src={image} alt={"test"} size={"small"}/>
      {getStepComponent(activeStep, compiledForm, handleStepSubmit, handleBack)}
    </div>
  );
};
