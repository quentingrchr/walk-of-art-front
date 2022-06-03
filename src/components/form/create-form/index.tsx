import React from "react"
import s from "./index.module.scss"
import { HeadingStrong, LoginForm, SplitScreen, Link, Stepper } from "@components"
import { IStep } from "../../stepper"
export type IProps = {

}

const STEPS = [
    {
        id: 1,
        label: "Step 1",
        number: 1,
        completed: false,
    },
    {
        id: 2,
        label: "Step 2",
        number: 2,
        completed: false,
    },
    {
        id: 3,
        label: "Step 3",
        number: 3,
        completed: false,
    },
    
]

const FORM_DATA = {
    ["1"]: {
        inputs:  [
            {
                name: "email",
                type: "email",
                label: "Email",
                placeholder: "Enter your email",
                value: "",
            },
            {
                name: "password",
                type: "password",
                label: "Password",
                placeholder: "Enter your password",
                value: "",
            }
        ]
    },
    ["2"]: {
        inputs:  [
            {
                name: "text",
                type: "text",
                label: "text",
                placeholder: "text your email",
                value: "",
            },
            {
                name: "text",
                type: "text",
                label: "te'xt",
                placeholder: "text",
                value: "",
            }
        ]
    }
}

export const CreateForm: React.FC<IProps> = (props: IProps) => {
    const [activeStep, setActiveStep] = React.useState<number>(0)
    const [steps, setSteps] = React.useState<IStep[]>(STEPS)
    const [formData, setFormData] = React.useState<any>(FORM_DATA)

    const completeStep = (index: number) => {
        setSteps(steps.map((step, i) => {
            if (i === index) {
                return {
                    ...step,
                    completed: true,
                }
            }
            return step
        }))
    }


    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.top}>
                    <HeadingStrong elementColor="success" color="black" content="Création d'une oeuvre" size="md" />
                    <Stepper activeStep={activeStep} steps={steps} completeOne={completeStep}/>
                </div>
                {/* <div className={s.formContainer}>

                </div> */}
            </div>
        </div>
    )
}
