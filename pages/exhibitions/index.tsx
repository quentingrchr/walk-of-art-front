import React from "react"
import { TemplatePage, Text } from "@components"

const Exhibitions: React.FC = () => {
  return (
    <TemplatePage isLogged={true}>
      <Text tag="h1" typo="heading-lg">
        Expositions
      </Text>
    </TemplatePage>
  )
}

export default Exhibitions
