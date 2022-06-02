import React from "react"
import s from "./index.module.scss"
import cn from "classnames"

export type IProps = {
    type: "completed" | "progress"
}

export const Badge: React.FC<IProps> = ({ type = "success" }: IProps) => {
    const label = type === "completed" ? "Completed" : "In progress"
    return (
        <div className={cn(s.container, s[type])} title={label}>
            {label}
        </div>
    )
}
