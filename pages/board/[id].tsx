import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import s from "./index.module.scss"
import cn from "classnames"
import { Icons } from "@interfaces/index";
import { IReaction, Smiley } from "../../src/types";
import { Logo, Text, ImagesPreview, Button, Icon, ImagePreviewModal } from "@components"
import { useSetRecoilState } from "recoil"
import { activeModalState, IMAGE_PREVIEW_MODAL_ID } from "@recoil/modal/atom"
import { axiosInstance, generateVisitorId } from './../../src/utility'
import axios from "axios"
import { BASE_API_URL } from "@const/index"

const fetchedData =     {
    "id": "0c20524a-af25-44a7-b546-dc4cbd1b5211",
    "title": "fxxfrxf",
    "dateStart": "2022-07-15T00:00:00+00:00",
    "dateEnd": "2022-07-15T00:00:00+00:00",
    "createdAt": "2022-07-15T10:53:42+00:00",
    "work": {
        "workFiles": [
            "/api/work_files/0cca24b8-93ca-4c53-9864-e870789ebdce",
            "/api/work_files/4173976e-8325-411c-9c0c-4bb13770d10b",
            "/api/work_files/c396420d-ae62-4ad2-a3e8-621f77fcd722"
        ]
    },
    "board": "/api/boards/3c9b3f59-e87e-4a23-9f4d-86609cde54a1"
}

const data = {
    name: 'Fabien Deneau',
    images: [
        'https://iili.io/A7NDAP.jpg',
        'https://iili.io/dwagF2.png',
        'https://iili.io/hy8bLv.jpg'
    ],
    reactions: [
        {
            count:32,
            name: 'smiley-smile'
        },
        {
            count:5,
            name: 'smiley-like'
        },
        {
            count:12,
            name: 'smiley-love'
        },
        {
            count:53,
            name: 'smiley-lol'
        },
        {
            count:11,
            name: 'smiley-wow'
        },
    ] as IReaction[]
}

const Artist: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    const { register, handleSubmit } = useForm({ mode: "onBlur" })
    const setActiveModal = useSetRecoilState(activeModalState)

    const [displayReactions, setDisplayReactions] = useState<boolean>(false)
    const [currentIcon, setCurrentIcon] = useState<Icons>('smiley-smile')
    const [reacted, setReacted] = useState<boolean>(false)
    const [visitorId, setVisitorId] = useState<string | null>(null)

    useEffect(() => {
        const currentVisitorId = localStorage.getItem('visitorId')
        // setVisitorId(currentVisitorId ? currentVisitorId : generateVisitorId())
        setVisitorId('36146a25-6c71-476b-b37e-b9b8fa9094b1')
    }, [])

    const onSubmit = (e: any) => {
        e.preventDefault()
        handleSubmit((d) => {
            return d
        })(e)
    }
    const handlePreviewClick = ():void => {
        setActiveModal(IMAGE_PREVIEW_MODAL_ID)
    }

    const handleReactionsClick = ():void => {
        setDisplayReactions(!displayReactions)
    }

    const handleReactionClick = (reaction): any => {
        // Close dropdown
        setDisplayReactions(false)
        // Set button icon & background
        setCurrentIcon(reaction.name)
        if(!reacted) setReacted(true)
        // SEND REQUEST
        // postReaction(reaction.name)
    }

    const postReaction = (type: Smiley) =>
    {
        const DTO = {
            "visitorId": visitorId,
            "reaction": type
        }
        console.log(DTO)
        axios.post(
            `${BASE_API_URL}/reactions/${id}`,
            { body: DTO },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${DTO.visitorId}`,
                }
            }
        )
            .then((res) => res.data)
            .catch((error) => console.log(error))

    }

    return (
        <>
            <section className={s.artist}>
                <div className={s.artist__container}>
                    <Logo to="/" color="white"/>
                    <ImagesPreview
                        primaryImage="https://iili.io/FhDd9R.jpg"
                        secondaryImages={data.images}
                        onClick={handlePreviewClick}
                    />
                    <div className={s.title}>
                        <Text tag="h2" typo="heading-md">Voila le titre de l'exposition que je visite</Text>
                    </div>
                    <div className={s.description}>
                        <Text tag="p" typo="paragraph-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet dictumst sed aliquet nulla sed. Arcu at sagittis a placerat. Aenean cum ut dolor platea diam. Aliquam mi ac dictum tempor eget dictum tristique imperdiet. Tristique consectetur vitae mi amet, adipiscing quis vitae ac. Nunc sit eu elementum cursus. Sagittis lectus eu turpis et adipiscing tempor quis id egestas. Ac mi nibh at interdum id turpis. Interdum sapien purus quis id varius molestie tristique sed.</Text>
                        <div className={s.description__name}>
                            <Text tag="p" typo="paragraph-md">{data.name}</Text>
                        </div>
                    </div>
                    <div className={s.reactions}>
                        <Button
                            label={'Je soutiens cet artiste'}
                            to="https://www.google.com"
                            bg="light"
                            color="black"
                            target="_blank"
                        />
                        <div className={cn(s.reactions__button, reacted && s.reacted)} onClick={handleReactionsClick}>
                            <Icon type={currentIcon} size="large"/>
                        </div>
                        {
                            displayReactions && (
                                <div className={s.reactions__container}>    
                                    <ul className={s.reactions__list}>
                                        {
                                            data.reactions.map((reaction, index) =>
                                            (
                                                <li
                                                    className={s.reactions__icon}
                                                    key={index}
                                                    onClick={() => handleReactionClick(reaction)}
                                                >
                                                    <Icon type={reaction.name} size="large"/>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                    {/* Commentaires */}
                    {/* <form className={s.comments} onSubmit={onSubmit}>
                        <div className={s.comments__label}>
                            <Text typo="label" tag="label" color="white">Ajouter un commentaire</Text>
                        </div>
                        <Input
                            register={register}
                            placeholder="Écrivez votre commentaire ici..."
                            type="text"
                            required={true}
                            id='id'
                            icon='smiley'
                        />
                    </form> */}
                    <Text tag="h3" typo="heading-xs">
                        Réseaux sociaux de
                        <br />
                        {data.name}
                    </Text>
                    <ul className={s.rs_list}>
                        <li className={s.rs_list__rs}>
                            <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <Icon type="facebook" size="xlarge" color="dark" />
                            </a>
                        </li>
                        <li className={s.rs_list__rs}>
                            <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <Icon type="twitter" size="xlarge" color="dark" />
                            </a>
                        </li>
                    </ul>
                    <Text tag="h3" typo="heading-xs">
                        Liens de {data.name}
                    </Text>
                    <Button
                        label={"Site personnel"}
                        to="https://www.google.com"
                        bg="light"
                        color="black"
                        target="_blank"
                    />
                    <Button
                        label={"Portfolio"}
                        to="https://www.google.com"
                        bg="light"
                        color="black"
                        target="_blank"
                    />
                    <Button
                        label={"Boutique en ligne"}
                        to="https://www.google.com"
                        bg="light"
                        color="black"
                        target="_blank"
                    />
                </div>
            </section>
            <ImagePreviewModal
                title="Voice le titre de cette oeuvre"
                images={data.images}
            />
        </>
    )
}

export default Artist
