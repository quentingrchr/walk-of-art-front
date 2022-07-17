import React, { useState, useEffect, PropsWithoutRef } from "react"
import { isLoggedIn, clearAuthTokens } from "axios-jwt"
import styles from "./index.module.scss"
import Link from "next/link"
import { useRecoilValue } from "recoil"
import { Logo, Navbar, DropdownButton, Icon, Button, Text } from "@components"
import { useRouter } from "next/router"
import { NotificationWrapper } from "@components/notification-wrapper"
import { eraseCookie, userHasRole } from "@utility/index"
import { userState } from "@recoil/user/atom"
import { UserRolesType } from "../../../src/types"
import { windowIsNotReady } from "@utility/index"


const notifs = [
  {
    id: 1,
    title:
      "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
    type: "success",
  },
  {
    id: 2,
    title: "Au dela du monde",
    type: "commentary",
  },
  {
    id: 3,
    title:
      "Au Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
    type: "error",
  },
  {
    id: 4,
    title: "Ma mère, musicienne, est morte de maladie maligne à minuit",
    type: "success",
  },
  {
    id: 5,
    title:
      "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
    type: "success",
  },
  {
    id: 6,
    title: "Ma mère, musicienne, est morte de maladie maligne à minuit",
    type: "commentary",
  },
  {
    id: 7,
    title: "Ma mère, musicienne, est morte de maladie maligne à minuit",
    type: "error",
  },
]


export const Header: React.FC = () => {
  const router = useRouter()
  const user = useRecoilValue(userState)
  const [appear, setAppear] = useState(false)

  const ModeratorHeader = () => {
    return (
    <>
      <Text tag="p" typo="paragraph-md-bold">
        Espace modérateur
      </Text>
      <span className={styles.link}>
        <div onClick={logout}>
            <Icon type="logout" size="large" />
          </div>
      </span>
    </>
    )
  }

  function checkRole(user, role: UserRolesType) {
    if (!user) return false
    return user.roles.indexOf(role) !== -1
  }
  
  if (windowIsNotReady()) {
    return null
  }

  const logout = () => {
    clearAuthTokens()
    eraseCookie("token")
    router.push("/")
  }
  

  const isArtist = userHasRole(user, "ROLE_ARTIST")
  const isModerator = userHasRole(user, "ROLE_MODERATOR")

  return (
    <header className={styles.header}>
      <Logo to={isArtist ? "/artist/dashboard" : "/moderator/dashboard"} />

      {checkRole(user, "ROLE_MODERATOR") && isLoggedIn() ?  
        <ModeratorHeader/>
      : !checkRole(user, "ROLE_MODERATOR") && isLoggedIn() ? (
        <>
          {isArtist && <Navbar />}
          {isModerator && <p>Espace modérateur</p>}
          <div className={styles.wrapper}>
            {isArtist && (
              <DropdownButton
                label="Créer"
                choices={[
                  { label: "Créer une oeuvre", to: "/artist/create-work" },
                  { label: "Créer une exposition", to: "/artist/create-exhibition" },
                ]}
                className={styles.dropdownButton}
              />
            )}
            <span className={styles.link}>
              {notifs.length === 0 ? (
                <Icon
                  type="notification"
                  size="large"
                  onClick={() => setAppear(!appear)}
                />
              ) : (
                <Icon
                  type="bellNotification"
                  size="large"
                  onClick={() => setAppear(!appear)}
                />
              )}

              {appear ? (
                <NotificationWrapper notifList={notifs}></NotificationWrapper>
              ) : null}
            </span>
            {isArtist && (
              <span className={styles.link}>
                <Link href="/artist/profile">
                  <Icon type="profile" size="large" />
                </Link>
              </span>
            )}
            <span className={styles.link}>
              <div onClick={logout}>
                <Icon type="logout" size="large" />
              </div>
            </span>
          </div>
        </>
      ) : (
        <div className={styles.wrapper}>
          <Button label="Se connecter" to="/sign-in" bg="dark" />
          <Button label="S'inscrire" to="/sign-up" color="black" bg="light" />
        </div>
      )}
    </header>
  )
}
