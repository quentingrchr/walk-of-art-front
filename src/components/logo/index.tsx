import React, { useState } from "react"
import styles from "./index.module.scss"
import cx from "classnames"
import { Text } from "@components"
import Link from "next/link"

export type IProps = {
  to: string
}

export const Logo: React.FC<IProps> = (props: IProps) => {

  const [isHover, setIsHover] = useState(false)

  const { to } = props

	return (
    to ? 
      <Link href={to}>
        <div 
          className={cx(styles.logo, styles.isLink, isHover ? styles.isHover : null)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Text tag="h2" typo="heading-xl">Walk of art</Text>
        </div>
      </Link>
    :
      <div className={cx(styles.logo, isHover ? styles.isHover : null)}>
        <Text tag="h2" typo="heading-xl">Walk of art</Text>
      </div>
	)
}
