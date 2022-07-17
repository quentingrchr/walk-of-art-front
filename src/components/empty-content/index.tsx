import React from "react"
import style from "./index.module.scss"
import { Text, Button } from "@components"

enum Entity {
    works = "works",
    exhibs = "exhibs",
    moderation = "moderation"
}

export type IProps = {
    entity: Entity,
    labelButton?: string,
    to?: string
}

export const EmptyContent: React.FC<IProps> = ({entity, labelButton, to}: IProps) => {

    let title:string;

    switch(entity) {
        case Entity.works:
            title = "Vous n'avez aucune oeuvre."
            break
        case Entity.exhibs:
            title = "Vous n'avez aucune exposition"
            break
        case Entity.moderation:
            title = "Vous n'avez aucune exposition à modérer"
            break
        default:
            title = "Aucun résultat"
            break
    }

    return (
        <div className={style.wrapper}>
            <Text tag="h2" typo="paragraph-lg">{title}</Text>
            {labelButton && to &&
                <Button label={labelButton} to={to} />
            }
        </div>
    )
}
