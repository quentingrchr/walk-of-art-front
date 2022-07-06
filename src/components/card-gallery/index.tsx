import React from "react"
import styles from "./index.module.scss"
import { Button, Text } from ".."
import cardImg from "../../assets/images/cardImg.png"
import { getDateWithoutHours } from "../../utility"


export type IProps = {
    id: string,
    img?: string,
    title: string,
    isExposed?: boolean,
    createdAt: string,
}

export const CardGallery: React.FC<IProps> = ({id, img, title, isExposed, createdAt}: IProps) => {

    return (
        <div className={styles.cardGallery}>
            <a href={`work/${id}`}>
            <div className={styles.cardGallery__pictureContainer}>
                {
                    isExposed ? <div className={styles.cardGallery__isExposed}>
                        <Text tag="p" typo="guidance">
                            En exposition
                        </Text>
                    </div> : false
                }
                <img className={styles.cardGallery__picture} src={img ? img : cardImg.src} alt="gallery" />
                <div className={styles.cardGallery__link}>
                    <div className={styles.cardGallery__overlay}></div>
                    <Button label="voir plus" type="button" icon="rightArrow" fullWidth={false} bg="light" color="black" to={`/work/${id}`}/>
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
            <div className={styles.cardGallery__seperator}></div>
            </a>
        </div>
    )
}
