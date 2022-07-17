import React, { useEffect, useState } from "react"
import style from "./index.module.scss"
import { useForm } from "react-hook-form";
import { Logo, HeadingStrong, Text, Button, ButtonArrow, Icon, InputGroup } from "@components"
import { Step } from "@components/stepper/step";

// Images
import Landing1 from '../../assets/images/landing-1.png'
import Landing2 from '../../assets/images/landing-2.png'
import Landing3 from '../../assets/images/landing-3.png'
import Landing4 from '../../assets/images/landing-4.png'
import Landing5 from '../../assets/images/landing-5.png'
import Landing6 from '../../assets/images/landing-6.png'
import Landing7 from '../../assets/images/landing-7.png'
import Landing8 from '../../assets/images/landing-8.png'
import mock from "../../assets/images/mock.png"
import landingGallery from "../../assets/images/landingGallery.png"
import landingGallery2 from "../../assets/images/landingGallery2.png"
import landingGallery3 from "../../assets/images/landingGallery3.png"
import landingGallery4 from "../../assets/images/landingGallery4.png"
import landingGallery5 from "../../assets/images/landingGallery5.png"
import qrCode from "../../assets/images/qrCode.png"
import visitor from "../../assets/images/visiteur.png"

enum ArtistDetails {
    work = "work",
    exhib = "exhib",
    display = "display"
}


