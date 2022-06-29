import React from "react";
import { Icon, TemplatePage, Text, Search } from "@components"
import { Checkbox } from "@components/checkbox";
import style from './index.module.scss'

const Works: React.FC = () => {
    return (
        <TemplatePage isLogged={true}>
            {/* PAGE CONTENT */}
            <Text tag="h1" typo="heading-md">Mes Oeuvres</Text>
            <div className={style.a}>
                <div className={style.x}>
                    <Checkbox checkboxName={"Tous"} checkboxLabel={"Tous"} />
                    <Checkbox checkboxName={"Exposées"} checkboxLabel={"Exposées"} />
                    <Checkbox checkboxName={"Non exposées"} checkboxLabel={"Non exposées"} />
                        <Icon type="downArrow" size={"small"}/>
                        <p className={style.xx}>Date de création</p>
                </div>
               
                <Search id={""} placeholder={"Recherche oeuvre par le titre"}/>
            </div>
        </TemplatePage>
    )
}

export default Works;