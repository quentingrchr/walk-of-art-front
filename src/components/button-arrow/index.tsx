import React from "react"
import s from "./index.module.scss"

export type IProps = {
    label: string
}

export const ButtonArrow: React.FC<IProps> = ({ label }: IProps) => {
    return (
        <button className={s.button}>
            {label}
        </button>
    )
}
