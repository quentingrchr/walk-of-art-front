import React, { useState } from "react"
import styles from "./index.module.scss"
import { Text } from "./../text/index"
import { ExpoStates } from "./../../types"

export type IProps = {
    states: ExpoStates[],
    onClick: (index: number) => void
}

export const ExpoStateBar: React.FC<IProps> = ({states, onClick}: IProps) => {
    const [activeStateIndex, setActiveStateIndex] = useState<number>(0)
    const [afterInfos, setAfterInfos] = useState<React.CSSProperties>({})

    const toggleClass = (stateIndex) =>
    {
        setActiveStateIndex(stateIndex) 
    }

    return (
        <div className={styles.state_bar}>
            <ul className={styles.states_list} style={afterInfos}>
                {
                    states.map((value, index) => {
                        return (
                            <li
                                key={index}
                                className={`${styles.state} ${activeStateIndex === index && styles.isActive}`}
                                onClick={(_event: any) =>
                                {
                                    onClick(index)
                                    toggleClass(index)

                                    const cssVars = {
                                        '--after-width': `${_event.target.clientWidth}px`,
                                        '--after-left': `${_event.target.offsetLeft}px`
                                    } as React.CSSProperties

                                    setAfterInfos(cssVars)
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
