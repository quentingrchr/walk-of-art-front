import React, { useState } from "react"
import s from "./index.module.scss"
import { Separator } from "../separator"
import { Step } from "./step"

export type IProps = {

}

const STEPS = [
    {
        label: "Etape 1",
        number: 1,
        completed: false,
    },
    {
        label: "Etape 2",
        number: 2,
        completed: false,
    },
    {
        label: "Etape 3",
        number: 3,
        completed: false,
    },
]
export const Stepper: React.FC<IProps> = (props: IProps) => {
    const [active, setActive] = useState<null | number>(null)
    const [steps, setSteps] = useState<any>(STEPS)

    const dummyFunction = (index) => { 
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

    const arePreviousStepsCompleted = (index : number) => { 
        return steps.slice(0, index).every(step => step.completed)
    }
    return(
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.stepper}>
                    {steps.map((step, index) => (
                        <>
                            <Step label={step.label} number={step.number}
                                completed={step.completed}
                                active={active === index}
                                key={index}
                                disable={!arePreviousStepsCompleted(index)}
                                onClick={() => {
                                    setActive(index)
                                    dummyFunction(index)
                                }}
                            />
                            {index !== STEPS.length - 1 && <Separator filled={steps[index + 1].completed}/>}
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
