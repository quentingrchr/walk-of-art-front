import React from "react"
import styles from "./index.module.scss"
import { Text } from "@components"

export type IProps = {
  
}

export const Logo: React.FC<IProps> = (props: IProps) => {
	return (
    <div className={styles.logo}>
      <Text tag="h2" typo="heading-md">Walk of art</Text>
    </div>
	)
}
