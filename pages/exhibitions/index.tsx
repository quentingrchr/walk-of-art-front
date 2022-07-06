import React from "react"
import { isLoggedIn } from "axios-jwt"
import { TemplatePage, Text, Unauthorized } from "@components"
import { windowIsNotReady } from "./../../src/utility"

const Exhibitions: React.FC = () => {

  if(windowIsNotReady()) {
    return null
  }

  return (
    <TemplatePage>
      {isLoggedIn() ? 
        <>
          <Text tag="h1" typo="heading-lg">Expositions</Text>
        </>
        :
        <Unauthorized />
      }
    </TemplatePage>
  )
}

export default Exhibitions
