import React, { useState, useEffect } from "react";
import { isLoggedIn } from "axios-jwt"
import { TemplatePage, Text, ExpoStateBar, ExpoList, Cards, ButtonArrow, Unauthorized } from "@components"
import s from './index.module.scss'
import { checkReservationState, windowIsNotReady } from "./../../src/utility"
import { ExpoStates, ReservationWithExposition, displayTimeType } from './../../src/types'
const rawData: ReservationWithExposition[] = [
    {
        id: 'id1',
        date_start: '2022-06-29 10:15:27',
        duration: 5,
        created_at: '2022-06-22 06:15:27',
        exhibition_id: 150,
        gallery_id: 110,
        title: 'EN COURS',
        description: 'hi',
        reaction: false,
    },
    {
        id: 'id2',
        date_start: '2022-06-22 06:15:27',
        duration: 1,
        created_at: '2022-06-22 06:15:27',
        exhibition_id: 150,
        gallery_id: 110,
        title: 'Passed',
        description: 'hi',
        reaction: false,
    },
    {
        id: 'id3',
        date_start: '2022-07-02 10:15:27',
        duration: 2,
        created_at: '2022-06-22 06:15:27',
        exhibition_id: 150,
        gallery_id: 110,
        title: 'u have to wait',
        description: 'hi',
        reaction: false,
    },
]

interface IExposList {
    'remaining': ReservationWithExposition[],
    'incoming': ReservationWithExposition[],
    'completed': ReservationWithExposition[]
}

const Dashboard: React.FC = () => {

    const [list, setList] = useState<IExposList | null>(null)
    const [exposedListType, setExposedListType] = useState<number>(0)

    const expoStates: ExpoStates[] = [
        {
            label: 'En cours',
            listComponent: (list: IExposList) => list ? <ExpoList exposList={list.remaining} type="remaining"/> : null
        },
        {
            label: 'Terminées',
            listComponent: (list: IExposList) => list ? <ExpoList exposList={list.completed} type="completed"/> : null
        },
        {
            label: 'À venir',
            listComponent: (list: IExposList) => list ? <ExpoList exposList={list.incoming} type="incoming"/> : null
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
            let a = {}
            a = {
                id: el.id
            } as ReservationWithExposition

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
                        <Text tag="h1" typo="heading-xl">Bonjour Michael</Text>
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
                        <ButtonArrow to={'/works'} label={'Voir tout'}/>
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