import React, { useState } from "react"
import style from "./index.module.scss"
import cn from "classnames"
import { TemplatePage, HeadingStrong, Checkbox, Icon, Text, Search } from "@components"

const Works: React.FC = () => {

    const [filterExposed, setFilterExposed] = useState(false)
    const [filterUnexposed, setFilterUnexposed] = useState(false)


    return (
        <TemplatePage isLogged={true}>
<>
            <section className={style.header}>
                <HeadingStrong content="Mes oeuvres" elementColor="pink" size="md" />
                <aside>
                    <ul className={style.filters}>
                        <li>
                            <Checkbox 
                                checkboxLabel="Exposées"
                                checkboxName="works-exposed"
                                isChecked={filterExposed}
                                onChange={() => setFilterExposed(prev => !prev)}
                            />
                        </li>
                        <li>
                            <Checkbox 
                                checkboxLabel="Non exposées"
                                checkboxName="works-unexposed"
                                isChecked={filterUnexposed}
                                onChange={() => setFilterUnexposed(prev => !prev)}
                            />
                        </li>
                        <li>
                            <Icon type="rightArrow" size="small" color="black" />
                            <Text tag="p" typo="label">Date de création</Text>
                        </li>
                    </ul>
                    <div></div>
                </aside>
            </section>
            <Text tag="h1" typo="heading-md">Mes Oeuvres</Text>

            <div className={style.researchContainer}>
                <div className={style.checkboxesContainer}>
                    <Checkbox checkboxName={"Tous"} checkboxLabel={"Tous"} />
                    <Checkbox checkboxName={"Exposées"} checkboxLabel={"Exposées"} />
                    <Checkbox checkboxName={"Non exposées"} checkboxLabel={"Non exposées"} />
                    <div className={style.dateChoiceContainer}>
                    <Icon type="downArrow" size={"small"} />
                        <p className={cn(style.textStyle, style.margin)}>Date de création</p>
                    </div>
                </div>
                <Search id={""} placeholder={"Recherche oeuvre par le titre"}/>
            </div>
            </>
        </TemplatePage>
    )
}

export default Works;