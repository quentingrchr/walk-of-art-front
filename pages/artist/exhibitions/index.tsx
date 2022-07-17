import React, { useState, useEffect } from "react"
import { isLoggedIn } from "axios-jwt"
import style from "./index.module.scss"
import cn from "classnames"
import { TemplatePage, HeadingStrong, Checkbox, Icon, Text, Search, Unauthorized, CardGallery, ButtonArrow, EmptyContent } from "@components"
import { useScrollDirection } from "./../../../src/hooks/useScrollDirection"
import { makeCaseAndAccentInsensitiveString, windowIsNotReady, checkFilterExhibition, axiosInstance } from "./../../../src/utility"
import { Exhibition } from "../../../src/types"

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


const Exhibitions: React.FC = () => {

  const [exhibitions, setExhibitions] = useState<Exhibition[]>([])
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
            let itemType =  checkFilterExhibition(item.dateStart, item.dateEnd, date)

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

  const getAllExhibitions = () => {
    return axiosInstance.get('/exhibitions')
        .then(response => {
          if(response.status === 200) {
            setExhibitions(response.data)
          }
        }).catch((error) => {
            return error
        })
  }

  useEffect(() => {
    getAllExhibitions()
  }, [filters.type])

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
            <ButtonArrow label="Retour à l'accueil" side="left" to="/artist/dashboard"/>
          </span>
          <section className={cn(style.headSection, direction === scrollDirType.down ? style.scrollDown : null)}>
          <HeadingStrong content="Mes expositions" elementColor="specific-expo" size="xl" />
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
            <li className={style.date} onClick={() => handleSortDate()} data-order={filters.orderDate}>
              <Icon type="downArrow" size="small" color="black" />
              <Text tag="p" typo="label">Date de création</Text>
            </li>
          </ul>
        </section>
        {exhibitions && exhibitions.length > 0 ?
          <section className={style.bodySection}>
            <div className={style.body__ctn}>
                {
                    filterExhibitionsList(exhibitions, filters).map((exhibition, index) => (
                        (index % 3) === 0 && <CardGallery type="exhibition" key={exhibition.id} id={exhibition.id} title={exhibition.title} createdAt={exhibition.createdAt} date_start={exhibition.dateStart} date_end={exhibition.dateEnd} status={checkFilterExhibition(exhibition.dateStart, exhibition.dateEnd, new Date)}/>
                    ))
                }
            </div>
            <div className={style.body__ctn}>
                {
                    filterExhibitionsList(exhibitions, filters).map((exhibition, index) => (
                        (index % 3) === 1 && <CardGallery type="exhibition" key={exhibition.id} id={exhibition.id} title={exhibition.title} createdAt={exhibition.createdAt} date_start={exhibition.dateStart} date_end={exhibition.dateEnd} status={checkFilterExhibition(exhibition.dateStart, exhibition.dateEnd, new Date)}/>
                    ))
                }
            </div>
            <div className={style.body__ctn}>
                {
                    filterExhibitionsList(exhibitions, filters).map((exhibition, index) => (
                        (index % 3) === 2 && <CardGallery type="exhibition" key={exhibition.id} id={exhibition.id} title={exhibition.title} createdAt={exhibition.createdAt} date_start={exhibition.dateStart} date_end={exhibition.dateEnd} status={checkFilterExhibition(exhibition.dateStart, exhibition.dateEnd, new Date)}/>
                    ))
                }
            </div>
          </section>
        : 
          <EmptyContent entity="exhibs" labelButton="Créer une exposition" to="/artist/create-exhibition"/>
        }
        </>
        :
        <Unauthorized />
      }
    </TemplatePage>
  )
}

export default Exhibitions
