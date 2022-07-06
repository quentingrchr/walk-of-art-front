import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { isLoggedIn } from "axios-jwt"
import style from "./index.module.scss"
import { useSetRecoilState } from "recoil"
import {
  activeModalState,
  CONFIRM_WORK_DELETE_MODAL_ID,
} from "@recoil/modal/atom"
import cn from "classnames"
import {
  TemplatePage,
  Text,
  ImagesPreview,
  Button,
  Icon,
  Unauthorized,
  ButtonArrow,
} from "@components"
import cardImg from "../../src/assets/images/cardImg.png"
import { getDateWithoutHours, windowIsNotReady } from "../../../src/utility"

interface Work {
  id: string
  title: string
  description: string
  created_at: string
  exhibitions?: AttachedExhib[]
}

interface AttachedExhib {
  id: string
  date_start: string
  date_end: string
  adress: string
  gallerie: string
}

const data: Work = {
  id: "1",
  title:
    "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
  description: "Une description",
  created_at: "2022-06-27T23:09:10.693Z",
  exhibitions: [
    {
      id: "1",
      date_start: "2022-07-01T23:09:10.693Z",
      date_end: "2022-07-10T23:09:10.693Z",
      adress: "3 rue des plantes 75014 Paris",
      gallerie: "7",
    },
    {
      id: "2",
      date_start: "2022-07-08T23:09:10.693Z",
      date_end: "2022-07-25T23:09:10.693Z",
      adress: "22 rue de l’adresse 75000 PARIS",
      gallerie: "8",
    },
    {
      id: "25",
      date_start: "2022-10-01T23:09:10.693Z",
      date_end: "2022-10-08T23:09:10.693Z",
      adress:
        "22 rue de l’adresse qui est très longue et par conséquent elle fera 3 lignes avec ces mots 75000 PARIS",
      gallerie: "6",
    },
  ],
}

const Works: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const setActiveModal = useSetRecoilState(activeModalState)

  const [work, setWork] = useState<Work>({
    id: "",
    title: "",
    description: "",
    created_at: "",
    exhibitions: [],
  })

  const openModal = () => {
    setActiveModal(CONFIRM_WORK_DELETE_MODAL_ID)
  }

  useEffect(() => {
    setWork(data)
  }, [])

  if (windowIsNotReady()) {
    return null
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
              {`Créée le ${getDateWithoutHours(work.created_at)}`}
            </span>

            <div className={style.attachedExhibs}>
              <Text tag="p" typo="paragraph-md">
                Liste des expositions de cette oeuvre
              </Text>
              <ul className={style.exhibitionslist}>
                {work.exhibitions ? (
                  work.exhibitions.map((exhibition) => (
                    <a
                      key={exhibition.id}
                      href={`artist/exhibition/${exhibition.id}`}
                      className={style.exhibitionLink}
                    >
                      <li className={style.exhibition}>
                        <Text tag="p" typo="paragraph-md-bold">
                          {`Du ${getDateWithoutHours(
                            exhibition.date_start
                          )} au ${getDateWithoutHours(exhibition.date_end)}`}
                        </Text>
                        <Text tag="p" typo="paragraph-md">
                          {`Galerie n°${exhibition.gallerie} - ${exhibition.adress}`}
                        </Text>
                      </li>
                    </a>
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
              onClick={() => console.log("ok")}
            >
              Créer une exposition avec cette oeuvre
            </button>

            <div className={style.actionsWrapper}>
              <Button
                label="Modifier l'oeuvre"
                bg="light"
                color="black"
                onClick={() => console.log("modifier")}
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

export default Works