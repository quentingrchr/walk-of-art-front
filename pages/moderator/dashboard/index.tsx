import React, { useState, useEffect } from "react"
import { isLoggedIn } from "axios-jwt"
import {
  TemplatePage,
  Text,
  ExpoStateBar,
  ExpoList,
  ExpoCard,
  ButtonArrow,
  Unauthorized,
} from "@components"
import s from "./index.module.scss"
import { checkReservationState, windowIsNotReady } from "../../../src/utility"
import {
  ExpoStates,
  ReservationWithExposition,
  displayTimeType,
  Exhibition,
} from "../../../src/types"
const rawData: ReservationWithExposition[] = [
  {
    id: "id1",
    date_start: "2022-06-29 10:15:27",
    duration: 5,
    created_at: "2022-06-22 06:15:27",
    exhibition_id: 150,
    gallery_id: 110,
    title: "EN COURS",
    description: "hi",
    reaction: false,
  },
  {
    id: "id2",
    date_start: "2022-06-22 06:15:27",
    duration: 1,
    created_at: "2022-06-22 06:15:27",
    exhibition_id: 150,
    gallery_id: 110,
    title: "Passed",
    description: "hi",
    reaction: false,
  },
  {
    id: "id3",
    date_start: "2022-07-02 10:15:27",
    duration: 2,
    created_at: "2022-06-22 06:15:27",
    exhibition_id: 150,
    gallery_id: 110,
    title: "u have to wait",
    description: "hi",
    reaction: false,
  },
]

interface IExposList {}

const Dashboard: React.FC = () => {
  const [list, setList] = useState<Exhibition[] | null>(rawData)

  if (windowIsNotReady()) {
    return null
  }

  return (
    <TemplatePage>
      {isLoggedIn() ? (
        <>
          <div className={s.header}>
            <Text tag="h1" typo="heading-xl">
              Expositions à modérer ({list ? list?.length : 0})
            </Text>
            <div className={s.filter}>filter</div>
          </div>

          <div className={s.worksList}>
            {exposList.map((value, index) => {
              return (
                <li className={styles.expo} key={index}>
                  <ExpoCard
                    id={value.id.toString()}
                    img={{
                      src: "https://iili.io/5zikPt.jpg",
                    }}
                    title={value.title}
                    remainingHours={8}
                    type={value.type}
                  />
                </li>
              )
            })}
          </div>
        </>
      ) : (
        <Unauthorized />
      )}
    </TemplatePage>
  )
}

export default Dashboard
