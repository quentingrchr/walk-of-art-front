import React, { useState, useEffect } from "react"
import style from "./index.module.scss"
import cn from "classnames"
import { TemplatePage, HeadingStrong, Checkbox, Icon, Text, Search, CardGallery, Unauthorized, ButtonArrow } from "@components"
import { useScrollDirection } from "../../src/hooks/useScrollDirection"
import { makeCaseAndAccentInsensitiveString, windowIsNotReady } from "../../src/utility"
import { isLoggedIn } from "axios-jwt"

enum scrollDirType  {
    up = "up",
    down = "down"
}

type sortDateType = "asc" | "dsc"

interface Filters {
    search: string | null,
    orderDate: sortDateType,
    exhibitions: boolean
}

interface Work {
    id: string,
    title: string,
    description: string,
    created_at: string,
    exhibitions?: AttachedExhib[]
}

interface AttachedExhib {
    id: string
    date_start : string,
    date_end: string,
    adress: string,
    gallerie: string
}


const data: Work[] = [
    {
        "id": "1",
        "title": "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
        "description": "Une description",
        "created_at": "2022-06-27T23:09:10.693Z",
        "exhibitions": [
            {
                "id": "1",
                "date_start": "2022-07-01T23:09:10.693Z",
                "date_end": "2022-07-10T23:09:10.693Z",
                "adress": "3 rue des plantes 75014 Paris",
                "gallerie": "7",
            },
            {
                "id": "2",
                "date_start": "2022-07-08T23:09:10.693Z",
                "date_end": "2022-07-25T23:09:10.693Z",
                "adress": "22 rue de l’adresse 75000 PARIS",
                "gallerie": "8",
            },
            {
                "id": "25",
                "date_start": "2022-10-01T23:09:10.693Z",
                "date_end": "2022-10-08T23:09:10.693Z",
                "adress": "22 rue de l’adresse qui est très longue et par conséquent elle fera 3 lignes avec ces mots 75000 PARIS",
                "gallerie": "6",
            }
        ]
    },
    {
        "id": "2",
        "title": "Un titr",
        "description": "Une description",
        "created_at": "2022-06-12T23:09:10.693Z",
        "exhibitions": [
            {
                "id": "9",
                "date_start": "2022-08-01T23:09:10.693Z",
                "date_end": "2022-08-05T23:09:10.693Z",
                "adress": "32 rue de l’adresse qui est un peu plus longue 75000 PARIS",
                "gallerie": "8",
            },
        ]
    },
    {
        "id": "3",
        "title": "Un ttre",
        "description": "Une description",
        "created_at": "2022-06-17T23:09:10.693Z",
    },
    {
        "id": "4",
        "title": "Un titre",
        "description": "Une description",
        "created_at": "2022-06-30T23:09:10.693Z",
        "exhibitions": [
            {
                "id": "25",
                "date_start": "2022-10-01T23:09:10.693Z",
                "date_end": "2022-10-08T23:09:10.693Z",
                "adress": "22 rue de l’adresse qui est très longue et par conséquent elle fera 3 lignes avec ces mots 75000 PARIS",
                "gallerie": "8",
            },
        ]
    },
    {
        "id": "5",
        "title": "Un titre",
        "description": "Une description",
        "created_at": "2022-05-02T23:09:10.693Z",
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
            let dateA: any = new Date(a.created_at)
            let dateB: any = new Date(b.created_at)

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
                                    (index % 3) === 0 && <CardGallery key={work.id} id={work.id} title={work.title} createdAt={work.created_at}/>
                                ))
                            }
                        </div>
                        <div className={style.body__ctn}>
                            {
                                filterWorksList(works, filters).map((work, index) => (
                                    (index % 3) === 1 && <CardGallery key={work.id} id={work.id} title={work.title} createdAt={work.created_at}/>
                                ))
                            }
                        </div>
                        <div className={style.body__ctn}>
                            {
                                filterWorksList(works, filters).map((work, index) => (
                                    (index % 3) === 2 && <CardGallery key={work.id} id={work.id} title={work.title} createdAt={work.created_at}/>
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

export default Works;