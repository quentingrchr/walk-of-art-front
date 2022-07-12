import React from "react"
import s from "./index.module.scss"
import { Icons } from "@interfaces/index"
import { Icon, Text } from "@components/index"

export type IProps = {
    icon: Icons,
    number: number
}

export const ReactionCounter: React.FC<IProps> = ({ icon, number = 0 }: IProps) => {
    return (
        <div className={s.container}>
            <Icon type={icon} size="large" />
            <Text tag="p" typo="paragraph-md-bold" >{number}</Text>
        </div>
    )
}
