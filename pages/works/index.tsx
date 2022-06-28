import React from "react";
import { Icon, TemplatePage, Text } from "@components"
import { Checkbox } from "@components/checkbox";
import style from './index.module.scss'

const Works: React.FC = () => {
    return (
        <TemplatePage isLogged={true}>
            {/* PAGE CONTENT */}
            <Text tag="h1" typo="paragraph-md">Mes Oeuvres</Text>
            <div className={style.a}>
            <Checkbox checkboxName={"cc"}/>
            <Checkbox checkboxName={"cc"}/>
            <Checkbox checkboxName={"cc"}/>
            <Icon type="downArrow" size={"small"}/>
            <p>Date de création</p>
            </div>
        </TemplatePage>
    )
}

export default Works;