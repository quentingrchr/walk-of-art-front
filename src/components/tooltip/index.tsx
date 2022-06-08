import React from "react"
import s from "./index.module.scss"
import cn from "classnames"
import { Semantic } from "@interfaces/index"; 

export interface IProps {
    text: string;
    type: Semantic;
}

export const Tooltip: React.FC<IProps> = ({ text, type = 'info' }: IProps) => {
    return (
        <div className={cn(s.container, s[type])}>
            <p>icon</p>
            <p>{text}</p>
        </div>
    )
}
