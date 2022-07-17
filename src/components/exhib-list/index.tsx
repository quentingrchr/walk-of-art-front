import React from "react"
import styles from "./index.module.scss"
import { Exhibition } from "../../types"
import { ExhibitionCard } from "../exhibition-card"

export type IProps = {
    exhibList: Exhibition[],
    type: "completed" | "remaining" | "incoming"
}

export const ExhibList: React.FC<IProps> = ({exhibList, type}: IProps) => {

    return (
        <ul className={styles.expos_list}>
            {
                exhibList.map((exhib, index) =>
                {
                    return (
                        <li className={styles.expo} key={index}>
                            <ExhibitionCard
                                id={exhib.id}
                                entity="artist"
                                img={{
                                    src: exhib.work.mainFile.fileUrl
                                }}
                                title={exhib.title}
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
