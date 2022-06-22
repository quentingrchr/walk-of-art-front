import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

import styles from "./index.module.scss";

import { FormOne, FormTwo, FormThree } from "../forms";
import { Stepper, Button } from "@components";

export type IProps = {};

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

const getStepComponent = (step: number, formContent: any) => {
  switch (step) {
    case 0:
      return <FormOne {...{ formContent }} />;
    case 1:
      return <FormTwo {...{ formContent }} />;
    case 2:
      return <FormThree {...{ formContent }} />;
    default:
      return "Unknown step";
  }
};
export const FormStepper: React.FC<IProps> = (props: IProps) => {
  const formContext = useFormContext();
  const { watch, errors } = formContext;
  const [compiledForm, setCompiledForm] = React.useState({});
  const form = watch();
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

  const handleNext = () => {
    let canContinue = true;
    console.log(form);

    switch (activeStep) {
      case 0:
        setCompiledForm({ ...compiledForm, one: form });
        canContinue = true;
        break;
      case 1:
        setCompiledForm({ ...compiledForm, two: form });
        canContinue = true;
        break;
      case 2:
        setCompiledForm({ ...compiledForm, three: form });
        canContinue = handleSubmit({ ...compiledForm, three: form });
        break;
      default:
        throw new Error("not a valid step");
    }
    if (canContinue) {
      setActiveStep((prevActiveStep) => {
        completeStep(prevActiveStep);
        return prevActiveStep + 1;
      });
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      switch (activeStep) {
        case 1:
          setCompiledForm({ ...compiledForm, two: form });
          break;
        case 2:
          setCompiledForm({ ...compiledForm, three: form });
          break;
        default:
          throw new Error("not a valid step");
      }
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompiledForm({});
  };

  const handleSubmit = (form: any) => {
    console.log("submit", form);
    return true;
  };

  useEffect(() => {
    console.log("form", form);
    console.log("compiledForm", compiledForm);
  }, [compiledForm]);
  return (
    <div>
      <header>
        <h1>Create Work</h1>
        <p>Step {activeStep} of 3</p>
        <Stepper
          variant="checked"
          activeStep={activeStep}
          steps={steps}
          completeOne={() => {}}
        />
      </header>
      <div>
        <h2>form</h2>
        {getStepComponent(activeStep, compiledForm)}
        <div>
          {activeStep >= 1 && (
            <Button label="Back" color="white" bg="dark" onClick={handleBack} />
          )}
          <Button
            label={activeStep === steps.length - 1 ? "Finish" : "Next"}
            color="white"
            bg="dark"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};
