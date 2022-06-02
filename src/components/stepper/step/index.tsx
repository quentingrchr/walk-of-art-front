import React from "react"
import cn from "classnames"
import s from "./index.module.scss"
import { Badge } from "@components"

export type IProps = {
    active: boolean,
    completed: boolean,
    label: string,
    number: number,
    onClick?: () => void,
}

export const Step: React.FC<IProps> = (props: IProps) => {
    const { active, completed, label, number, onClick } = props

    const handleClick = () => { 
        if(onClick) {
            onClick()
        }
    }
    return (
        <div className={cn(s.step, {[s.active] : active})} onClick={handleClick}>
            <div className={s.step__circle_container}>
                <svg className={s.step__svg} height="50" width="50">
                    <circle cx="25" cy="25" r="22" stroke="black" stroke-width="1" fill="none"/>
                </svg>
                <div className={s.step__circle}>
                    <span className={s.step__number}>{number}</span>
                </div>
            </div>
            <div className={s.step__bottom}>
                <p className={s.step__info}>Etape {number}</p>
                <p className={s.step__label}>{label}</p>
                <Badge type={completed ? "completed" : "progress"} />
            </div>
        </div>
    )
}

