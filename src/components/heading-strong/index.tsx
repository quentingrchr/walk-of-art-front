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
    size?: "sm" | "md" | "lg" | "xl" | "xxl"
}

export const HeadingStrong: React.FC<IProps> = ({
  elementColor,
  content,
  color,
  size = "lg",
}) => {
  return (
    <div className={cn(s[elementColor], s["heading-strong"], s[size])}>
      <Text tag="h1" typo={`heading-${size}`} color={color}>
        {content}
      </Text>
    </div>
  )
}
