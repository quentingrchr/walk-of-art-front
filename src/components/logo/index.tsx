import React from "react"
import cn from 'classnames'
import styles from "./index.module.scss"
import { Text } from "@components"

export type IProps = {
  
}

export const Logo: React.FC<IProps> = (props: IProps) => {
	return (
    <div className={cn(styles.logo)}>
      <Text tag="h2" typo="heading-md">Walk of art</Text>
    </div>
	)
}