export const Landing: React.FC = () => {

    const [artistDetails, setArtistDetails] = useState<ArtistDetails | null>(null)

    const visitorSteps = [
        {
            id: 1,
            label: "Le visiteur passe devant le panneau",
            number: 1,
            completed: true,
            img: mock.src
        },
        {
            id: 2,
            label: "Le visiteur scanne le QR codens",
            number: 2,
            completed: true,
            img: qrCode.src
        },
        {
            id: 3,
            label: "le visiteur bénéficie d’informations complémentaires",
            number: 3,
            completed: true,
            img: visitor.src
        },
    ]

    const getArtistImage = () => {
        switch(artistDetails) {
            case ArtistDetails.work:
                return Landing6.src
            case ArtistDetails.exhib:
                return Landing7.src
            case ArtistDetails.display:
                return Landing8.src
            default:
                return Landing6.src 
        }
    }

    useEffect(() => {
        let details = document.querySelectorAll("details")

        artistDetails && details.forEach(detailsElement => {
            if(detailsElement.id !== artistDetails) {
                detailsElement.removeAttribute('open')
            }
        })
    }, [artistDetails])

    const { register } = useForm()
    
    return (
        <main className={style.landing}>
            <section className={style.landing__resume}>
                <div className={style.bloc}>
                    <HeadingStrong elementColor="yellow" size="xxl" content="Partagez votre art avec le monde qui vous entoure." />
                    <Text tag="p" typo="paragraph-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat leo at eros leo nunc. Est ut adipiscing sed arcu euismod id aenean. Justo, et lorem neque consequat facilisis senectus. A adipiscing elementum id diam vitae, commodo id purus.
                    </Text>
                    <ul>
                        <li>
                            <span>40k+</span>
                            <span>oeuvres</span>
                        </li>
                        <li>
                            <span>8k+</span>
                            <span>artistes</span>
                        </li>
                        <li>
                            <span>530k+</span>
                            <span>visiteurs conquis</span>
                        </li>
                    </ul>
                    <div className={style.buttonWrapper}>
                        <Button label="Rejoindre l'aventure" size="large" to="/sign-up"/>
                        <ButtonArrow label="En savoir plus" to="#infos" side="right"/>
                    </div>
                </div>
                <div className={style.bloc}>
                    <div className={style.imgWrapper}>
                        <div className={style.imgFrame}>
                            <img src={Landing1.src} />
                        </div>
                    </div>
                    <div className={style.imgWrapper}>
                        <div className={style.imgFrame}>
                            <img src={Landing3.src} />
                        </div>
                    </div>
                    <div className={style.imgWrapper}>
                        <div className={style.imgFrame}>
                            <img src={Landing2.src} />
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.landing__streetBanner}>
                <HeadingStrong elementColor="violet" size="xl" content="Amenez vos expositions" />
                <Text tag="h2" typo="heading-xl" color="white">
                    dans la rue.
                </Text>
                <img src={Landing4.src} />
            </section>

            <section className={style.landing__screens}>
                <div className={style.bloc}>
                    <HeadingStrong elementColor="yellow" size="xl" content="Des écrans haute définition pour afficher vos oeuvres." />
                    <Text tag="p" typo="paragraph-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis risus, massa massa arcu cras vitae convallis dignissim. A duis faucibus leo mattis purus. Et id volutpat maecenas orci venenatis sed eu id.
                    </Text>
                    <div className={style.buttonWrapper}>
                        <Button label="Rejoindre l'aventure" size="large" to="/sign-up"/>
                    </div>
                </div>
                <div className={style.bloc}>
                    <img src={Landing5.src} />
                </div>
            </section>

            <section className={style.landing__artist}>
                <HeadingStrong elementColor="pink" size="xl" content="Comment exposer ?" />
                <div className={style.content}>
                    <div className={style.mockup}>
                        <img src={getArtistImage()} />
                    </div>
                    <div className={style.steps}>
                        <div className={style.stepsContainer}>
                            <details className={style.step} id={ArtistDetails.work} onClick={() => setArtistDetails(ArtistDetails.work)}>
                                <summary>
                                    <Icon type="upload" size="xlarge" color={artistDetails && artistDetails === ArtistDetails.work ? 'black' : 'grey-500'} />
                                    <span>1. Uploadez les oeuvres</span>
                                </summary>
                                <Text tag="p" typo="paragraph-md">
                                    Uploadez les fichiers correspondants à votre oeuvre au nombre de 4 maximum, choisissez le média principal qu’on verra en premier.
                                </Text>
                            </details>
                            <details className={style.step} id={ArtistDetails.exhib} onClick={() => setArtistDetails(ArtistDetails.exhib)}>
                                <summary>
                                    <Icon type="calendar-landing" size="xlarge" color={artistDetails && artistDetails === ArtistDetails.exhib ? 'black' : 'grey-500'}/>
                                    <span>2. Programmez une exposition</span>
                                </summary>
                                <Text tag="p" typo="paragraph-md">
                                    Choisissez une oeuvre parmi la bibliothèque des oeuvres que vous aurez upload, choisissez où et quand vous voulez l’exposer.
                                </Text>
                            </details>
                            <details className={style.step} id={ArtistDetails.display} onClick={() => setArtistDetails(ArtistDetails.display)}>
                                <summary>
                                    <Icon type="screen" size="xlarge" color={artistDetails && artistDetails === ArtistDetails.display ? 'black' : 'grey-500'}/>
                                    <span>3. Ton exposition est affichée</span>
                                </summary>
                                <Text tag="p" typo="paragraph-md">
                                    À la date que vous avez choisi, l’oeuvre sera affichée sur le panneau que vous aurez choisi pendant la durée programmée.
                                </Text>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.landing__guidance}>
                <HeadingStrong elementColor="violet" content="Le visiteur guidé par sa curiosité."/>
                <div className={style.landing__containerStepper}>
                    {visitorSteps.map((step, index) => (
                        <div className={style.landing__contentGuidance}>
                            <div className={style.landing__step}>
                                <Step
                                    label={step.label}
                                    number={step.number}
                                    completed={false}
                                    active={true}
                                    key={index}
                                    disable={false}
                                    variant={undefined}
                                />
                            </div>
                            <img src={step.img} alt={step.img} />
                        </div>
                    ))}
                </div>
            </section>

            <section className={style.landing__gallery}>
                <HeadingStrong elementColor="success-light" content="Galerie des oeuvres exposées."/>
                <div className={style.landing__galleryContainer}>
                    <picture className={style.landing__galleryContent}>
                        <img className={style.landing__galleryImg} src={landingGallery.src} alt="" />
                    </picture>
                    <picture className={style.landing__galleryContent}>
                        <img className={style.landing__galleryImg} src={landingGallery3.src} alt="" />
                    </picture>
                    <picture className={style.landing__galleryContent}>
                        <img className={style.landing__galleryImg} src={landingGallery2.src} alt="" />
                    </picture>
                    <picture className={style.landing__galleryContent}>
                        <img className={style.landing__galleryImg} src={landingGallery3.src} alt="" />
                    </picture>
                    <picture className={style.landing__galleryContent}>
                        <img className={style.landing__galleryImg} src={landingGallery2.src} alt="" />
                    </picture>
                    <picture className={style.landing__galleryContent}>
                        <img className={style.landing__galleryImg} src={landingGallery5.src} alt="" />
                    </picture>
                    <picture className={style.landing__galleryContent}>
                        <img className={style.landing__galleryImg} src={landingGallery4.src} alt="" />
                    </picture>
                    <picture className={style.landing__galleryContent}>
                        <img className={style.landing__galleryImg} src={landingGallery3.src} alt="" />
                    </picture>
                    <picture className={style.landing__galleryContent}>
                        <img className={style.landing__galleryImg} src={landingGallery5.src} alt="" />
                    </picture>
                    <picture className={style.landing__galleryContent}>
                        <img className={style.landing__galleryImg} src={landingGallery2.src} alt="" />
                    </picture>
                    <picture className={style.landing__galleryContent}>
                        <img className={style.landing__galleryImg} src={landingGallery4.src} alt="" />
                    </picture>
                    <picture className={style.landing__galleryContent}>
                        <img className={style.landing__galleryImg} src={landingGallery.src} alt="" />
                    </picture>
                </div>
            </section>
            <section className={style.landing__contact}>
                <HeadingStrong elementColor="success-light" content="Nous sommes à votre disposition"/>
                <Text tag="p" typo="paragraph-sm">
                    Si vous souhaitez avoir d‘autres informations, n’hésitez pas à nous contacter !
                    
                </Text>
                <Text tag="p" typo="paragraph-sm">
                    Nous tâcherons de vous répondre dans les meilleurs délais
                </Text>
                <form className={style.landing__formContact}>
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
            </section>
        </main>
    )
}
