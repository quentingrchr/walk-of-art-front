import React from "react"
import styles from "./index.module.scss"
import { ReservationWithExposition } from "./../../types"
import { ExpoCard } from "./../expo-card/"

export type IProps = {
    exposList: ReservationWithExposition[],
    type: "completed" | "remaining" | "incoming"
}

export const ExpoList: React.FC<IProps> = ({exposList, type}: IProps) => {

    return (
        <ul className={styles.expos_list}>
            {
                exposList.map((value, index) =>
                {
                    return (
                        <li className={styles.expo} key={index}>
                            <ExpoCard
                                id={value.id.toString()}
                                img={{
                                    src: 'https://iili.io/5zikPt.jpg'
                                }}
                                title={value.title}
                                remainingHours={8}
                                type={type}
                            />
                        </li>
                    )
                })
            }

        </ul>
    )
}
