import React, { useState } from "react"
import styles from "./index.module.scss"
import { Text } from "./../text/index"
import { ExpoStates } from "./../../types"

export type IProps = {
    states: ExpoStates[],
    onClick: (index: number) => void
}

export const ExpoStateBar: React.FC<IProps> = ({states, onClick}: IProps) => {
    const [activeStateIndex, setActiveStateIndex] = useState(0)

    const toggleClass = (stateIndex) =>
    {
        setActiveStateIndex(stateIndex) 
    }

    return (
        <div className={styles.state_bar}>
            <ul className={styles.states_list}>
                {
                    states.map((value, index) => {
                        return (
                            <li
                                key={index}
                                className={`${styles.state} ${activeStateIndex === index && styles.isActive}`}
                                onClick={() =>
                                {
                                    onClick(index)
                                    toggleClass(index)
                                }}>
                                <Text
                                    tag="p"
                                    typo="heading-sm"
                                >{value.label}</Text>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
