import React from "react"
import styles from "./index.module.scss"
import { Logo, Navbar } from "@components"
import IconPerson from '../../assets/images/icons/icon-person.svg'
import IconLogout from '../../assets/images/icons/icon-logout.svg'


export type IProps = {

}

export const Header: React.FC<IProps> = (props: IProps) => {
  
	return (
    <header className={styles.header}>
			<Logo />
			<Navbar />
			<div className={styles.wrapper}>
				<a href="/profil" className={styles.link}>
					<img src={IconPerson.src} />
				</a>
				<a href="/sign-in" className={styles.link}>
					<img src={IconLogout.src} />
				</a>
			</div>
    </header>
    )
}
