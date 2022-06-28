
import React from "react"
import { TemplatePage, Text, ExpoStateBar } from "@components"


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
    return (
        <TemplatePage isLogged={false}>
            <Text tag="h1" typo="paragraph-md">Page de présentation</Text>
            <ExpoStateBar states={expoStates}/>
        </TemplatePage>
    )   
}

export default Home
