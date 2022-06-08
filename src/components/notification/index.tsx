import React from "react"
import { Button, Icon, Text } from ".."

import styles from "./index.module.scss"
import cn from 'classnames'

export type IProps = {
    type: "success" | "error" | "commentary"
    children: React.ReactNode
    cta?: {
        label: string
        to?: any
        target?: string
        onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | undefined,
    }
}


const IconSelector = {
    "success" : <Icon type="check" size="medium" color="success"/>,
    "error" : <Icon type="cross" size="medium" color="error"/>,
    "commentary" : <Icon type="commentary" size="medium"/>,
}



export const Notification: React.FC<IProps> = ({type, cta, children} : IProps) => {
    return(
    <div className={cn(styles.notification, styles[type])}>
        <div className={styles.notification__content}>
            {IconSelector[type]}
            <Text tag="p" typo="guidance">
                {children}
            </Text>
        </div>
        { cta && <Button {...cta} type="button" icon="rightArrow" fullWidth={false} /> }
    </div> 
    )
}
