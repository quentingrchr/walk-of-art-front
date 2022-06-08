import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import cx from 'classnames';
import styles from "./index.module.scss"

export type IProps = {
    label: string
    href: string;
}

export const NavLink: React.FC<IProps> = (props: IProps) => {
    
    const { label, href } = props

    const router = useRouter()
    const [isActive, setIsActive] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    useEffect(() => {
        router.asPath === href ? setIsActive(true) : setIsActive(false)
    }, [router])

    return (
        <a 
            href={href} 
            onClick={e => handleClick(e)} 
            className={cx(styles.navLink, isActive ? styles.active : null)}
        >
            {label}
        </a>
    )
}
