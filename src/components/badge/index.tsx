import React from "react"
import s from "./index.module.scss"
import cn from "classnames"
import { BadgeTypes } from "../../types"

export type IProps = {
    type: BadgeTypes
}

export const Badge: React.FC<IProps> = ({ type = "completed" }: IProps) => {
    const label = type === "completed" ? "Completed" : "In progress"
    return (
        <div className={cn(s.container, s[type])} title={label}>
            {label}
        </div>
    )
}
