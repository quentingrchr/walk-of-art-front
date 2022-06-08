import React from "react"
import Link from "next/link"
import { Icon } from "@components"
import s from "./index.module.scss"

export type IProps = {
    id: string
    img: {
        src: string
        alt?: string
    }
    title: string
    remainingHours: number

}

export const ExpoCard: React.FC<IProps> = ({id, img, title, remainingHours}: IProps) => {
    return (
        <Link href={`/expo/${id}`}>
            <a className={s.card}>
                <div className={s.imgContainer}>
                    <img className={s.img} src={img.src} alt={img.alt} />
                </div>
                <div className={s.cardContent}>
                    <p className={s.cardTitle}>{title}</p>
                    {remainingHours && (<div className={s.cardInfo}>
                        <span className={s.cardIcon}>
                            <Icon type="avatar" size="small"/>
                        </span>
                        <span className={s.cardTime}>
                            {`${remainingHours}h restantes`}
                        </span>
                    </div>)}
                </div>
            </a>
        </Link>
    )
}
