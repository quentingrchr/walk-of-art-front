
import React from "react"
import { TemplatePage, Text, ExpoStateBar, ExpoList } from "@components"
import { getDate } from "./../src/utility"


const Home: React.FC = () => {
    const expoStates = [
        {
            label: 'En cours',
            onClick: function() {console.log('En cours')}
        },
        {
            label: 'À venir',
            onClick: function() {console.log('À venir')}
        },
        {
            label: 'Terminées',
            onClick: function() {console.log('Terminées')}
        }
    ]

    const fetchedList = [
        {
            id: 11,
            date_start: '2022-06-28 10:15:27',
            duration: 1000000,
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
            duration: 100,
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
            duration: 10000,
            created_at: 12,
            exhibition_id: 150,
            gallery_id: 110,
            title: 'u have to wait',
            description: 'hi',
            reaction: false,
        },
    ]

    const exposList = {
        'remaning': [] as any[],
        'completed': [] as any[],
        'incoming': [] as any[]
    }

    const today: number = Date.now()

    fetchedList.forEach(el => {
        // seconde
        const diff = (today - getDate(el.date_start)) / 1000
        if(diff < 0) {
            // arrive
            exposList.incoming.push(el)
        } else {
            if(diff - el.duration > 0) {
                // deja passe
                exposList.completed.push(el)
            } else {
                // en cours
                exposList.remaning.push(el)
            }
        }

    })

    console.log(exposList)

    return (
        <TemplatePage isLogged={false}>
            <Text tag="h1" typo="paragraph-md">Page de présentation</Text>
            <ExpoStateBar states={expoStates}/>
            {/* <ExpoList exposList={exposList} type="remaining"/>
            <ExpoList exposList={exposList} type="completed"/>
            <ExpoList exposList={exposList} type="incoming"/> */}
        </TemplatePage>
    )   
}

export default Home
