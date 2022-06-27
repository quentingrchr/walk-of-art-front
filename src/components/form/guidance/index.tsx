import React from "react"
import styles from "./index.module.scss"
import cn from "classnames";
import { Icon } from "@components/icon";
import { Semantic } from "@interfaces/index";

export type IProps = {
    children?: React.ReactNode,
    type: Semantic,
}

export const Guidance: React.FC<IProps> = ({children, type}: IProps) => {
    return (
        <div className={cn(styles.container, styles[type])}>
            <div className={styles.icon}>
                <Icon type={type == 'error' ? 'cross': type == 'success' ? 'checkbox' : ''} size="xsmall" color={type}/>
            </div>
            <div className={styles.text}>
                {children}
            </div>
        </div>
    )
}
