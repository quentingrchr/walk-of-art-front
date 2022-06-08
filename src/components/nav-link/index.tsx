import React from "react"
import { useRouter } from 'next/router'
import cx from 'classnames';
import styles from "./index.module.scss"

export type IProps = {
    href: string;
    children: React.ReactNode; 
}

export const NavLink: React.FC<IProps> = (props: IProps) => {
    
    const { href, children } = props

    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <a 
            href={href} 
            onClick={e => handleClick(e)} 
            className={cx(styles.navLink, router.asPath === href ? styles.active : null)}
        >
            {children}
        </a>
    )
}
