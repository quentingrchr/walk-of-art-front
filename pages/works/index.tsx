import React from "react";
import { Icon, TemplatePage, Text, Search } from "@components"
import { Checkbox } from "@components/checkbox";
import style from './index.module.scss'
import cn from "classnames"

const Works: React.FC = () => {
    return (
        <TemplatePage isLogged={true}>
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
        </TemplatePage>
    )
}

export default Works;