import React, { useState } from "react"
import styles from "./index.module.scss"
import Link from "next/link"
import { Logo, Navbar, DropdownButton, Icon, Button } from "@components"


export type IProps = {
	isLogged: boolean
}

export const Header: React.FC<IProps> = (props: IProps) => {

	let { isLogged } = props

	return (
    <header className={styles.header}>
		
		<Logo to="/"/>

		{isLogged ? 
		<>
			<Navbar />
			<div className={styles.wrapper}>
				<DropdownButton 
					label="Créer" 
					choices={[
						{label: 'Créer une oeuvre', to: '/create-work'},
						{label: 'Créer une exposition', to: '/create-exhibition'},
					]}
					className={styles.dropdownButton}
				/>
				<span className={styles.link}>
					<Icon type="notification" size="large" onClick={() => console.log('notification')}/>
				</span>
				<span className={styles.link}>
					<Link href="/profile">
						<a><Icon type="profile" size="large" /></a>
					</Link>
				</span>
				<span className={styles.link}>
					<Link href="/sign-in">
						<a><Icon type="logout" size="large" /></a>
					</Link>
				</span>
			</div>
		</>
		:
		<div className={styles.wrapper}>
			<Button label="Se connecter" to="/sign-in" bg="dark" />
			<Button label="S'inscrire" to="/sign-up" color="black" bg="light" />
		</div>
		}
		
    </header>
    )
}
