import React, { ReactElement, ReactNode } from "react"
import styles from "./index.module.scss"

export type IProps = {
    children: ReactNode[] | null
}

export const NotificationWrapper: React.FC<IProps> = ({children}: IProps) => {
    return (
        <div className={styles.containerWrapper}>
            <div className={children ? styles.notificationWrapper : styles.notificationWrapper__empty}>
                {
                    !children ? <p>Vous n’avez pas de notifications</p> : children
                }
            </div> 
        </div>
    )
}
