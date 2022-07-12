import React, { useState, useEffect, PropsWithoutRef } from "react"
import { isLoggedIn, clearAuthTokens } from "axios-jwt"
import styles from "./index.module.scss"
import Link from "next/link"
import { useRecoilValue } from "recoil"
import { Logo, Navbar, DropdownButton, Icon, Button, Text } from "@components"
import { useRouter } from "next/router"
import { NotificationWrapper } from "@components/notification-wrapper"
import { eraseCookie } from "@utility/index"
import { userState } from "@recoil/user/atom"
import { UserRolesType } from "../../../src/types"

import cn from 'classnames';

interface IProps {}



function checkRole(user, role: UserRolesType) {
  if (!user) return false
  return user.roles.indexOf(role) !== -1
}

export const Header: React.FC<IProps> = (props: IProps) => {
  const user = useRecoilValue(userState)
  console.log({ user }, "nav")

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

  const [appear, setAppear] = useState(false)

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

  const router = useRouter()
  if (
    typeof window == "undefined" ||
    typeof window.localStorage == "undefined"
  ) {
    return null
  }

  const logout = () => {
    clearAuthTokens()
    eraseCookie("token")
    router.push("/")
  }
  

  return (
    <header className={styles.header}>
      <Logo to="/dashboard" />

      {checkRole(user, "ROLE_MODERATOR") && isLoggedIn() ?  
        <ModeratorHeader/>
      : !checkRole(user, "ROLE_MODERATOR") && isLoggedIn() ? (
        <>
          <Navbar />
          <div className={styles.wrapper}>
            <DropdownButton
              label="Créer"
              choices={[
                { label: "Créer une oeuvre", to: "/create-work" },
                { label: "Créer une exposition", to: "/artist/create-exhibition" },
              ]}
              className={styles.dropdownButton}
            />
            <span className={cn(styles.link, appear ? styles.active : null)}>
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
            <span className={styles.link}>
              <Link href="/artist/profile">
                <Icon type="profile" size="large" />
              </Link>
            </span>
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
