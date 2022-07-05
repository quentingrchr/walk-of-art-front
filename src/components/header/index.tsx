import React, { useState } from "react"
import { isLoggedIn, clearAuthTokens } from "axios-jwt"
import styles from "./index.module.scss"
import Link from "next/link"
import { Logo, Navbar, DropdownButton, Icon, Button } from "@components"
import { useRouter } from "next/router"
import { NotificationWrapper } from "@components/notification-wrapper"
import { Notification } from "@components/notification"

export type IProps = {
  isLogged: boolean
}

export const Header: React.FC<IProps> = (props: IProps) => {

  const [appear, setAppear] = useState(false)
  const array = [
    // {
    //   id: 1,
    //   title: 'Au dela du monde hjgjhgjhjhgjgkjghjhgjghhj',
    //   type: 'success'
    // },
    // {
    //   id: 2,
    //   title: 'Au dela du monde',
    //   type: 'success'
    // },
    // {
    //   id: 3,
    //   'title': 'Au deekjenlrejknlkern',
    //   type: 'success'
    // },
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
    router.push("/")
  }

  const notificationAppear = () => {
    setAppear(!appear)
  }

  return (
    <header className={styles.header}>
      <Logo to="/" />

      {isLoggedIn() ? (
        <>
          <Navbar />
          <div className={styles.wrapper}>
            <DropdownButton
              label="Créer"
              choices={[
                { label: "Créer une oeuvre", to: "/create-work" },
                { label: "Créer une exposition", to: "/create-exhibition" },
              ]}
              className={styles.dropdownButton}
            />
            <span className={styles.link}>
                {array.length === 0 ? <Icon
                  type="notification"
                  size="large"
                  onClick={() => setAppear(!appear)}
                />
                  :
                <Icon 
                  type="hasNotification" 
                  size="large"
                  onClick={() => setAppear(!appear)}
                />}

                {appear ?
                <NotificationWrapper notifList={array}>
                  {/* { array.map(item => {
                     return (<Notification key={item.id} type='success' cta={{
                      label: 'Voir l’exposition',
                      to : '/'
                    }}>
                        <span>L’exposition <b>“{item.title}”</b>a été commentée</span>
                    </Notification>)
                  })
                  } */}
                </NotificationWrapper>
                  : null
                }
            </span>
            <span className={styles.link}>
              <Link href="/profile">
                <a>
                  <Icon type="profile" size="large" />
                </a>
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
