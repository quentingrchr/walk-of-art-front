import React from "react"
import { Button, Icon, Text } from ".."
import styles from "./index.module.scss"
import cn from 'classnames'

export type IProps = {
    type?: string
}

export const Notification: React.FC<IProps> = ({type = 'commentary'} : IProps) => {

    const handleClick = () => {}

    if(type === 'commentary') {
        return(
        <div className={styles.notification}>
            <div className={styles.notification__content}>
                <Icon type="commentary" size="medium"/>
                <Text tag="p" typo="guidance">L’exposition <b>“Au dela du monde”</b> a été commentée</Text>
            </div>
            <Button label="Voir l’exposition" type="button" iconButton={true} fullWidth={false} icon="rightArrow"/>
        </div> 
        )
    }else if(type === 'validate') {
        return(
        <div className={cn(styles.notification, styles.notification__validate)}>
            <div className={styles.notification__content}>
                <Icon type="check" size="medium" color="success"/>
                <Text tag="p" typo="guidance">L’exposition <b>“Au dela du monde”</b> a été validée pour publication</Text>
            </div>
            <Button label="Voir l’exposition" type="button" iconButton={true} fullWidth={false} icon="rightArrow"/>
        </div> 
        )
    }else {
        return (
            <div className={cn(styles.notification, styles.notification__refused)}>
                <div className={styles.notification__content}>
                    <Icon type="cross" size="medium" color="error"/>
                    <Text tag="p" typo="guidance">L’exposition <b>“Au dela du monde”</b> a été refusée pour publication</Text>
                </div>
                <Button label="Voir l’exposition" type="button" iconButton={true} fullWidth={false} icon="rightArrow"/>
            </div>
        )
    }
}
