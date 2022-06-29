import React, { useState } from "react";
import { TemplatePage, Text, ExpoStateBar, ExpoList } from "@components"
import { getDate } from "./../../src/utility"

const Exhibitions: React.FC = () => {
    const expoStates = [
        {
            label: 'En cours',
            // onClick: function() {setExposedListType('remaining')}
        },

        {
            label: 'Terminées',
            // onClick: function() {setExposedListType('completed')}
        },
        {
            label: 'À venir',
            // onClick: function() {setExposedListType('incoming')}
        },

    ]

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

    const [exposedListType, setExposedListType] = useState<number>(0)

    const today: number = Date.now()

    fetchedList.forEach(el => {
        // seconde
        const diff = (today - getDate(el.date_start)) / 1000
        if(diff < 0) {
            // arrive
            exposList.incoming.push(el)
        } else {
            // duration (j) convert to seconds
            if(diff - (el.duration * 86400) > 0) {
                // deja passe
                exposList.completed.push(el)
            } else {
                // en cours
                exposList.remaining.push(el)
            }
        }

    })

    const renderExpoList = (listType) =>
    {
        if(listType === 1) {
            return <ExpoList exposList={exposList.completed} type="completed"/>
        }

        if((listType === 2)) {
            return <ExpoList exposList={exposList.incoming} type="incoming"/>
        }

        return <ExpoList exposList={exposList.remaining} type="remaining"/>
    }

    console.log(exposList)
    return (
        <TemplatePage isLogged={true}>
            {/* PAGE CONTENT */}
            <Text tag="h1" typo="paragraph-md">Page de présentation</Text>
            <ExpoStateBar states={expoStates} onClick={setExposedListType}/>
            {
                renderExpoList(exposedListType)
            }
            
        </TemplatePage>
    )
}

export default Exhibitions;