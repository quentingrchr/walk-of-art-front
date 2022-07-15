import React from "react"
import {Logo, Text, HeadingStrong, InputGroup, Button} from "@components"
import { useForm } from "react-hook-form";
import landingGallery from "../../src/assets/images/landingGallery.png"
import s from "./index.module.scss"
import { ImageCard } from "@components/image-card";


const LandingBottom: React.FC = () => {
    const { register, handleSubmit, watch } = useForm({
        mode: "onBlur",
        // defaultValues,
      });
    return (
        <>
        {/* <ImageCard src={landingGallery} alt={landingGallery} orientation='portrait'/> */}
        <div className={s.landing__gallery}>
                <HeadingStrong elementColor="success-light" content="Galerie des oeuvres exposées"/>
                <div className={s.landing__galleryContainer}>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src="/_next/static/media/landingGallery.88360cb8.png" alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src="/_next/static/media/landingGallery.88360cb8.png" alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src="/_next/static/media/landingGallery.88360cb8.png" alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src="/_next/static/media/landingGallery.88360cb8.png" alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src="/_next/static/media/landingGallery.88360cb8.png" alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src="/_next/static/media/landingGallery.88360cb8.png" alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src="/_next/static/media/landingGallery.88360cb8.png" alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src="/_next/static/media/landingGallery.88360cb8.png" alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src="/_next/static/media/landingGallery.88360cb8.png" alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src="/_next/static/media/landingGallery.88360cb8.png" alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src="/_next/static/media/landingGallery.88360cb8.png" alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src="/_next/static/media/landingGallery.88360cb8.png" alt="" />
                    </picture>
                </div>
        </div>
        <div className={s.landing__contact}>
                <HeadingStrong elementColor="success-light" content="Nous sommes à votre disposition"/>
                    <Text tag="p" typo="paragraph-sm">Si vous souhaitez avoir d‘autres informations, n’hésitez pas à nous contacter !
    Nous tâcherons de vous répondre dans les meilleurs délais</Text>
            <form className={s.landing__formContact}>
                <InputGroup
                placeholder="example@xyz.com"
                register={register}
                id="description"
                type="email"
                label="Votre mail"
                guidance={null}
                />
                <InputGroup
                placeholder="Rédigez ici votre demande"
                register={register}
                id="description"
                type="textarea"
                label="Votre demande"
                guidance={null}
                />
                <Button label={"Envoyer"} color="white" bg="dark" type="submit" />
            </form>
            </div>
            <footer className={s.landing__footer}>
                <div className={s.landing__footerLogo}>
                    <Logo to={'/'} color="white" />
                </div>
                <div className={s.landing__footerLinks}>
                    <li>Politique de confidentalité</li>
                    <li>Conditions d’utilisation</li>
                    <li>Nous rejoindre</li>
                </div>
                <Text tag="p" typo="paragraph-md-bold">© 2022</Text>
            </footer>
        </>
    )
}

export default LandingBottom