import React from "react"
import s from "./index.module.scss"
import cn from "classnames"
import { Semantic } from "@interfaces/index";
import { Icon } from ".."

export interface IProps {
    icon?: string;
    text: string;
    type: Semantic;
    classname?: string
}

const IconSelector = {
    "info" : <Icon type="information" size="medium" color="info"/>,
    "success" : <Icon type="check" size="medium" color="success"/>,
    "error" : <Icon type="cross" size="medium" color="error"/>
}

export const Tooltip: React.FC<IProps> = ({ text, type = 'info', classname }: IProps) => {
    return (
        <div className={cn(s.container, s[type], classname)}>
            {IconSelector[type]}
            <p>{text}</p>
        </div>
    )
}
