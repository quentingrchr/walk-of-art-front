import React from "react"
import s from "./index.module.scss"
import cn from "classnames"

export type IProps = {
    filled: boolean
}

export const Separator: React.FC<IProps> = ({ filled }: IProps) => {
    return (
        <div className={cn(s.container,{[s.filled]: filled})}>
            <div className={s.bar}>
                <div className={s.black}></div>
            </div>
        </div>
    )
}
