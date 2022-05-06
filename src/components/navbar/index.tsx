import React from "react"
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
			path: "/",
		},
		{
			label: "Oeuvres",
			path: "/oeuvres",
		},
		{
			label: "Expositions",
			path: "/expositions"
		}
	]


	return (
		<nav className={styles.navbar}>
			{ datas.map(data => <a href={data.path} className={styles.navlink}>{data.label}</a>) }
		</nav>
	)
}
