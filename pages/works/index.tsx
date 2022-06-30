import React, { useState, useEffect } from "react"
import style from "./index.module.scss"
import cn from "classnames"
import { TemplatePage, HeadingStrong, Checkbox, Icon, Text, Search } from "@components"
import { useScrollDirection } from "../../src/hooks/useScrollDirection"

type scrollDirType = "up" | "down"

const Works: React.FC = () => {

    const [filterExposed, setFilterExposed] = useState<boolean>(false)
    const [filterUnexposed, setFilterUnexposed] = useState<boolean>(false)
    const [direction, setDirection] = useState<scrollDirType>()

    const scrollDirection = useScrollDirection()

    useEffect(() => {
        scrollDirection === "down" ?
            setDirection("down")
            :
            setDirection("up")
    }, [scrollDirection])


    return (
        <TemplatePage isLogged={true}>
            <section className={cn(style.headSection, direction === "down" ? style.scrollDown : null)}>
                <HeadingStrong content="Mes oeuvres" elementColor="pink" size="md" />
                <aside className={style.searchBox}>
                    <ul className={style.filters}>
                        <li>
                            <Checkbox 
                                checkboxLabel="Exposées"
                                checkboxName="works-exposed"
                                isChecked={filterExposed}
                                onChange={() => setFilterExposed(prev => !prev)}
                            />
                        </li>
                        <li className={style.filter}>
                            <Checkbox 
                                checkboxLabel="Non exposées"
                                checkboxName="works-unexposed"
                                isChecked={filterUnexposed}
                                onChange={() => setFilterUnexposed(prev => !prev)}
                            />
                        </li>
                        <li className={style.date}>
                            <Icon type="downArrow" size="small" color="black" />
                            <Text tag="p" typo="label">Date de création</Text>
                        </li>
                    </ul>
                    <Search id={""} placeholder={"Rechercher une oeuvre par son titre"} value={""} onChange={() => {}}/>
                </aside>
            </section>
            <section className={style.bodySection}>

            </section>
        </TemplatePage>
    )
}

export default Works;