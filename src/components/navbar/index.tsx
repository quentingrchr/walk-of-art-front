import React from "react"
import { NavLink } from "@components"
import styles from "./index.module.scss"


interface dataNav {
	label: string,
	path: string
}


export const Navbar: React.FC = () => {

	const datas: dataNav[] = [
		{
			label: "Accueil",
			path: "/artist/dashboard",
		},
		{
			label: "Oeuvres",
			path: "/artist/works",
		},
		{
			label: "Expositions",
			path: "/artist/exhibitions"
		}
	]


	return (
		<nav className={styles.navbar}>
			{ datas.map((data, index) => <NavLink key={index} label={data.label} href={data.path} />) }
		</nav>
	)
}
	