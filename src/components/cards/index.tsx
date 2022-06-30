import React from "react"
import styles from "./index.module.scss"
import cardImg from "../../assets/images/cardImg.png"
import { Button } from ".."

export type IProps = {
    link?: string,
    img?: string,
    title: string,
}

export const Cards: React.FC<IProps> = ({ link, img, title }: IProps) => {

    return (
        <div className={styles.cards}>
            <div className={styles.cards__frame}>
                <img className={styles.cards__picture} src={img ? img : cardImg.src} alt="" />
                <div className={styles.cards__frame__button}>
                    <Button label="Voir l’oeuvre" to={"/"} icon="rightArrow" bg="light" color="black" size="small"/>
                </div>
            </div>
            <a className={styles.cards__link} href={link}>{title}</a>
        </div>
    )
}
