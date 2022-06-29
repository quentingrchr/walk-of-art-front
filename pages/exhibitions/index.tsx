import React, { useState } from "react";
import { TemplatePage, Text, ExpoStateBar, ExpoList } from "@components"
import { checkReservationState } from "./../../src/utility"

const Exhibitions: React.FC = () => {
    
    const fetchedList = [
        {
            id: 11,
            date_start: '2022-06-29 10:15:27',
            duration: 5,
            created_at: 12,
            exhibition_id: 150,
            gallery_id: 110,
            title: 'EN COURS',
            description: 'hi',
            reaction: false,
        },
        {
            id: 11,
            date_start: '2022-06-22 06:15:27',
            duration: 1,
            created_at: 12,
            exhibition_id: 150,
            gallery_id: 110,
            title: 'Passed',
            description: 'hi',
            reaction: false,
        },
        {
            id: 11,
            date_start: '2022-07-02 10:15:27',
            duration: 2,
            created_at: 12,
            exhibition_id: 150,
            gallery_id: 110,
            title: 'u have to wait',
            description: 'hi',
            reaction: false,
        },
    ]

    const exposList = {
        'remaining': [] as any[],
        'incoming': [] as any[],
        'completed': [] as any[]
    }

    const expoStates = [
        {
            label: 'En cours',
            listComponent: <ExpoList exposList={exposList.remaining} type="remaining"/>
        },
        {
            label: 'Terminées',
            listComponent: <ExpoList exposList={exposList.completed} type="completed"/>
        },
        {
            label: 'À venir',
            listComponent: <ExpoList exposList={exposList.incoming} type="incoming"/>
        },
    ]

    const [exposedListType, setExposedListType] = useState<number>(0)

    const today: number = Date.now()



    fetchedList.forEach(el => {
        const expoState = checkReservationState(el, today)
        exposList[expoState].push(el)
    })

    return (
        <TemplatePage isLogged={true}>
            {/* PAGE CONTENT */}
            <Text tag="h1" typo="paragraph-md">Page de présentation</Text>
            <ExpoStateBar states={expoStates} onClick={setExposedListType}/>
            {
                expoStates[exposedListType].listComponent
            }
            
        </TemplatePage>
    )
}

export default Exhibitions;