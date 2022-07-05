import React, { ReactElement, ReactNode } from "react"
import styles from "./index.module.scss"
import { Notification } from ".."

export type IProps = {
    notifList: ReactNode[], 
}

export const NotificationWrapper: React.FC<IProps> = ({notifList}: IProps) => {
    return (
        <div className={styles.containerWrapper}>
            <div className={notifList.length ? styles.notificationWrapper : styles.notificationWrapper__empty}>
                {
                 notifList.length ? notifList.map(item => {
                     return (<Notification key={item.id} type='success' cta={{
                      label: 'Voir l’exposition',
                      to : '/'
                    }}>
                        <span>L’exposition <b>“{item.title}”</b>a été commentée</span>
                    </Notification>)
                  }) : <p>Vous n'avez pas de notifications</p>
                }
            </div> 
        </div>
    )
}
