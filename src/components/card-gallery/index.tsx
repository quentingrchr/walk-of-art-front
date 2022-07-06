import React from "react"
import styles from "./index.module.scss"
import { Button, Text, Icon } from ".."
import cardImg from "../../assets/images/cardImg.png"
import { formatSqlToJsDate } from "../../utility"
import cn from 'classnames'


export type IProps = {
    img?: string,
    title: string,
    status?: string,
    createdAt: string,
}

export const CardGallery: React.FC<IProps> = ({img, title, status, createdAt}: IProps) => {

    const getFormatDate = (createdAt: string) => {
        let date = formatSqlToJsDate(createdAt)
        let formatDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

        return formatDate
    }
    

    return (
        <div className={styles.cardGallery}>
            <a href="">
            <div className={styles.cardGallery__pictureContainer}>
                {
                    status === 'validate' ? 
                    <div className={cn(styles.cardGallery__tag, styles.cardGallery__isValidate)}>
                        <Text tag="p" typo="guidance">
                            En exposition
                        </Text>
                    </div> 
                    : status === 'pending' ?
                    <div className={cn(styles.cardGallery__tag, styles.cardGallery__isPending)}>
                        <Text tag="p" typo="guidance">
                            A venir
                        </Text>
                    </div>
                    : status === 'moderate' ?
                    <div className={cn(styles.cardGallery__tag, styles.cardGallery__isModerated)}>
                        <Text tag="p" typo="guidance">
                            En Modération
                        </Text>
                    </div>
                    : status === 'refused' ?
                    <div className={cn(styles.cardGallery__tag, styles.cardGallery__isRefused)}>
                        <Icon type="warning" size="large"/>
                    </div>
                    : ''
                }
                <img className={styles.cardGallery__picture} src={img ? img : cardImg.src} alt="gallery" />
                <div className={styles.cardGallery__link}>
                    <div className={styles.cardGallery__overlay}></div>
                    <Button label="voir plus" type="button" icon="rightArrow" fullWidth={false} bg="light" color="black" to={"/"}/>
                </div>
            </div>
            <Text tag="p" typo="heading-sm">
                {title}
            </Text>
            <div className={styles.cardGallery__createdAt}>
                <Text tag="p" typo="guidance">
                    Créée le {getFormatDate(createdAt)}
                </Text>
            </div>
            <br />
            {
                status === 'validate' ? <div className={styles.cardGallery__validate}>
                <Text tag="p" typo="guidance">
                    Exposée jusqu’au {getFormatDate(createdAt)}
                </Text> 
                </div>
                : status === 'pending' ? <div className={styles.cardGallery__pending}>
                <Text tag="p" typo="guidance">
                Sera exposée du {getFormatDate(createdAt)} au {getFormatDate(createdAt)}
                </Text> 
                </div>
                : status === 'refused' ? <div className={styles.cardGallery__refused}>
                <Text tag="p" typo="guidance">
                Réfusée en modération
                </Text> 
                </div>
                : status === 'finish' ? <div className={styles.cardGallery__finish}>
                <Text tag="p" typo="guidance">
                Terminée depuis le {getFormatDate(createdAt)}
                </Text> 
                </div>
                : ''
                }
            <div className={styles.cardGallery__seperator}></div>
            </a>
        </div>
    )
}
