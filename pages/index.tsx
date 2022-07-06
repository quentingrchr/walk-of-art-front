import React from "react"
import { Cards, TemplatePage, Text } from "@components"
import { useRecoilValue } from "recoil"
import { userState } from "@recoil/user/atom"
const Home: React.FC = () => {
  const user = useRecoilValue(userState)

  const AnonymousHome = () => {
    return <div>Bonjour personne anonyme</div>
  }
  const ArtistHome = (user) => {
    return <div>Bonjour {user.email}, voici votre dashboard</div>
  }
  const ModeratorHome = () => {
    return <div>Bonjour modérateur</div>
  }

  const roleHomeComponentMap = {
    ROLE_USER: <ArtistHome user={user} />,
    ROLE_MODERATOR: <ModeratorHome />,
  }

  if (user !== null) {
    // user is logged in
    return <TemplatePage>{roleHomeComponentMap[user.role]}</TemplatePage>
  } else {
    // no user logged
    return <TemplatePage>{<AnonymousHome />}</TemplatePage>
  }
}

export default Home
