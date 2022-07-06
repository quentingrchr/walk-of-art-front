import React from "react"
import { Cards, TemplatePage, Text } from "@components"
import { useRecoilValue } from "recoil"
import { userState } from "@recoil/user/atom"
import { UserRolesType, IUser } from "../src/types"

const AnonymousHome = () => {
  return <div>Bonjour personne anonyme</div>
}
const ArtistHome = (user) => {
  return <div>Bonjour {user.email}, voici votre dashboard</div>
}
const ModeratorHome = () => {
  return <div>Bonjour modérateur</div>
}

const HomeSelector = (props: { user?: IUser; roles?: [UserRolesType] }) => {
  const { roles, user } = props

  if (!!roles) {
    if (roles.includes("ROLE_MODERATOR")) {
      return <ModeratorHome />
    } else if (roles.includes("ROLE_ARTIST")) {
      return <ArtistHome user={user} />
    } else {
      return <AnonymousHome />
    }
  }
  return <AnonymousHome />
}
const Home: React.FC = () => {
  const user = useRecoilValue(userState)

  return (
    <TemplatePage>
      {<HomeSelector user={user ? user : undefined} roles={user?.roles} />}
    </TemplatePage>
  )
}

export default Home
