import React, { useState, useEffect } from "react"
import { isLoggedIn } from "axios-jwt"
import style from "./index.module.scss"
import cn from "classnames"
import {
  TemplatePage,
  Text,
  Icon,
  ExhibitionCard,
  Unauthorized,
} from "@components"
import { windowIsNotReady } from "../../../src/utility"
import { Exhibition } from "../../../src/types"

type SortDateType = "asc" | "dsc"

const list: Exhibition[] = [
  {
    "id": "1",
    "title": "Un ti",
    "description": "Une description",
    "dateStart": "2022-05-02T23:09:10.693Z",
    "dateEnd": "2022-05-02T23:09:10.693Z",
    "reaction": false,
    "comment": false,
    "createdAt": "2022-05-02T23:09:10.693Z",
    "status": [{}],
    "work": {
      "id": "1",
      "title": "titre oeuvre",
      "mainFile": {
        "id": "234",
        "fileUrl": "https://iili.io/5zikPt.jpg"
      }
    },
    "board": {
      "id": "34",
      "gallery": {
        "id": "5",
        "name": "Nom de gallery",
        "latitude": 48.85156617494322,
        "longitude": 2.4203096542274656
      },
      "orientation": {}
    },
    "snapshot": [
      {
        "name": "Facebook",
        "url": "https://facebook.com/mon-profil"
      },
      {
        "name": "Site personnel",
        "url": "https://mon-site-personnel.com"
      },
      {
        "name": "Portfolio",
        "url": "https://mon-portoflio.com/"
      },
    ],
  },
  {
    "id": "2",
    "title": "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
    "description": "Une description",
    "dateStart": "2022-06-01T23:09:10.693Z",
    "dateEnd": "2022-08-15T23:09:10.693Z",
    "reaction": false,
    "comment": false,
    "createdAt": "2022-05-02T23:09:10.693Z",
    "status": [{}],
    "work": {
      "id": "1",
      "title": "titre oeuvre",
      "mainFile": {
        "id": "234",
        "fileUrl": "https://iili.io/5zikPt.jpg"
      }
    },
    "board": {
      "id": "34",
      "gallery": {
        "id": "5",
        "name": "Nom de gallery",
        "latitude": 48.85156617494322,
        "longitude": 2.4203096542274656
      },
      "orientation": {}
    },
    "snapshot": [
      {
        "name": "Facebook",
        "url": "https://facebook.com/mon-profil"
      },
      {
        "name": "Site personnel",
        "url": "https://mon-site-personnel.com"
      },
      {
        "name": "Portfolio",
        "url": "https://mon-portoflio.com/"
      },
    ],
  },

  // terminé
  {
    "id": "3",
    "title": "refused",
    "description": "Une description",
    "dateStart": "2022-05-02T23:09:10.693Z",
    "dateEnd": "2022-05-02T23:09:10.693Z",
    "reaction": false,
    "comment": false,
    "createdAt": "2022-05-02T23:09:10.693Z",
    "status": [{}],
    "work": {
      "id": "1",
      "title": "titre oeuvre",
      "mainFile": {
        "id": "234",
        "fileUrl": "https://iili.io/5zikPt.jpg"
      }
    },
    "board": {
      "id": "34",
      "gallery": {
        "id": "5",
        "name": "Nom de gallery",
        "latitude": 48.85156617494322,
        "longitude": 2.4203096542274656
      },
      "orientation": {}
    },
    "snapshot": [
      {
        "name": "Facebook",
        "url": "https://facebook.com/mon-profil"
      },
      {
        "name": "Site personnel",
        "url": "https://mon-site-personnel.com"
      },
      {
        "name": "Portfolio",
        "url": "https://mon-portoflio.com/"
      },
    ],
  },
  {
    "id": "4",
    "title": "mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
    "description": "Une description",
    "dateStart": "2022-10-02T23:09:10.693Z",
    "dateEnd": "2022-10-02T23:09:10.693Z",
    "reaction": false,
    "comment": false,
    "createdAt": "2021-09-02T23:09:10.693Z",
    "status": [{}],
    "work": {
      "id": "1",
      "title": "titre oeuvre",
      "mainFile": {
        "id": "234",
        "fileUrl": "https://iili.io/5zikPt.jpg"
      }
    },
    "board": {
      "id": "34",
      "gallery": {
        "id": "5",
        "name": "Nom de gallery",
        "latitude": 48.85156617494322,
        "longitude": 2.4203096542274656
      },
      "orientation": {}
    },
    "snapshot": [
      {
        "name": "Facebook",
        "url": "https://facebook.com/mon-profil"
      },
      {
        "name": "Site personnel",
        "url": "https://mon-site-personnel.com"
      },
      {
        "name": "Portfolio",
        "url": "https://mon-portoflio.com/"
      },
    ],
  },
  {
    "id": "5",
    "title": "un ttr",
    "description": "Une description",
    "dateStart": "2022-07-02T23:09:10.693Z",
    "dateEnd": "2022-07-15T23:09:10.693Z",
    "reaction": false,
    "comment": false,
    "createdAt": "2022-11-02T23:09:10.693Z",
    "status": [{}],
    "work": {
      "id": "1",
      "title": "titre oeuvre",
      "mainFile": {
        "id": "234",
        "fileUrl": "https://iili.io/5zikPt.jpg"
      }
    },
    "board": {
      "id": "34",
      "gallery": {
        "id": "5",
        "name": "Nom de gallery",
        "latitude": 48.85156617494322,
        "longitude": 2.4203096542274656
      },
      "orientation": {}
    },
    "snapshot": [
      {
        "name": "Facebook",
        "url": "https://facebook.com/mon-profil"
      },
      {
        "name": "Site personnel",
        "url": "https://mon-site-personnel.com"
      },
      {
        "name": "Portfolio",
        "url": "https://mon-portoflio.com/"
      },
    ],
  },
  {
    "id": "6",
    "title": "1 completer",
    "description": "Une description",
    "dateStart": "2022-06-02T23:09:10.693Z",
    "dateEnd": "2022-07-15T23:09:10.693Z",
    "reaction": false,
    "comment": false,
    "createdAt": "2022-11-02T23:09:10.693Z",
    "status": [{}],
    "work": {
      "id": "1",
      "title": "titre oeuvre",
      "mainFile": {
        "id": "234",
        "fileUrl": "https://iili.io/5zikPt.jpg"
      }
    },
    "board": {
      "id": "34",
      "gallery": {
        "id": "5",
        "name": "Nom de gallery",
        "latitude": 48.85156617494322,
        "longitude": 2.4203096542274656
      },
      "orientation": {}
    },
    "snapshot": [
      {
        "name": "Facebook",
        "url": "https://facebook.com/mon-profil"
      },
      {
        "name": "Site personnel",
        "url": "https://mon-site-personnel.com"
      },
      {
        "name": "Portfolio",
        "url": "https://mon-portoflio.com/"
      },
    ],
  },
  {
    "id": "7",
    "title": "2 completer",
    "description": "Une description",
    "dateStart": "2022-06-02T23:09:10.693Z",
    "dateEnd": "2022-07-15T23:09:10.693Z",
    "reaction": false,
    "comment": false,
    "createdAt": "2022-11-02T23:09:10.693Z",
    "status": [{}],
    "work": {
      "id": "1",
      "title": "titre oeuvre",
      "mainFile": {
        "id": "234",
        "fileUrl": "https://iili.io/5zikPt.jpg"
      }
    },
    "board": {
      "id": "34",
      "gallery": {
        "id": "5",
        "name": "Nom de gallery",
        "latitude": 48.85156617494322,
        "longitude": 2.4203096542274656
      },
      "orientation": {}
    },
    "snapshot": [
      {
        "name": "Facebook",
        "url": "https://facebook.com/mon-profil"
      },
      {
        "name": "Site personnel",
        "url": "https://mon-site-personnel.com"
      },
      {
        "name": "Portfolio",
        "url": "https://mon-portoflio.com/"
      },
    ],
  },
]

