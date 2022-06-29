import React, { useState, useEffect } from "react";
import { TemplatePage, Text, ExpoStateBar, ExpoList } from "@components"
import { checkReservationState } from "./../../src/utility"
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

const Exhibitions: React.FC = () => {

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


    return (
        <TemplatePage isLogged={true}>
            <Text tag="h1" typo="paragraph-md">Page de présentation</Text>
            <ExpoStateBar states={expoStates} onClick={setExposedListType}/>
            {
                list && expoStates[exposedListType].listComponent(list)
            }
        </TemplatePage>
    )
}

export default Exhibitions;