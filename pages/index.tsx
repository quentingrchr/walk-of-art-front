import React from "react"
import { TemplatePage } from "@components"
import { useRecoilValue } from "recoil"
import { useRouter } from "next/router"
import { userState } from "@recoil/user/atom"
import { windowIsNotReady } from "../src/utility"
import { isLoggedIn } from "axios-jwt"

const LandingPage = () => {
  return <div>LANDING PAGE</div>
}

const Home: React.FC = () => {
  const router = useRouter()
  const user = useRecoilValue(userState)

  if (windowIsNotReady()) {
    return null
  }

  if (isLoggedIn()) {
    user.roles.includes("ROLE_MODERATOR") && router.push('/moderator/dashboard')
    user.roles.includes("ROLE_ARTIST") && router.push('/artist/dashboard')
  }

  return (
    <TemplatePage>
      <LandingPage />
    </TemplatePage>
  )
}

export default Home
