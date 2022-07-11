import React, { useState, useEffect } from "react"
import style from "./index.module.scss"
import cn from "classnames"
import { TemplatePage, HeadingStrong, Checkbox, Icon, Text, Search, CardGallery, Unauthorized, ButtonArrow } from "@components"
import { useScrollDirection } from "../../../src/hooks/useScrollDirection"
import { makeCaseAndAccentInsensitiveString, windowIsNotReady, getDate } from "../../../src/utility"
import { Work, scrollDirType } from "../../../src/types"
import { isLoggedIn } from "axios-jwt"


type sortDateType = "asc" | "dsc"

interface Filters {
    search: string | null,
    orderDate: sortDateType,
    exhibitions: boolean
}


const data: Work[] = [
    {
        "id": "1",
        "title": "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
        "description": "Une description",
        "createdAt": "2022-06-27T23:09:10.693Z",
        "mainFile": {
            id: "",
            fileUrl: ""
        },
        "workFiles": [
            {
                id: "",
                fileUrl: ""
            },
            {
                id: "",
                fileUrl: ""
            }
        ],
        "exhibitions": [
            {
                "id": "1",
                "createdAt": "2022-07-01T23:09:10.693Z",
                "reservations": [
                    {
                        "id": "1",
                        "dateStart": "2022-06-27T23:09:10.693Z",
                        "dateEnd": "2022-06-27T23:09:10.693Z",
                        "createdAt": "2022-06-27T23:09:10.693Z",
                        "board": {
                            "id": "34",
                            "gallery": {
                                "id": "5",
                                "name": "Nom de gallery",
                                "latitude": 48.8585324301254,
                                "longitude": 2.2944705695697802
                            },
                            "orientation": {}
                        }
                    }
                ]
            },
        ]
    },
    {
        "id": "2",
        "title": "Un titre",
        "description": "Une description",
        "createdAt": "2022-06-27T23:09:10.693Z",
        "mainFile": {
            id: "",
            fileUrl: ""
        },
        "workFiles": [
            {
                id: "",
                fileUrl: ""
            },
            {
                id: "",
                fileUrl: ""
            }
        ],
    },
    {
        "id": "3",
        "title": "A title",
        "description": "Une description",
        "createdAt": "2022-06-27T23:09:10.693Z",
        "mainFile": {
            id: "",
            fileUrl: ""
        },
        "workFiles": [
            {
                id: "",
                fileUrl: ""
            },
            {
                id: "",
                fileUrl: ""
            }
        ],
        "exhibitions": [
            {
                "id": "1",
                "createdAt": "2022-07-01T23:09:10.693Z",
                "reservations": [
                    {
                        "id": "1",
                        "dateStart": "2022-06-27T23:09:10.693Z",
                        "dateEnd": "2022-06-27T23:09:10.693Z",
                        "createdAt": "2022-06-27T23:09:10.693Z",
                        "board": {
                            "id": "34",
                            "gallery": {
                                "id": "5",
                                "name": "Nom de gallery",
                                "latitude": 48.8585324301254,
                                "longitude": 2.2944705695697802
                            },
                            "orientation": {}
                        }
                    }
                ]
            },
            {
                "id": "2",
                "createdAt": "2022-07-01T23:09:10.693Z",
                "reservations": [
                    {
                        "id": "45",
                        "dateStart": "2022-07-27T23:09:10.693Z",
                        "dateEnd": "2022-07-30T23:09:10.693Z",
                        "createdAt": "2022-07-02T23:09:10.693Z",
                        "board": {
                            "id": "34",
                            "gallery": {
                                "id": "5",
                                "name": "Nom de gallery",
                                "latitude": 48.8585324301254,
                                "longitude": 2.2944705695697802
                            },
                            "orientation": {}
                        }
                    }
                ]
            },
            {
                "id": "3",
                "createdAt": "2022-07-01T23:09:10.693Z",
                "reservations": [
                    {
                        "id": "56",
                        "dateStart": "2022-06-27T23:09:10.693Z",
                        "dateEnd": "2022-06-27T23:09:10.693Z",
                        "createdAt": "2022-06-27T23:09:10.693Z",
                        "board": {
                            "id": "34",
                            "gallery": {
                                "id": "5",
                                "name": "Nom de gallery",
                                "latitude": 48.8585324301254,
                                "longitude": 2.2944705695697802
                            },
                            "orientation": {}
                        }
                    }
                ]
            },
        ]
    },
]

