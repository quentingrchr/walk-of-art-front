import React, { useState, useRef, useEffect } from "react"
import styles from "./index.module.scss"
import { ExpoStates } from "./../../types"
import { ButtonArrow, Text } from '@components'

export type IProps = {
    states: ExpoStates[],
    onClick: (index: number) => void
}

export const ExpoStateBar: React.FC<IProps> = ({states, onClick}: IProps) => {
    const [activeStateIndex, setActiveStateIndex] = useState<number>(0)
    const [afterInfos, setAfterInfos] = useState<React.CSSProperties>({})
    const liRef = useRef<HTMLLIElement>(null)

    const toggleClass = (stateIndex) =>
    {
        setActiveStateIndex(stateIndex) 
    }

    useEffect(() => {
        if(!liRef.current) return
        const cssVars = {
            '--after-width': `${liRef.current.clientWidth}px`,
            '--after-left': `${liRef.current.offsetLeft}px`
        } as React.CSSProperties

        setAfterInfos(cssVars)
    },[liRef])

    return (
        <div className={styles.state_bar}>
            <ul className={styles.states_list} style={afterInfos}>
                {
                    states.map((value, index) => {
                        return (
                            <li
                                key={index}
                                ref={index === 0 ? liRef: null}
                                className={`${styles.state} ${activeStateIndex === index && styles.isActive}`}
                                onClick={(_event: any) => {
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
            <ButtonArrow to={'/artist/exhibitions'} label={'Voir tout'}/>
        </div>
    )
}
