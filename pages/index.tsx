import React from "react"
import { Cards, TemplatePage, Text } from "@components"

const Home: React.FC = () => {
  return (
    <TemplatePage>
      <Text tag="h1" typo="paragraph-md">
        Page de présentation
      </Text>
      <Cards title="Titre de l’expo qui peut etre sur deux lignes" />
    </TemplatePage>
  )
}

export default Home
