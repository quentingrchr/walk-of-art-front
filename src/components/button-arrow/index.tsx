import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import s from "./index.module.scss"

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
        <a className={s.button} href={to} onClick={handleClick}>
            {label}
        </a>
    )
}
