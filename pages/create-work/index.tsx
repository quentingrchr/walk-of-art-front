import React from "react"
import { isLoggedIn } from "axios-jwt"
import { TemplatePage, CreateWorkForm, Unauthorized } from "@components"
import { windowIsNotReady } from "../../src/utility"


const CreateWork: React.FC = () => {

  if(windowIsNotReady()) {
    return null
  }

  return (
    <TemplatePage>
      {isLoggedIn() ? 
        <CreateWorkForm />
        :
        <Unauthorized />
      }
    </TemplatePage>
  )
}

export default CreateWork
