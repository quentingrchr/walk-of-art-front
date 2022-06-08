import React from "react"
import { Header } from "@components"
import styles from "./index.module.scss"

export type IProps = {
    isLogged: boolean;
    children: React.ReactNode; 
}

export const TemplatePage: React.FC<IProps> = (props: IProps) => {

    const { isLogged, children } = props

    return (
        <>
            <Header isLogged={isLogged} />
            <main className={styles.mainContainer}>
                { children }
            </main>
        </>
    )
}
