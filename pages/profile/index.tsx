import React from "react"
import { isLoggedIn } from "axios-jwt"
import { EditProfile, TemplatePage, Unauthorized } from "@components"
import { windowIsNotReady } from "../../src/utility"

const Profile: React.FC = () => {

  if(windowIsNotReady()) {
    return null
  }
  
  return (
    <TemplatePage>
      {isLoggedIn() ?
        <EditProfile />
        :
        <Unauthorized />
      }
    </TemplatePage>
  )
}

export default Profile
