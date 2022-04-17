import React from "react"
import s from "./index.module.scss"
import cn from "classnames"
import { ColorsType } from "../../types"
import { Text } from "@components"




export type IProps = {
    elementColor: ColorsType
    content: string
    color?: ColorsType
    attributes?: any
}

export const HeadingStrong: React.FC<IProps> = ({ elementColor, content, color }) => {
    return (
            <div className={ cn(s[elementColor], s["heading-strong"] ) }>
                <Text tag="h1" typo="heading-lg" color={color}>
                    {content}
                </Text>
            </div>
    )
}
