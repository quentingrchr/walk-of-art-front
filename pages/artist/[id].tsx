import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form";
import s from "./index.module.scss"
import { Logo, Text, ImagesPreview, Button, Icon, Input } from '@components'

const data = {
    name: 'Fabien Deneau'
}

const Artist: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    const { register, handleSubmit } = useForm({ mode: "onBlur" });
    const onSubmit = (e: any) => {
        console.log("submit");
        e.preventDefault();
        handleSubmit((d) => {
          console.log(d)
        })(e);
    };

    return (
        <>
            <section className={s.artist}>
                <div className={s.artist__container}>
                    <Logo to="/" color="white"/>
                    <ImagesPreview
                        primaryImage="https://iili.io/FhDd9R.jpg"
                        secondaryImages={[
                            'https://iili.io/A7NDAP.jpg',
                            'https://iili.io/dwagF2.png',
                            'https://iili.io/hy8bLv.jpg'
                        ]}
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
                    <div className={s.reaction}>
                        <Button
                            label={'Je soutiens cet artiste'}
                            to="https://www.google.com"
                            bg="light"
                            color="black"
                            target="_blank"
                        />
                    </div>
                    <form className={s.comments} onSubmit={onSubmit}>
                        <Text typo="label" tag="label" color="white">Ajouter un commentaire</Text>
                        <Input
                            register={register}
                            placeholder="Écrivez votre commentaire ici..."
                            type="text"
                            required={true}
                            id='id'
                            icon='avatar'
                        />
                    </form>
                    <Text tag="h3" typo="heading-xs">Réseaux sociaux de<br/>{data.name}</Text>
                    <ul className={s.rs_list}>
                        <li className={s.rs_list__rs}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Icon type="facebook" size="xlarge" color="dark"/>
                            </a>
                        </li>
                        <li className={s.rs_list__rs}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Icon type="twitter" size="xlarge" color="dark"/>
                            </a>
                        </li>
                    </ul>
                    <Text tag="h3" typo="heading-xs">Liens de {data.name}</Text>
                    <Button
                        label={'Site personnel'}
                        to="https://www.google.com"
                        bg="light"
                        color="black"
                        target="_blank"
                    />
                    <Button
                        label={'Portfolio'}
                        to="https://www.google.com"
                        bg="light"
                        color="black"
                        target="_blank"
                    />
                    <Button
                        label={'Boutique en ligne'}
                        to="https://www.google.com"
                        bg="light"
                        color="black"
                        target="_blank"
                    />
                </div>
            </section>
        </>
    )
}

export default Artist