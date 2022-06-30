import React, { useState } from "react"
import styles from "./index.module.scss"
import cn from "classnames"
import { TemplatePage, HeadingStrong, Checkbox, Icon, Text } from "@components"


const Works: React.FC = () => {

    const [filterExposed, setFilterExposed] = useState(false)
    const [filterUnexposed, setFilterUnexposed] = useState(false)


    return (
        <TemplatePage isLogged={true}>
            <section className={styles.header}>
                <HeadingStrong content="Mes oeuvres" elementColor="pink" size="md" />
                <aside>
                    <ul className={styles.filters}>
                        <li className={styles.filter}>
                            <Checkbox 
                                checkboxLabel="Exposées"
                                checkboxName="works-exposed"
                                isChecked={filterExposed}
                                onChange={() => setFilterExposed(prev => !prev)}
                            />
                        </li>
                        <li className={styles.filter}>
                            <Checkbox 
                                checkboxLabel="Non exposées"
                                checkboxName="works-unexposed"
                                isChecked={filterUnexposed}
                                onChange={() => setFilterUnexposed(prev => !prev)}
                            />
                        </li>
                        <li className={cn(styles.filter, styles.filterDate)}>
                            <Icon type="rightArrow" size="small" color="black" />
                            <Text tag="p" typo="label">Date de création</Text>
                        </li>
                    </ul>
                    <div></div>
                </aside>
            </section>
        </TemplatePage>
    )
}

export default Works;