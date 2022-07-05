import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import s from "./index.module.scss"
import { Icon, Text } from '@components'

export type IProps = {
    label: string,
    to: string
}

export const ButtonArrow: React.FC<IProps> = ({ label, to }: IProps) => {
    const router = useRouter()
    
    const handleClick = (_event) => {
        _event.preventDefault()
        router.push(to)
    }
    
    return (
        <div className={s.button} onClick={handleClick}>
            <div className={s.button__label}>
                <Text tag="p" typo="label">{label}</Text>
            </div>
            <div className={s.button__arrows}>
                <ul className={s.button__arrows_ctn}>
                    <li className={s.arrow}>
                        <Icon type="rightArrow" size="small" color="black"/>
                    </li>
                    <li className={s.arrow}>
                        <Icon type="rightArrow" size="small" color="black"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
