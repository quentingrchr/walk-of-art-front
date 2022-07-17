import React, { useState, useEffect } from "react";
import { isLoggedIn } from "axios-jwt"
import { TemplatePage, Text, ExpoStateBar, ExhibList, Cards, ButtonArrow, Unauthorized } from "@components"
import s from './index.module.scss'
import { checkReservationState, windowIsNotReady } from "../../../src/utility"
import { ExpoStates, Exhibition, displayTimeType } from '../../../src/types'
const rawData: Exhibition[] = [
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
          "fileUrl": ""
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
          "fileUrl": ""
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
          "fileUrl": ""
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

interface IExposList {
    'remaining': Exhibition[],
    'incoming': Exhibition[],
    'completed': Exhibition[]
}

const Dashboard: React.FC = () => {

    const [list, setList] = useState<IExposList | null>(null)
    const [exposedListType, setExposedListType] = useState<number>(0)

    const expoStates: ExpoStates[] = [
        {
            label: 'En cours',
            listComponent: (list: IExposList) => list ? <ExhibList exhibList={list.remaining} type="remaining"/> : null
        },
        {
            label: 'Terminées',
            listComponent: (list: IExposList) => list ? <ExhibList exhibList={list.completed} type="completed"/> : null
        },
        {
            label: 'À venir',
            listComponent: (list: IExposList) => list ? <ExhibList exhibList={list.incoming} type="incoming"/> : null
        },
    ]
    //-------- fetch
    
    useEffect(() => {
        const today: number = Date.now()

        const exposList = {
            'remaining': [] as any[],
            'incoming': [] as any[],
            'completed': [] as any[]
        }
        rawData.forEach((el: any) => {
            let exhibition = {}
            exhibition = {
                id: el.id
            } as Exhibition

            const expoState: displayTimeType = checkReservationState(el, today)
            exposList[expoState].push(el)

        })
        setList(exposList)
    }, [])
    //-------- fetch end


    if(windowIsNotReady()) {
        return null
    }


    return (
        <TemplatePage>
            {isLoggedIn() ? 
                <>
                    <div className={s.title}>
                        <Text tag="h1" typo="heading-xl">Bonjour</Text>
                    </div>
                    <div className={s.subtitle}>
                        <Text tag="h2" typo="heading-lg">Expositions</Text>
                    </div>
                    <ExpoStateBar states={expoStates} onClick={setExposedListType}/>
                    {
                        list && expoStates[exposedListType].listComponent(list)
                    }
                    <div className={s.subtitle}>
                        <Text tag="h2" typo="heading-lg">Oeuvres</Text>
                        <ButtonArrow to={'/artist/works'} label={'Voir tout'}/>
                    </div>
                    <div className={s.worksList}>
                        <Cards title="Le livre de la jungle Le livre de la jungle"/>
                        <Cards title="Le livre de la jungle 2"/>
                        <Cards title="Le livre de la jungle 3"/>
                        <Cards title="Le livre de la jungle 4"/>
                    </div>
                </>
            :
                <Unauthorized />
            }
        </TemplatePage>
    )
}

export default Dashboard;