const Dashboard: React.FC = () => {
  const [exhibitions, setExhibitions] = useState<Exhibition[] | null>(null)
  const [orderSortDate, setOrderSortDate] = useState<SortDateType>("dsc")

  const handleSortDate = () => {
    orderSortDate === "asc" && setOrderSortDate("dsc")
    orderSortDate === "dsc" && setOrderSortDate("asc")
  }

  const sortDateProcess = (list: Exhibition[]) => {
    return list.sort((a, b) => {
      let dateA: any = new Date(a.dateStart)
      let dateB: any = new Date(b.dateStart)

      if (orderSortDate === "asc") return dateA - dateB
      else if (orderSortDate === "dsc") return dateB - dateA
      else return 0
    })
  }

  /* Init Exhibitions */
  useEffect(() => {
    setExhibitions(list)
  }, [])

  useEffect(() => {
    exhibitions && sortDateProcess(exhibitions)
  }, [orderSortDate])
  
  if (windowIsNotReady()) {
    return null
  }

  return (
    <TemplatePage>
      {isLoggedIn() ? (
        <>
          <div className={style.header}>
            <Text tag="h1" typo="heading-xl">
              Expositions à modérer ({exhibitions ? exhibitions?.length : 0})
            </Text>
            <span className={style.date} onClick={() => handleSortDate()} data-order={orderSortDate}>
              <Icon type="downArrow" size="small" color="black" />
              <Text tag="p" typo="label">Date d'exposition</Text>
            </span>
          </div>

          <ul className={style.worksList}>
            {exhibitions && exhibitions.map((exhibition, index) => {
              return (
                <li className={style.expo} key={index}>
                  <ExhibitionCard
                    id={exhibition.id}
                    entity="moderator"
                    img={{
                      src: exhibition.work.mainFile.fileUrl,
                    }}
                    title={exhibition.title}
                    dateStartExhib={exhibition.dateStart}
                  />
                </li>
              )
            })}
          </ul>
        </>
      ) : (
        <Unauthorized />
      )}
    </TemplatePage>
  )
}

export default Dashboard
