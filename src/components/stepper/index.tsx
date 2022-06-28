import React, { useState } from "react";
import s from "./index.module.scss";
import { Separator } from "../separator";
import { Step } from "./step";

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
];
export const Stepper: React.FC<IProps> = ({
  activeStep,
  steps,
  completeOne,
  variant = "default",
  setActiveStep,
}: IProps) => {
  const dummyFunction = (index) => {
    completeOne(index);
    setActiveStep(index)
  };

  const arePreviousStepsCompleted = (index: number) => {
    return steps.slice(0, index).every((step) => step.completed);
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.stepper}>
          {steps.map((step, index) => (
            <>
              <Step
                label={step.label}
                number={step.number}
                completed={step.completed}
                active={activeStep === index}
                key={index}
                disable={!arePreviousStepsCompleted(index)}
                variant={variant}
                onClick={() => {
                  dummyFunction(index);
                }}
              />
              {index !== steps.length - 1 && (
                <Separator filled={steps[index + 1].completed} />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
