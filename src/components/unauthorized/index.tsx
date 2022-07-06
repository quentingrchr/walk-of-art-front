import React from "react"
import style from "./index.module.scss"
import { HeadingStrong, Text, Button } from "@components"

export type IProps = {

}

export const Unauthorized: React.FC<IProps> = (props: IProps) => {
    return (
        <section className={style.unauthorized}>
            <HeadingStrong content="Désolé" elementColor="error" size="xl" />
            <Text tag="p" typo="paragraph-md">Vous devez être connecté afin d'accéder à cette page.</Text>
            <Button label="Se connecter" bg="dark" to="/sign-in" />
        </section>
    )
}
