import React, { useState, useEffect } from "react"
import { isLoggedIn } from "axios-jwt"
import style from "./index.module.scss"
import cn from "classnames"
import {
  TemplatePage,
  Text,
  Icon,
  ExhibitionCard,
  Unauthorized,
  EmptyContent
} from "@components"
import { windowIsNotReady, axiosInstance } from "../../../src/utility"
import { Exhibition } from "../../../src/types"

type SortDateType = "asc" | "dsc"

const Dashboard: React.FC = () => {
  const [exhibitions, setExhibitions] = useState<Exhibition[] | null>(null)
  const [orderSortDate, setOrderSortDate] = useState<SortDateType>("dsc")

  const handleSortDate = () => {
    orderSortDate === "asc" && setOrderSortDate("dsc")
    orderSortDate === "dsc" && setOrderSortDate("asc")
  }

  const sortDateProcess = (list: Exhibition[]) => {
    return list.sort((a, b) => {
      let dateA: any = new Date(a.dateStart)
      let dateB: any = new Date(b.dateStart)

      if (orderSortDate === "asc") return dateA - dateB
      else if (orderSortDate === "dsc") return dateB - dateA
      else return 0
    })
  }

  const getAllExhibitions = () => {
    return axiosInstance.get('/moderation/exhibitions')
        .then(response => {
          if(response.status === 200) {
            setExhibitions(response.data)
          }
        }).catch((error) => {
            return error
        })
  }

  useEffect(() => {
    getAllExhibitions()
  }, [])

  useEffect(() => {
    exhibitions && sortDateProcess(exhibitions)
  }, [orderSortDate])
  
  if (windowIsNotReady()) {
    return null
  }

  return (
    <TemplatePage>
      {isLoggedIn() ? (
        <>
          <div className={style.header}>
            <Text tag="h1" typo="heading-xl">
              Expositions à modérer ({exhibitions ? exhibitions?.length : 0})
            </Text>
            <span className={style.date} onClick={() => handleSortDate()} data-order={orderSortDate}>
              <Icon type="downArrow" size="small" color="black" />
              <Text tag="p" typo="label">Date d'exposition</Text>
            </span>
          </div>
          {exhibitions && exhibitions.length > 0 ?
            <ul className={style.worksList}>
              {exhibitions && exhibitions.map((exhibition, index) => {
                return (
                  <li className={style.expo} key={index}>
                    <ExhibitionCard
                      id={exhibition.id}
                      entity="moderator"
                      img={{
                        src: exhibition.work.mainFile?.fileUrl,
                      }}
                      title={exhibition.title}
                      dateStartExhib={exhibition.dateStart}
                    />
                  </li>
                )
              })}
            </ul>
          :
            <EmptyContent entity="moderation" />
          }
          
        </>
      ) : (
        <Unauthorized />
      )}
    </TemplatePage>
  )
}

export default Dashboard