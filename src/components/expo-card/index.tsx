import React from "react"
import Link from "next/link"
import { Icon } from "@components"
import s from "./index.module.scss"
import cn from "classnames";
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

const renderIcon = (type) => {
    if(type === 'remaining') {
        return <Icon type="chrono" size="small" color="success"/>
    }
    if(type === 'completed') {
        return <Icon type="cross" size="small" color="error"/>
    }
    if(type === 'incoming') {
        return <Icon type="calendar" size="small" color="info"/>
    }
    return null
}


export const ExpoCard: React.FC<IProps> = ({id, img, title, remainingHours, type}: IProps) => {
    return (
        <Link href={`artist/expo/${id}`}>
            <a className={s.card}>
                <div className={s.imgContainer}>
                    <img className={s.img} src={img.src} alt={img.alt} />
                    <div className={s.cards__frame__button}>
                        <Button label="Voir" to={"/"} icon="rightArrow" bg="light" color="black" size="small"/>
                    </div>
                </div>
                <div className={s.cardContent}>
                    <p className={s.cardTitle}>{title}</p>
                    { 
                        remainingHours && (
                            <div className={cn(s.cardInfo, s[type])}>
                                <span className={s.cardIcon}>
                                    {
                                        renderIcon(type)
                                    }
                                </span>
                                <span className={s.cardTime}>
                                    {displayTime(type, remainingHours)}
                                </span>
                            </div>
                        )
                    }
                </div>
            </a>
        </Link>
    )
}
