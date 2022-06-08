import React from "react"
import s from "./index.module.scss"
import { HeadingStrong, LoginForm, SplitScreen, Link, Stepper, InputGroup } from "@components"
import { useForm } from "react-hook-form"
import { IStep } from "../../stepper"
// ** https://codesandbox.io/embed/stepper-with-react-hook-form-qpjc1
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

const FORM_DATA = [
    {
        inputs:  [
            {
                id: "email",
                name: "email",
                type: "email",
                label: "Email",
                placeholder: "Enter your email",
                value: "",
            },
            {
                id: "password",
                name: "password",
                type: "password",
                label: "Password",
                placeholder: "Enter your password",
                value: "",
            }
        ]
    },
    {
        inputs:  [
            {
                id: "text1",
                name: "text",
                type: "text",
                label: "text",
                placeholder: "text your email",
                value: "",
            },
            {
                id: "text2",
                name: "text",
                type: "text",
                label: "text",
                placeholder: "text",
                value: "",
            }
        ]
    }
]

let formOptions: any = {
        criteriaMode: 'all',
    }

export const CreateForm: React.FC<IProps> = (props: IProps) => {
    const [activeStep, setActiveStep] = React.useState<number>(0)
    const [steps, setSteps] = React.useState<IStep[]>(STEPS)
    const [formData, setFormData] = React.useState<any>(FORM_DATA)
    const { register, handleSubmit, watch, formState: { errors } } = useForm(formOptions);


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
                    <Stepper activeStep={activeStep} steps={steps} completeOne={completeStep} variant="checked" />
                </div>
                <div className={s.formContainer}>
                    {formData[activeStep].inputs.map((input: any) => { 
                        return <InputGroup {...input} key={input.id} register={ () => register(input.id)} />
                    })}
                </div>
            </div>
        </div>
    )
}
