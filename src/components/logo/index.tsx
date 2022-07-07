import React, { useState } from "react"
import styles from "./index.module.scss"
import cx from "classnames"
import { Text } from "@components"
import Link from "next/link"
import { Colors } from '@interfaces/index'

export type IProps = {
  to: string,
  color?: Colors
}

export const Logo: React.FC<IProps> = ({ to, color = 'black' }: IProps) => {

  const [isHover, setIsHover] = useState(false)

	return (
    to ? 
      <Link href={to}>
        <div 
          className={cx(styles.logo, styles[color], styles.isLink, isHover ? styles.isHover : null)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <Text tag="h2" typo="heading-xl">Walk of art</Text>
        </div>
      </Link>
    :
      <div className={cx(styles.logo, styles[color], isHover ? styles.isHover : null)}>
        <Text tag="h2" typo="heading-xl">Walk of art</Text>
      </div>
	)
}
