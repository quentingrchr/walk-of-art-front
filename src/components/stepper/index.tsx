import React from "react"
import s from "./index.module.scss"
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
    const [active, setActive] = React.useState(null)
    return(
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.stepper}>
                    {STEPS.map((step, index) => (
                        <Step label={step.label} number={step.number} completed={step.completed} active={active === index} key={index} onClick={ () => setActive(index)}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
