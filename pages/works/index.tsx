import React, { useState, useEffect } from "react"
import style from "./index.module.scss"
import cn from "classnames"
import { TemplatePage, HeadingStrong, Checkbox, Icon, Text, Search } from "@components"
import { useScrollDirection } from "../../src/hooks/useScrollDirection"

enum scrollDirType  {
    up = "up",
    down = "down"
}

const Works: React.FC = () => {

    const [filterExposed, setFilterExposed] = useState<boolean>(false)
    const [filterUnexposed, setFilterUnexposed] = useState<boolean>(false)
    const [direction, setDirection] = useState<scrollDirType.up | scrollDirType.down>()

    const scrollDirection = useScrollDirection()

    const onChangeCheckbox = (event) => {
        
        if(event.target.name === "works-exposed") {
            setFilterExposed(prev => !prev)
            filterUnexposed && setFilterUnexposed(false)
        }

        if(event.target.name === "works-unexposed") {
            setFilterUnexposed(prev => !prev)
            filterExposed && setFilterExposed(false)
        }
    }
    

    useEffect(() => {
        scrollDirection === "down" ?
            setDirection(scrollDirType.down)
            :
            setDirection(scrollDirType.up)
    }, [scrollDirection])


    return (
        <TemplatePage isLogged={true}>
            <section className={cn(style.headSection, direction === scrollDirType.down ? style.scrollDown : null)}>
                <HeadingStrong content="Mes oeuvres" elementColor="pink" size="md" />
                <aside className={style.searchBox}>
                    <ul className={style.filters}>
                        <li>
                            <Checkbox 
                                checkboxLabel="Exposées"
                                checkboxName="works-exposed"
                                isChecked={filterExposed}
                                onChange={onChangeCheckbox}
                            />
                        </li>
                        <li className={style.filter}>
                            <Checkbox 
                                checkboxLabel="Non exposées"
                                checkboxName="works-unexposed"
                                isChecked={filterUnexposed}
                                onChange={onChangeCheckbox}
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