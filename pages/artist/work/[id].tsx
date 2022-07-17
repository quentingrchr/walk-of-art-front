import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { isLoggedIn } from "axios-jwt"
import style from "./index.module.scss"
import { useSetRecoilState } from "recoil"
import {
  activeModalState,
  modalDataState,
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


const WorkPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  
  const setActiveModal = useSetRecoilState(activeModalState)
  const setModalData = useSetRecoilState(modalDataState)

  const [work, setWork] = useState<Work>({
    id: "",
    title: "",
    description: "",
    createdAt: "",
    mainFile: {
      id: "",
      fileUrl: "",
    },
    workFiles: [],
    exhibitions: [],
  })

  const openModal = () => {
    setActiveModal(CONFIRM_WORK_DELETE_MODAL_ID)
    setModalData({
      data: {
        id: work.id,
      },
    })
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
              primaryImage={work.mainFile ? work.mainFile.fileUrl : ''}
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
                    <ReservationInfo
                      key={exhibition.id}
                      exhibition={exhibition}
                    />
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
