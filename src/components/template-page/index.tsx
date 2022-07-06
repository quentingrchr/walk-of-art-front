import React from "react"
import { Header } from "@components"
import styles from "./index.module.scss"

export type IProps = {
    children: React.ReactNode; 
}

export const TemplatePage: React.FC<IProps> = ({children}: IProps) => {

    return (
        <>
            <Header />
            <main className={styles.mainContainer}>
                { children }
            </main>
        </>
    )
}
