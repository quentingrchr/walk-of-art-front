import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import style from "./index.module.scss"
import cn from "classnames"
import { TemplatePage, HeadingStrong, Text, Icon, ImagesPreview, Button } from "@components"
import cardImg from "../../src/assets/images/cardImg.png"
import { getDateWithoutHours } from "../../src/utility"


interface Work {
    id: string,
    title: string,
    description: string,
    created_at: string,
    exhibitions?: AttachedExhib[]
}

interface AttachedExhib {
    title: string,
    status: string
}


const data: Work = {
    "id": "1",
    "title": "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
    "description": "Une description",
    "created_at": "2022-06-27T23:09:10.693Z",
    "exhibitions": [
        {
            "title": "Titre de l'exhibition",
            "status": "validate"
        },
        {
            "title": "Titre de l'exhibition 2",
            "status": "pending"
        }
    ]
}

const Works: React.FC = () => {

    const router = useRouter()
    const { id } = router.query

    const [work, setWork] = useState<Work>({
        "id": "",
        "title": "",
        "description": "",
        "created_at": "",
        "exhibitions": []
    })

    /* Init work */
    useEffect(() => {
        setWork(data)
    }, [])


    return (
        <TemplatePage isLogged={true}>
            <span className={style.backLink}>
                <a href="/works">
                    <Icon type="leftArrow" size="small" color="black" />
                    <Text tag="p" typo="paragraph-md">Retour à la liste des oeuvres</Text>
                </a>
            </span>
            <section className={style.mainSection}>
                <ImagesPreview primaryImage={cardImg.src} secondaryImages={[cardImg.src, cardImg.src]} />
                <Text tag="h1" typo="heading-lg">{work.title}</Text>
                <Text tag="p" typo="paragraph-md">{work.description}</Text>
                <span className={style.date}>{`Créée le ${getDateWithoutHours(work.created_at)}`}</span>

                <button className={style.exhibButton} onClick={() => console.log('ok')}>Créer une exposition avec cette oeuvre</button>
                
                <div className={style.actionsWrapper}>
                    <Button label="Modifier l'oeuvre" bg="light" color="black" onClick={() => console.log('modifier')} />
                    <Button label="Supprimer l'oeuvre" bg="dark" onClick={() => console.log('supprimer')} />
                </div>
            </section>
        </TemplatePage>
    )
}

export default Works