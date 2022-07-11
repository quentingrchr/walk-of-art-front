import React, { useState, useEffect } from "react"
import { isLoggedIn } from "axios-jwt"
import style from "./index.module.scss"
import cn from "classnames"
import { TemplatePage, HeadingStrong, Checkbox, Icon, Text, Search, Unauthorized, CardGallery } from "@components"
import { useScrollDirection } from "../../src/hooks/useScrollDirection"
import { makeCaseAndAccentInsensitiveString, windowIsNotReady, checkFilterExhibition, getDate} from "./../../src/utility"
import { type } from "os"

enum scrollDirType  {
  up = "up",
  down = "down"
}

type sortDateType = "asc" | "dsc"

type ExhibitionTypeStatus = 'completed' | 'refused' | 'incoming' | 'remaining' | 'pending' | ''

interface Filters {
    search: string | null,
    orderDate: sortDateType,
    type: ExhibitionTypeStatus[],  
}
interface Link {
    name:string, 
    url:string
}

interface Reservation {
    id: string,
    dateStart: string,
    dateEnd: string,
    createdAt: string,
    exhibition: string,
}
interface Exhibition {
  id: string,
  title: string,
  description: string,
  createdAt: string,
  links: Link[]
  reservation: Reservation,
}

const Exhibitions: React.FC = () => {

  const list: Exhibition[] = [
    {
      "id": "1",
      "title": "Un ti",
      "description": "Une description",
      "createdAt": "2022-05-02T23:09:10.693Z",
      'links': [],
      "reservation": {
        id: '1',
        dateStart: "2022-10-04T23:09:10.693Z",
        dateEnd: "2022-10-08T23:09:10.693Z",
        createdAt: "2022-05-02T23:09:10.693Z",
        exhibition: '',
      },
    },
    {
      "id": "2",
      "title": "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
      "description": "Une description",
      "createdAt": "2022-05-02T23:09:10.693Z",
      'links': [],
      "reservation": {
        id: '2',
        "dateStart": "2022-06-01T23:09:10.693Z",
        "dateEnd": "2022-08-15T23:09:10.693Z",
        createdAt: "2022-05-02T23:09:10.693Z",
        exhibition: '',
      },
    },
    // terminé
    {
        "id": "3",
        "title": "refused",
        "description": "Une description",
        "createdAt": "2022-05-02T23:09:10.693Z",
        'links': [],
        "reservation": {
            id: '3',
            "dateStart": "2022-05-02T23:09:10.693Z",
            "dateEnd": "2022-05-02T23:09:10.693Z",
            createdAt: "2022-05-02T23:09:10.693Z",
            exhibition: '',
        },
    },
    {
      "id": "4",
      "title": "mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
      "description": "Une description",
      "createdAt": "2021-09-02T23:09:10.693Z",
      'links': [],
      "reservation": {
          id: '1',
          "dateStart": "2022-10-02T23:09:10.693Z",
          "dateEnd": "2022-10-02T23:09:10.693Z",
          createdAt: "2022-05-02T23:09:10.693Z",
          exhibition: '',
      },
    },
    {
      "id": "5",
      "title": "Un tttr",
      "description": "Une description",
      "createdAt": "2022-11-02T23:09:10.693Z",
      'links': [],
      "reservation": {
          id: '1',
          "dateStart": "2022-07-02T23:09:10.693Z",
          "dateEnd": "2022-07-15T23:09:10.693Z",
          createdAt: "2022-05-02T23:09:10.693Z",
          exhibition: '',
      },
    },
    {
        "id": "6",
        "title": "1 completer",
        "description": "Une description",
        "createdAt": "2022-11-02T23:09:10.693Z",
        'links': [],
        "reservation": {
            id: '2',
            "dateStart":  "2022-06-02T23:09:10.693Z",
            "dateEnd": "2022-07-15T23:09:10.693Z",
            createdAt: "2022-06-15T23:09:10.693Z",
            exhibition: '',
        },
    },
    {
        "id": "7",
        "title": "2 completer",
        "description": "Une description",
        "createdAt": "2022-11-02T23:09:10.693Z",
        'links': [],
        "reservation": {
            id: '2',
            "dateStart":  "2022-06-02T23:09:10.693Z",
            "dateEnd": "2022-07-15T23:09:10.693Z",
            createdAt: "2022-06-15T23:09:10.693Z",
            exhibition: '',
        },
    },
  ]

  const [Exhibitions, setExhibitions] = useState<Exhibition[]>([])
  const [filters, setFilters] = useState<Filters>({
    search: null,
    orderDate: "dsc",
    type: [],
  })

  const [direction, setDirection] = useState<scrollDirType.up | scrollDirType.down>()
  const scrollDirection = useScrollDirection()


  const handleCheckStatus = (event) => {
      const {name} = event.target
    if(name) {
        if(filters.type?.indexOf(name) !== -1){
            setFilters(prev => {
                let newType = [...prev.type]

                return {
                    ...prev,
                    type: newType.filter(t => t !== name)
                }
            })
        } else {
        setFilters( prev => {
            return {
              ...prev,
              type: [...prev.type, name]
            }
          })  
        }
    }
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

  const filterbyStatusExhibitions = (list: Exhibition[]) => {
    let date = Date.now()
    if (filters.type?.length === 0 ) return list
    
    let filterList = list.filter(item => {
            let itemIsValid = false
            let itemType =  checkFilterExhibition(item.reservation.dateStart, item.reservation.dateEnd, date)

            filters.type?.forEach(filterType => {
                if(filterType === itemType) itemIsValid = true
            })
            
            return itemIsValid
    })
    
    return filterList
  }

  const searchProcess = (value: string, list: Exhibition[]) => {
    let search =  list.filter(item => {
      let normalizedTitle = makeCaseAndAccentInsensitiveString(item.title)
      return normalizedTitle.includes(value)
    })

    return search
  }

  const sortDateProcess = (list: Exhibition[]) => {
    return list.sort((a, b) => {
      let dateA: any = new Date(a.createdAt)
      let dateB: any = new Date(b.createdAt)

      if (filters.orderDate === "asc") return dateA - dateB
      else if (filters.orderDate === "dsc") return dateB - dateA
      else return 0
    })
  }

  const filterExhibitionsList = (list: Exhibition[], filters: Filters) => {
    let newList: Exhibition[] = [...list]

    if(filters.search !== null) {
      newList = searchProcess(filters.search, list)
    } 

    if(filters.type) {
      newList = filterbyStatusExhibitions(newList)
    }


    if(filters.orderDate !== null) {
      newList = sortDateProcess(newList)
    }

    return newList
  }

  /* Init Exhibitions */
  useEffect(() => {
    setExhibitions(list)
  }, [filters.type])

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
              checkboxName="remaining"
              isChecked={filters.type?.indexOf('remaining') !== -1}
              onChange={handleCheckStatus}
            />
            <Checkbox 
              checkboxLabel="En modération"
              checkboxName="pending"
              isChecked={filters.type?.indexOf('pending') !== -1}
              onChange={handleCheckStatus}
            />
            <Checkbox 
              checkboxLabel="Terminées"
              checkboxName="completed"
              isChecked={filters.type?.indexOf('completed') !== -1}
              onChange={handleCheckStatus}
            />
            <Checkbox 
              checkboxLabel="À venir"
              checkboxName="incoming"
              isChecked={filters.type?.indexOf('incoming') !== -1}
              onChange={handleCheckStatus}
            />
            <Checkbox 
              checkboxLabel="Refusées"
              checkboxName="refused"
              isChecked={filters.type?.indexOf('refused') !== -1}
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
                            (index % 3) === 0 && <CardGallery type="exhibition" key={exhibition.id} id={exhibition.id} title={exhibition.title} createdAt={exhibition.createdAt} date_start={exhibition.reservation.dateStart} date_end={exhibition.reservation.dateEnd} status={checkFilterExhibition(exhibition.reservation.dateStart, exhibition.reservation.dateEnd, new Date)}/>
                        ))
                    }
                </div>
                <div className={style.body__ctn}>
                    {
                        filterExhibitionsList(Exhibitions, filters).map((exhibition, index) => (
                            (index % 3) === 1 && <CardGallery type="exhibition" key={exhibition.id} id={exhibition.id} title={exhibition.title} createdAt={exhibition.createdAt} date_start={exhibition.reservation.dateStart} date_end={exhibition.reservation.dateEnd} status={checkFilterExhibition(exhibition.reservation.dateStart, exhibition.reservation.dateEnd, new Date)}/>
                        ))
                    }
                </div>
                <div className={style.body__ctn}>
                    {
                        filterExhibitionsList(Exhibitions, filters).map((exhibition, index) => (
                            (index % 3) === 2 && <CardGallery type="exhibition" key={exhibition.id} id={exhibition.id} title={exhibition.title} createdAt={exhibition.createdAt} date_start={exhibition.reservation.dateStart} date_end={exhibition.reservation.dateEnd} status={checkFilterExhibition(exhibition.reservation.dateStart, exhibition.reservation.dateEnd, new Date)}/>
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