const Works: React.FC = () => {

    const [works, setWorks] = useState<Work[]>([])
    const [filters, setFilters] = useState<Filters>({
        search: null,
        orderDate: "dsc",
        exhibitions: false,
    })

    const [direction, setDirection] = useState<scrollDirType.up | scrollDirType.down>()
    const scrollDirection = useScrollDirection()


    const handleCheckExhibitions = () => {
        setFilters(prev => {
            return {
                ...prev,
                exhibitions: !filters.exhibitions
            }
        })
    }

    const handleSearch = (event) => {
        let normalizedValue = makeCaseAndAccentInsensitiveString(event.target.value)
        setFilters( prev => {
            return {
                ...prev,
                search: normalizedValue === "" ? null : normalizedValue
            }
        })
    }

    const handleSortDate = () => {
        filters.orderDate === "asc" && setFilters( prev => {
            return {
                ...prev,
                orderDate: "dsc"
            }
        })

        filters.orderDate === "dsc" && setFilters( prev => {
            return {
                ...prev,
                orderDate: "asc"
            }
        })
    }

    const filterExhibitionsProcess = (list: Work[]) => {
        let attachedExhibitions = list.filter(item => {
            return item.exhibitions 
        })

        return attachedExhibitions
    }

    const searchProcess = (value: string, list: Work[]) => {
        let search =  list.filter(item => {
            let normalizedTitle = makeCaseAndAccentInsensitiveString(item.title)
            return normalizedTitle.includes(value)
        })

        return search
    }

    const sortDateProcess = (list: Work[]) => {
        return list.sort((a, b) => {
            let dateA: any = getDate(a.createdAt)
            let dateB: any = getDate(b.createdAt)

            if (filters.orderDate === "asc") return dateA - dateB
            else if (filters.orderDate === "dsc") return dateB - dateA
            else return 0
        })
    }

    const filterWorksList = (list: Work[], filters: Filters) => {
        let newList: Work[] = [...list]

        if(filters.search !== null) {
            newList = searchProcess(filters.search, list)
        } 

        if(filters.exhibitions) {
            newList = filterExhibitionsProcess(newList)
        }

        if(filters.orderDate !== null) {
            newList = sortDateProcess(newList)
        }

        return newList
    }

    /* Init works */
    useEffect(() => {
        setWorks(data)
    }, [])
    
    /* Scroll Event */
    useEffect(() => {
        scrollDirection === "down" ?
            setDirection(scrollDirType.down)
            :
            setDirection(scrollDirType.up)
    }, [scrollDirection])
    
    if(windowIsNotReady()) {
        return null
    }

    return (
        <TemplatePage>
            {isLoggedIn() ?
                <>
                    <span className={style.backLink}>
                        <ButtonArrow label="Retour à l'accueil" side="left" to="/dashboard"/>
                    </span>
                    <section className={cn(style.headSection, direction === scrollDirType.down ? style.scrollDown : null)}>
                        <HeadingStrong content="Mes oeuvres" elementColor="pink" size="xl" />
                        <aside className={style.searchBox}>
                            <ul className={style.filters}>
                                <li>
                                    <Checkbox 
                                        checkboxLabel="Assignée à une Exposition"
                                        checkboxName="works-exposed"
                                        isChecked={filters.exhibitions}
                                        onChange={handleCheckExhibitions}
                                    />
                                </li>
                                <li className={style.date} onClick={() => handleSortDate()} data-order={filters.orderDate}>
                                    <Icon type="downArrow" size="small" color="black" />
                                    <Text tag="p" typo="label">Date de création</Text>
                                </li>
                            </ul>
                            <Search 
                                id="works-search" 
                                placeholder="Rechercher une oeuvre par son titre" 
                                value={filters?.search ? filters.search : '' } 
                                onChange={handleSearch}
                            />
                        </aside>
                    </section>
                    <section className={style.bodySection}>
                        <div className={style.body__ctn}>
                            {
                                filterWorksList(works, filters).map((work, index) => (
                                    (index % 3) === 0 && <CardGallery key={work.id} id={work.id} title={work.title} createdAt={work.createdAt}/>
                                ))
                            }
                        </div>
                        <div className={style.body__ctn}>
                            {
                                filterWorksList(works, filters).map((work, index) => (
                                    (index % 3) === 1 && <CardGallery key={work.id} id={work.id} title={work.title} createdAt={work.createdAt}/>
                                ))
                            }
                        </div>
                        <div className={style.body__ctn}>
                            {
                                filterWorksList(works, filters).map((work, index) => (
                                    (index % 3) === 2 && <CardGallery key={work.id} id={work.id} title={work.title} createdAt={work.createdAt}/>
                                ))
                            }
                        </div>
                    </section>
                </>
                :
                <Unauthorized />
            }
        </TemplatePage>
    )
}

export default Works