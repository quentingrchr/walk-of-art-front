import React from "react"
import styles from "./index.module.scss"
import cardImg from "../../assets/images/cardImg.png"
import { Button } from ".."

export type IProps = {
    link?: string,
    img?: string,
    title: string,
    handleClick?: () => {},
    showLink?: boolean
}

export const Cards: React.FC<IProps> = ({ link, img, title, showLink, handleClick }: IProps) => {

    return (
        <div className={styles.cards} onClick={handleClick}>
            <div className={styles.cards__frame}>
                <img className={styles.cards__picture} src={img ? img : cardImg.src} alt="" />
                {showLink &&
                    <div className={styles.cards__frame__button}>
                        <Button label="Voir" to={"/"} icon="rightArrow" bg="light" color="black" size="small" />
                    </div>
                }
            </div>
            <p className={styles.title}>{title}</p>
            {showLink &&
                <a className={styles.cards__link} href={link} />}
        </div>
    )
}
