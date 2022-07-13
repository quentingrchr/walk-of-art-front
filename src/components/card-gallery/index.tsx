import React from "react"
import styles from "./index.module.scss"
import NextLink from "next/link"
import { Button, Text, Icon } from ".."
import BankCard from "../../assets/images/BankCard.png"
import { getDateWithoutHours } from "../../utility"
import cn from 'classnames'
import { ImageCard } from "@components/image-card"


export type IProps = {
    id: string,
    img?: string,
    title: string,
    status?: string,
    createdAt: string,
    date_end: string,
    date_start: string,
    type: string
}

export const CardGallery: React.FC<IProps> = ({id ,img, title, status, createdAt, date_end, date_start, type = 'work'}: IProps) => {
    

    return (
        <div className={styles.cardGallery}>
            <NextLink href={type === 'work' ? `/artist/work/${id}` : `/artist/exhibition/${id}`}>
                <a>
                    <div className={styles.cardGallery__pictureContainer}>
                        {
                            status === 'remaining' ? 
                            <div className={cn(styles.cardGallery__tag, styles.cardGallery__isRemaining)}>
                                <Text tag="p" typo="guidance">
                                    En exposition
                                </Text>
                            </div> 
                            : status === 'incoming' ?
                            <div className={cn(styles.cardGallery__tag, styles.cardGallery__isIncoming)}>
                                <Text tag="p" typo="guidance">
                                    A venir
                                </Text>
                            </div>
                            : status === 'pending' ?
                            <div className={cn(styles.cardGallery__tag, styles.cardGallery__isPending)}>
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
                        { type === 'work' ? <div  className={styles.cardGallery__picture}>
                            <img className={styles.cardGallery__picture} src={img ? img : BankCard.src} alt="gallery" />
                        </div> :
                        <ImageCard size="small" src={BankCard} alt={BankCard} orientation='portrait'/>
                        }
                        <div className={styles.cardGallery__link}>
                            <div className={styles.cardGallery__overlay}></div>
                            <Button label="voir plus" type="button" icon="rightArrow" fullWidth={false} bg="light" color="black" to={type === 'work' ? `/artist/work/${id}` : `/artist/exhibition/${id}`}/>
                        </div>
                    </div>
                    <Text tag="p" typo="heading-sm">
                        {title}
                    </Text>
                    <div className={styles.cardGallery__createdAt}>
                        <Text tag="p" typo="guidance">
                            Créée le {getDateWithoutHours(createdAt)}
                        </Text>
                    </div>
                    <br />
                    {
                        status === 'remaining' ? <div className={styles.cardGallery__remaining}>
                        <Text tag="p" typo="guidance">
                            Exposée jusqu’au {getDateWithoutHours(date_end)}
                        </Text> 
                        </div>
                        : status === 'incoming' ? <div className={styles.cardGallery__incoming}>
                        <Text tag="p" typo="guidance">
                        Sera exposée du {getDateWithoutHours(date_start)} au {getDateWithoutHours(date_end)}
                        </Text> 
                        </div>
                        : status === 'refused' ? <div className={styles.cardGallery__refused}>
                        <Text tag="p" typo="guidance">
                        Réfusée en modération
                        </Text> 
                        </div>
                        : status === 'completed' ? <div className={styles.cardGallery__completed}>
                        <Text tag="p" typo="guidance">
                        Terminée depuis le {getDateWithoutHours(date_end)}
                        </Text> 
                        </div>
                        : null
                    }
                    <div className={styles.cardGallery__seperator}></div>
                </a>
            </NextLink>
        </div>
    )
}
