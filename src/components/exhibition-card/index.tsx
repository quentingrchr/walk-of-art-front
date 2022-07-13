import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Icon } from "@components"
import s from "./index.module.scss"
import cn from "classnames";
import { displayTime } from "../../utility"
import { Button } from ".."
import { ColorsType } from "../../types"

type Entity = "artist" | "moderator"
type Type = "completed" | "remaining" | "incoming"

export type IProps = {
    id: string
    entity: Entity
    img: {
        src: string
        alt?: string
    }
    title?: string
    remainingHours?: number
    dateStartExhib?: string
    type?: Type
}

interface ITime {
	color: ColorsType,
	time: string
}


export const ExhibitionCard: React.FC<IProps> = ({id, entity, img, title, remainingHours, dateStartExhib, type}: IProps) => {

    const [time, setTime] = useState<ITime>({color: "black", time: ""})

    const renderIcon = (type: Type) => {
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

    const calculateTime = () => {
        if(dateStartExhib) {
            const date1 = new Date()
            const date2 = new Date(dateStartExhib)

            const diffTime = date2 - date1
            const diffDays = diffTime / (1000 * 60 * 60 * 24)

            if(diffDays < 1 ) {
                let diffHours = Math.floor(diffTime / (1000 * 60 * 60))
                setTime({color: "error", time: `Publiée dans ${diffHours}h`})	
            } else if(diffDays > 1 && diffDays <= 2) {
                setTime({color: "warning", time: `Publiée dans ${Math.floor(diffDays)}j`})	
            } else {
                setTime({color: "success", time: `Publiée dans ${Math.floor(diffDays)}j`})	
            }
        }
	}

    useEffect(() => {
		calculateTime()
	}, [dateStartExhib])

    return (
        <Link href={entity === "artist" ? `/artist/exhibition/${id}` : `/moderator/exhibition/${id}`}>
            <a className={s.card}>
                <div className={s.imgContainer}>
                    <img className={s.img} src={img.src} alt={img.alt} />
                    <div className={s.cards__frame__button}>
                        <Button label="Voir" to={entity === "artist" ? `/artist/exhibition/${id}` : `/moderator/exhibition/${id}`} icon="rightArrow" bg="light" color="black" size="small"/>
                    </div>
                </div>
                <div className={s.cardContent}>
                    {title && <p className={s.cardTitle}>{title}</p>}
                    
                    {entity === "artist" &&
                        remainingHours && type && (
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

                    {entity === "moderator" &&
                        <p className={cn(s.time, s[time.color])}>{time.time}</p>
                    }
                </div>
            </a>
        </Link>
    )
}
