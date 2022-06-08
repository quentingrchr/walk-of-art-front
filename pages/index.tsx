
import React from "react"
import { TemplatePage, Text } from "@components"


const Home: React.FC = () => {
    return (
        <TemplatePage isLogged={false}>
            <Text tag="h1" typo="paragraph-md">Page de présentation</Text>
        </TemplatePage>
    )   
}

export default Home
