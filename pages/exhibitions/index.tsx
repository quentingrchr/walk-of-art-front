import React, { useState, useEffect } from "react"
import { isLoggedIn } from "axios-jwt"
import style from "./index.module.scss"
import cn from "classnames"
import { TemplatePage, HeadingStrong, Checkbox, Icon, Text, Search, Unauthorized, CardGallery } from "@components"
import { useScrollDirection } from "../../src/hooks/useScrollDirection"
import { makeCaseAndAccentInsensitiveString, windowIsNotReady } from "./../../src/utility"

enum scrollDirType  {
  up = "up",
  down = "down"
}

type sortDateType = "asc" | "dsc"

interface Filters {
  search: string | null,
  orderDate: sortDateType,
  status: string,
  // isChecked: object,
}
interface Exhibitions {
  id: string,
  title: string,
  description: string,
  created_at: string,
  status: string,
}

const Exhibitions: React.FC = () => {

  const list: Exhibitions[] = [
    {
      "id": "1",
      "title": "Un ti",
      "description": "Une description",
      "created_at": "2022-05-02T23:09:10.693Z",
      "status": "moderate"
    },
    {
      "id": "2",
      "title": "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
      "description": "Une description",
      "created_at": "2022-05-02T23:09:10.693Z",
      "status": "validate"
    },
    {
      "id": "3",
      "title": "Un titre",
      "description": "Une description",
      "created_at": "2022-06-02T23:09:10.693Z",
      "status": "refused"
    },
    {
      "id": "4",
      "title": "Un tire",
      "description": "Une description",
      "created_at": "2022-09-02T23:09:10.693Z",
      "status": "pending"
    },
    {
      "id": "5",
      "title": "Un tttr",
      "description": "Une description",
      "created_at": "2022-11-02T23:09:10.693Z",
      "status": "finish"
    },
  ]

  const [Exhibitions, setExhibitions] = useState<Exhibitions[]>([])
  const [filters, setFilters] = useState<Filters>({
    search: null,
    orderDate: "dsc",
    status: '',
    // isChecked: {
    //     validate: false,
    //     moderate: false,
    //     finish: false,
    //     pending: false,
    //     refused: false,
    // },
  })

  const [direction, setDirection] = useState<scrollDirType.up | scrollDirType.down>()
  const scrollDirection = useScrollDirection()


  const handleCheckStatus = ( event ) => {
    // const { name } = event.target;
    // if(name){
    //     setFilters(prev => {
    //         return {
    //             ...prev,
    //             status: event.target.name,
    //             isChecked: {
    //                 ...prev.isChecked,
    //                 [name]: !prev.isChecked[name]
    //             }
    //         }
    //     })
    // }

    return false  
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

  const filterExhibitionsProcess = (list: Exhibitions[]) => {
    let statusExhibitions = list.filter(item => {
      return item.status === filters.status 
    })

    return statusExhibitions
  }

  const searchProcess = (value: string, list: Exhibitions[]) => {
    let search =  list.filter(item => {
      let normalizedTitle = makeCaseAndAccentInsensitiveString(item.title)
      return normalizedTitle.includes(value)
    })

    return search
  }

  const sortDateProcess = (list: Exhibitions[]) => {
    return list.sort((a, b) => {
      let dateA: any = new Date(a.created_at)
      let dateB: any = new Date(b.created_at)

      if (filters.orderDate === "asc") return dateA - dateB
      else if (filters.orderDate === "dsc") return dateB - dateA
      else return 0
    })
  }

  const filterExhibitionsList = (list: Exhibitions[], filters: Filters) => {
    let newList: Exhibitions[] = [...list]

    if(filters.search !== null) {
      newList = searchProcess(filters.search, list)
    } 

    if(filters.status) {
      newList = filterExhibitionsProcess(newList)
    }

    if(filters.orderDate !== null) {
      newList = sortDateProcess(newList)
    }

    return newList
  }

  /* Init Exhibitions */
  useEffect(() => {
    setExhibitions(list)
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
          <section className={cn(style.headSection, direction === scrollDirType.down ? style.scrollDown : null)}>
          <HeadingStrong content="Mes exposition" elementColor="specific-expo" size="xl" />
          <Search 
            id="works-search" 
            placeholder="Rechercher une oeuvre par son titre" 
            value={filters?.search ? filters.search : '' } 
            onChange={handleSearch}
          />
          <ul className={style.filters}>
            <Checkbox 
              checkboxLabel="En exposition"
              checkboxName="validate"
              isChecked={false}
              onChange={handleCheckStatus}
            />
            <Checkbox 
              checkboxLabel="En modération"
              checkboxName="moderate"
              isChecked={false}
              onChange={handleCheckStatus}
            />
            <Checkbox 
              checkboxLabel="Terminées"
              checkboxName="finish"
              isChecked={false}
              onChange={handleCheckStatus}
            />
            <Checkbox 
              checkboxLabel="À venir"
              checkboxName="pending"
              isChecked={false}
              onChange={handleCheckStatus}
            />
            <Checkbox 
              checkboxLabel="Refusées"
              checkboxName="refused"
              isChecked={false}
              onChange={handleCheckStatus}
            />
            <li className={style.date} onClick={() => handleSortDate()}>
              <Icon type="downArrow" size="small" color="black" />
              <Text tag="p" typo="label">Date de création</Text>
            </li>
          </ul>
        </section>
        <section className={style.bodySection}>
                <div className={style.body__ctn}>
                    {
                        filterExhibitionsList(Exhibitions, filters).map((exhibition, index) => (
                            (index % 3) === 0 && <CardGallery key={exhibition.id} id={exhibition.id} title={exhibition.title} createdAt={exhibition.created_at} status={exhibition.status}/>
                        ))
                    }
                </div>
                <div className={style.body__ctn}>
                    {
                        filterExhibitionsList(Exhibitions, filters).map((exhibition, index) => (
                            (index % 3) === 1 && <CardGallery key={exhibition.id} id={exhibition.id} title={exhibition.title} createdAt={exhibition.created_at} status={exhibition.status}/>
                        ))
                    }
                </div>
                <div className={style.body__ctn}>
                    {
                        filterExhibitionsList(Exhibitions, filters).map((exhibition, index) => (
                            (index % 3) === 2 && <CardGallery key={exhibition.id} id={exhibition.id} title={exhibition.title} createdAt={exhibition.created_at} status={exhibition.status}/>
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

export default Exhibitions
