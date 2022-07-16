import React from "react"
import style from "./index.module.scss"
import { HeadingStrong, Text, Button, ButtonArrow, Icon } from "@components"

// Images
import Landing1 from '../../assets/images/landing-1.png'
import Landing2 from '../../assets/images/landing-2.png'
import Landing3 from '../../assets/images/landing-3.png'
import Landing4 from '../../assets/images/landing-4.png'
import Landing5 from '../../assets/images/landing-5.png'

export const Landing: React.FC = () => {
    return (
        <main className={style.landing}>
            <section className={style.firstSection}>
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

            <section className={style.secondSection}>
                <HeadingStrong elementColor="violet" size="xl" content="Amenez vos expositions" />
                <Text tag="h2" typo="heading-xl" color="white">
                    dans la rue.
                </Text>
                <img src={Landing4.src} />
            </section>

            <section className={style.thirdSection}>
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

            <section className={style.fourthSection}>
                <HeadingStrong elementColor="pink" size="xl" content="Comment exposer ?" />
                <div className={style.content}>
                    <div className={style.mockup}><span>ok</span></div>
                    <div className={style.steps}>
                        <ul>
                            <li className={style.step}>
                                <Icon type="upload" size="xlarge" color="black"/>
                                <div>
                                    <h5>1. Uploadez les oeuvres</h5>
                                    <Text tag="p" typo="paragraph-md">
                                        Uploadez les fichiers correspondants à votre oeuvre au nombre de 4 maximum, choisissez le média principal qu’on verra en premier.
                                    </Text>
                                </div>
                            </li>
                            <li className={style.step}>
                                <Icon type="calendar-landing" size="xlarge" color="black"/>
                                <div>
                                    <h5>2. Programmez une exposition</h5>
                                    <Text tag="p" typo="paragraph-md">
                                        Choisissez une oeuvre parmi la bibliothèque des oeuvres que vous aurez upload, choisissez où et quand vous voulez l’exposer.
                                    </Text>
                                </div>
                            </li>
                            <li className={style.step}>
                                <Icon type="screen" size="xlarge" color="black"/>
                                <div>
                                    <h5>3. Ton exposition est affichée</h5>
                                    <Text tag="p" typo="paragraph-md">
                                        À la date que vous avez choisi, l’oeuvre sera affichée sur le panneau que vous aurez choisi pendant la durée programmée.
                                    </Text>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}
