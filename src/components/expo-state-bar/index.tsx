import React, { useState } from "react"
import styles from "./index.module.scss"
import { Text } from "./../text/index"
import { ExpoStates } from "./../../types"

export type IProps = {
    states: ExpoStates[]
}

export const ExpoStateBar: React.FC<IProps> = ({states}: IProps) => {
    const [activeState, setActiveState] = useState(states[0].label)

    const toggleClass = (state) =>
    {
        setActiveState(state) 
    }

    return (
        <div className={styles.state_bar}>
            <ul className={styles.states_list}>
                {
                    states.map((value, index) => {
                        return (
                            <li
                                key={index}
                                className={`${styles.state} ${activeState === value.label && styles.isActive}`}
                                onClick={() =>
                                {
                                    value.onClick()
                                    toggleClass(value.label)
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
