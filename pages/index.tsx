import React from "react"
import { TemplatePage } from "@components"
import { useRecoilValue } from "recoil"
import { useRouter } from "next/router"
import { userState } from "@recoil/user/atom"
import { windowIsNotReady } from "../src/utility"
import { isLoggedIn } from "axios-jwt"
import { Landing, Logo, Text  } from "@components"
import style from '../src/components/landing/index.module.scss'

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
    <>
    <TemplatePage>
      <Landing />
    </TemplatePage>
    <footer className={style.landing__footer}>
      <div className={style.landing__footerLogo}>
          <Logo to={'/'} color="white" />
          <Text tag="p" typo="paragraph-md-bold">© 2022</Text>
      </div>
      <div className={style.landing__footerLinks}>
          <li>Politique de confidentalité</li>
          <li>Conditions d’utilisation</li>
          <li>Nous rejoindre</li>
      </div>
    </footer>
    </>
  )
}

export default Home
