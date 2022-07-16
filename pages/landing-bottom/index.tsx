import React from "react"
import {Logo, Text, HeadingStrong, InputGroup, Button, Stepper} from "@components"
import { useForm } from "react-hook-form";
import mock from "../../src/assets/images/mock.png"
import landingGallery from "../../src/assets/images/landingGallery.png"
import landingGallery2 from "../../src/assets/images/landingGallery2.png"
import landingGallery3 from "../../src/assets/images/landingGallery3.png"
import landingGallery4 from "../../src/assets/images/landingGallery4.png"
import landingGallery5 from "../../src/assets/images/landingGallery5.png"
import qrCode from "../../src/assets/images/qrCode.png"
import visiteur from "../../src/assets/images/visiteur.png"
import s from "./index.module.scss"
import { Step } from "@components/stepper/step";


const LandingBottom: React.FC = () => {
    const STEPS = [
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
          img: visiteur.src
        },
      ]
    const { register, handleSubmit, watch } = useForm({
        mode: "onBlur",
      });
    return (
        <>
        <section className={s.landing__guidance}>
                <HeadingStrong elementColor="violet" content="Le visiteur guidé par sa curiosité"/>
                <div className={s.landing__containerStepper}>
                        {STEPS.map((step, index) => (
                            <div className={s.landing__contentGuidance}>
                                <div className={s.landing__step}>
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
        <section className={s.landing__gallery}>
                <HeadingStrong elementColor="success-light" content="Galerie des oeuvres exposées"/>
                <div className={s.landing__galleryContainer}>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src={landingGallery.src} alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src={landingGallery3.src} alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src={landingGallery2.src} alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src={landingGallery3.src} alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src={landingGallery2.src} alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src={landingGallery5.src} alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src={landingGallery4.src} alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src={landingGallery3.src} alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src={landingGallery5.src} alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src={landingGallery2.src} alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src={landingGallery4.src} alt="" />
                    </picture>
                    <picture className={s.landing__galleryContent}>
                        <img className={s.landing__galleryImg} src={landingGallery.src} alt="" />
                    </picture>
                </div>
        </section>
        <section className={s.landing__contact}>
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
            </section>
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