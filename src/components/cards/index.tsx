import React from "react"
import styles from "./index.module.scss"
import cardImg from "../../assets/images/cardImg.png"

export type IProps = {
    link?: string,
    img?: string
}

export const Cards: React.FC<IProps> = ({ link, img }: IProps) => {

    return (
        <div className={styles.cards}>
            <div className={styles.cards__frame}>
                <img className={styles.cards__picture} src={img ? img : cardImg.src} alt="" />
            </div>
            <a className={styles.cards__link} href={link}>Voir l'oeuvre</a>
        </div>
    )
}
