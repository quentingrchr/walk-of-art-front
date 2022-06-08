import React from "react"
import { NavLink } from "@components"
import styles from "./index.module.scss"

export type IProps = {

}

interface dataNav {
	label: string,
	path: string
}


export const Navbar: React.FC<IProps> = (props: IProps) => {

	const datas: dataNav[] = [
		{
			label: "Accueil",
			path: "/dashboard",
		},
		{
			label: "Oeuvres",
			path: "/works",
		},
		{
			label: "Expositions",
			path: "/exhibitions"
		}
	]


	return (
		<nav className={styles.navbar}>
			{ datas.map((data, index) => <NavLink key={index} href={data.path}>{data.label}</NavLink>) }
		</nav>
	)
}
