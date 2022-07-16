import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { isLoggedIn } from "axios-jwt"
import style from "./index.module.scss"
import { useSetRecoilState } from "recoil"
import {
  activeModalState,
  CONFIRM_WORK_DELETE_MODAL_ID,
} from "@recoil/modal/atom"
import {
  TemplatePage,
  Text,
  ImagesPreview,
  Button,
  Unauthorized,
  ButtonArrow,
} from "@components"
import cardImg from "../../../src/assets/images/cardImg.png"
import { axiosInstance, getDateWithoutHours, windowIsNotReady } from "../../../src/utility"
import { Work } from "../../../src/types"
import { ReservationInfo } from "@components/reservation-info"

const data: Work =  {
  "id": "3",
  "title": "A title",
  "description": "Une description",
  "createdAt": "2022-06-27T23:09:10.693Z",
  "mainFile": {
      id: "",
      fileUrl: ""
  },
  "workFiles": [
      {
          id: "",
          fileUrl: ""
      },
      {
          id: "",
          fileUrl: ""
      }
  ],
  "exhibitions": [
      {
          "id": "1",
          "title": "Un titre",
          "dateStart": "2022-07-01T23:09:10.693Z",
          "dateEnd": "2022-07-01T23:09:10.693Z",
          "createdAt": "2022-07-01T23:09:10.693Z",
          "work": "",
          "board": {
            "id": "34",
            "gallery": {
              "id": "5",
              "name": "Nom de gallery",
              "latitude": 48.85156617494322,
              "longitude": 2.4203096542274656
            },
            "orientation": {}
          }
      },
      {
          "id": "2",
          "title": "Un titre",
          "dateStart": "2022-07-01T23:09:10.693Z",
          "dateEnd": "2022-07-01T23:09:10.693Z",
          "createdAt": "2022-07-01T23:09:10.693Z",
          "work": "",
          "board": {
            "id": "34",
            "gallery": {
              "id": "5",
              "name": "Nom de gallery",
              "latitude": 48.85156617494322,
              "longitude": 2.4203096542274656
            },
            "orientation": {}
          }
      },
      {
          "id": "3",
          "title": "Un titre",
          "dateStart": "2022-07-01T23:09:10.693Z",
          "dateEnd": "2022-07-01T23:09:10.693Z",
          "createdAt": "2022-07-01T23:09:10.693Z",
          "work": "",
          "board": {
            "id": "34",
            "gallery": {
              "id": "5",
              "name": "Nom de gallery",
              "latitude": 48.8585324301254,
              "longitude": 2.2944705695697802
            },
            "orientation": {}
          }
      },
  ]
}

const WorkPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(router.query);
  
  const setActiveModal = useSetRecoilState(activeModalState)

  const [work, setWork] = useState<Work>({
    id: "",
    title: "",
    description: "",
    createdAt: "",
    mainFile: {
        id: "",
        fileUrl: ""
    },
    workFiles: [],
    exhibitions: []
  })
  

  const openModal = () => {
    setActiveModal(CONFIRM_WORK_DELETE_MODAL_ID)
  }

  useEffect(() => {
    getWorkById()
  }, [])

  
  if (windowIsNotReady()) {
    return null
  }

  const getWorkById = () => {
    return axiosInstance.get(`/works/${id}`)
      .then(response => {
        console.log('ddd', response);
        
        return setWork(response.data);
      }).catch((error) => {
        return error
      })
  }

  return (
    <TemplatePage>
      {isLoggedIn() ? (
        <>
          <span className={style.backLink}>
            <ButtonArrow
              label="Retour à la liste des oeuvres"
              side="left"
              to="/artist/works"
            />
          </span>
          <section className={style.mainSection}>
            <ImagesPreview
              primaryImage={cardImg.src}
              secondaryImages={[cardImg.src, cardImg.src]}
            />
            <Text tag="h1" typo="heading-lg">
              {work.title}
            </Text>
            <Text tag="p" typo="paragraph-md-semi">
              {work.description}
            </Text>
            <span className={style.date}>
              {`Créée le ${getDateWithoutHours(work.createdAt)}`}
            </span>

            <div className={style.attachedExhibs}>
              <Text tag="p" typo="paragraph-md">
                Liste des expositions de cette oeuvre
              </Text>
              <ul className={style.exhibitionslist}>
                {work.exhibitions ? (
                  work.exhibitions.map((exhibition) => (
                    <ReservationInfo 	key={exhibition.id} exhibition={exhibition}/>
                  ))
                ) : (
                  <li className={style.exhibition}>
                    <Text tag="p" typo="paragraph-md">
                      Cette oeuvre n'est utilisée dans aucune exposition
                      actuellement.
                    </Text>
                  </li>
                )}
              </ul>
            </div>

            <button
              className={style.exhibButton}
              onClick={() => {}}
            >
              Créer une exposition avec cette oeuvre
            </button>

            <div className={style.actionsWrapper}>
              <Button
                label="Modifier l'oeuvre"
                bg="light"
                color="black"
                onClick={() => {}}
              />
              <Button
                label="Supprimer l'oeuvre"
                bg="dark"
                onClick={openModal}
              />
            </div>
          </section>
        </>
      ) : (
        <Unauthorized />
      )}
    </TemplatePage>
  )
}

export default WorkPage
