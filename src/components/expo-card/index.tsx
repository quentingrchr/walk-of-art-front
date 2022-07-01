import React from "react"
import Link from "next/link"
import { Icon } from "@components"
import s from "./index.module.scss"
import { displayTime } from "./../../utility"
import { Button } from ".."

export type IProps = {
    id: string
    img: {
        src: string
        alt?: string
    }
    title: string
    remainingHours: number,
    type: "completed" | "remaining" | "incoming"
}


export const ExpoCard: React.FC<IProps> = ({id, img, title, remainingHours, type}: IProps) => {
    return (
        <Link href={`/expo/${id}`}>
            <a className={s.card}>
                <div className={s.imgContainer}>
                    <img className={s.img} src={img.src} alt={img.alt} />
                    <div className={s.cards__frame__button}>
                        <Button label="Voir l'exposition" to={"/"} icon="rightArrow" bg="light" color="black" size="small"/>
                    </div>
                </div>
                <div className={s.cardContent}>
                    <p className={s.cardTitle}>{title}</p>
                    {remainingHours && (<div className={s.cardInfo}>
                        <span className={s.cardIcon}>
                            <Icon type="avatar" size="small"/>
                        </span>
                        <span className={s.cardTime}>
                            {displayTime(type, remainingHours)}
                        </span>
                    </div>)}
                </div>
            </a>
        </Link>
    )
}
