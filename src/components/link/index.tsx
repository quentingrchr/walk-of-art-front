import React from "react"
import styles from "./index.module.scss"
import NextLink from 'next/link'
import { isEternalUrl } from '../../utility'
import cn from 'classnames'
import { ColorsType } from "../../types"


export interface IProps {
    label: string,
    to?: any,
    target?: string,
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | undefined,
    color?: ColorsType,
}


export const Link: React.FC<IProps> = ({ label, to, target, onClick, color = 'black'}: IProps) => {
    
    if (typeof to === "string") {
        return (
            isEternalUrl(to) ? (<a className={cn(styles.link, styles[color])} href={to} target={target}>{label}</a>) : <div className={cn(styles.link, styles[color])}> <NextLink href={to}>{label}</NextLink></div>
        )
    } else if (onClick) {
        return <div className={cn(styles.link, styles[color])} onClick={(e) => onClick(e)}>{label}</div>
    } else { 
        return null
    }

}
