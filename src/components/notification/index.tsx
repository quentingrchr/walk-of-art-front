import React from "react"
import { Button, Icon, Text } from ".."
import { Colors } from "@interfaces/index";

import styles from "./index.module.scss"
import cn from 'classnames'

export type IProps = {
    type?: string
    iconColor?: Colors
}

export const Notification: React.FC<IProps> = ({type = 'commentary', iconColor} : IProps) => {
    return(
    <div className={cn(styles.notification, styles[type])}>
        <div className={styles.notification__content}>
            <Icon type={type} size="medium" color={iconColor}/>
            <Text tag="p" typo="guidance">
                {
                    type === "commentary" ? <>L’exposition' <b>“Au dela du monde”</b> 'a été commentée</> 
                    : type === "check" ? <>L’exposition <b>“Au dela du monde”</b> a été validée pour publication</> 
                    : <>L’exposition <b>“Au dela du monde”</b> a été refusée pour publication</>
                }
            </Text>
        </div>
        <Button label="Voir l’exposition" type="button" iconButton={true} fullWidth={false} icon="rightArrow"/>
    </div> 
    )
}
