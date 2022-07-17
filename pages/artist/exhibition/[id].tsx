import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { isLoggedIn } from "axios-jwt"
import style from "./index.module.scss"
import cn from "classnames"
import { useSetRecoilState } from "recoil"
import {
  activeModalState,
  CONFIRM_EXHIBITION_DELETE_MODAL_ID,
  modalDataState,
} from "@recoil/modal/atom"
import {
  TemplatePage,
  Text,
  Button,
  Unauthorized,
  ReactionCounter,
  ButtonArrow,
} from "@components"
import NextLink from "next/link"
import imageCard from "../../../src/assets/images/landingGallery2.png"
import {
  getDateWithoutHours,
  windowIsNotReady,
  checkFilterExhibition,
} from "../../../src/utility"
import { Exhibition } from "../../../src/types"
import { ImageCard } from "@components/image-card"

const data: Exhibition = {
  id: "1",
  title:
    "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue vestibulum diam elit pretium amet risus sed blandit. Vulputate et cras purus lobortis. Adipiscing at ut volutpat proin tempus fermentum faucibus. Senectus massa tortor eget sit non eleifend orci nulla. Id est ut id augue sapien risus ornare eget. Ipsum quis arcu, viverra gravida at sed. Pulvinar ut lobortis mauris vel purus pulvinar lacus volutpat quam. Nullam in purus viverra lorem mauris. Blandit faucibus nulla lobortis enim.",
  dateStart: "2022-07-08T23:09:10.693Z",
  dateEnd: "2022-07-18T23:09:10.693Z",
  reaction: false,
  reactions: [
    {
      count: 32,
      name: "smiley",
    },
    {
      count: 5,
      name: "smiley-like",
    },
    {
      count: 12,
      name: "smiley-love",
    },
    {
      count: 53,
      name: "smiley-lol",
    },
    {
      count: 11,
      name: "smiley-wow",
    },
  ],
  comment: false,
  createdAt: "2022-06-27T23:09:10.693Z",
  status: [{}],
  work: {
    id: "2343",
    title: "Titre de l'oeuvre",
    mainFile: {
      id: "",
      fileUrl: "",
    },
  },
  board: {
    id: "48",
    gallery: {
      id: "5",
      name: "Nom de gallery",
      latitude: 48.87391471364133,
      longitude: 2.295116384360164,
    },
    orientation: {},
  },
  snapshot: [
    {
      name: "Facebook",
      url: "https://facebook.com/mon-profil",
    },
    {
      name: "Site personnel",
      url: "https://mon-site-personnel.com",
    },
    {
      name: "Portfolio",
      url: "https://mon-portoflio.com/",
    },
  ],
}

const ExhibitionPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const setActiveModal = useSetRecoilState(activeModalState)
  const setModalData = useSetRecoilState(modalDataState)

  const [exhibition, setExhibition] = useState<Exhibition>({
    id: "",
    title: "",
    description: "",
    dateStart: "",
    dateEnd: "",
    reaction: false,
    reactions: [],
    comment: false,
    createdAt: "",
    status: [{}],
    work: {
      id: "",
      title: "",
      mainFile: {
        id: "",
        fileUrl: "",
      },
    },
    board: {
      id: "",
      gallery: {
        id: "",
        name: "",
        latitude: 0,
        longitude: 0,
      },
      orientation: {},
    },
    snapshot: [
      {
        name: "",
        url: "",
      },
      {
        name: "",
        url: "",
      },
      {
        name: "",
        url: "",
      },
    ],
  })

  const openModal = () => {
    setActiveModal(CONFIRM_EXHIBITION_DELETE_MODAL_ID)
    setModalData({
      data: {
        id: exhibition.id,
      },
    })
  }

  useEffect(() => {
    setExhibition(data)
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
              label="Retour à la liste des expositions"
              side="left"
              to="/artist/exhibitions"
            />
          </span>
          <section className={style.mainSection}>
            <ImageCard
              status={checkFilterExhibition(
                exhibition.dateStart,
                exhibition.dateEnd,
                new Date(),
                exhibition.status
              )}
              size="full"
              src={imageCard}
              alt={imageCard}
              orientation="portrait"
            />
            <Text tag="h1" typo="heading-lg">
              {exhibition.title}
            </Text>
            <div className={style.description}>
              <Text tag="p" typo="paragraph-md">
                {exhibition.description}
              </Text>
            </div>
            <ul className={style.reactions}>
              {exhibition.reactions.map((reaction, index) => (
                <li key={index}>
                  <ReactionCounter
                    icon={reaction.name}
                    number={reaction.count}
                  />
                </li>
              ))}
            </ul>
            {exhibition.snapshot && (
              <ul className={style.linksList}>
                {exhibition.snapshot.map((snap) => (
                  <li className={style.link}>
                    <Text tag="p" typo="paragraph-md-bold">
                      Votre {snap.name} :
                    </Text>
                    <a href={snap.url}>
                      <Text tag="p" typo="paragraph-md">
                        {snap.url}
                      </Text>
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <span className={style.maps}>
              <Text tag="p" typo="paragraph-md-bold">
                {checkFilterExhibition(
                  exhibition.dateStart,
                  exhibition.dateEnd,
                  new Date()
                ) == "incoming"
                  ? "Votre exposition aura lieu du"
                  : checkFilterExhibition(
                      exhibition.dateStart,
                      exhibition.dateEnd,
                      new Date()
                    ) == "completed"
                  ? "Votre exposition a eu lieu du"
                  : checkFilterExhibition(
                      exhibition.dateStart,
                      exhibition.dateEnd,
                      new Date()
                    ) == "remaining"
                  ? "Votre exposition a lieu du"
                  : ""}
              </Text>
              <NextLink
                href={`https://maps.google.com/?q=${
                  exhibition.board && exhibition.board.gallery} ?
                   ${exhibition.board.gallery.latitude, exhibition.board.gallery.longitude} : ''`}
              >
                <a
                  onClick={(event) => event.stopPropagation()}
                  className={style.mapsLink}
                >
                  <Text tag="p" typo="paragraph-md">
                    Voir sur google maps
                  </Text>
                </a>
              </NextLink>
            </span>
            <span className={cn(style.date, style.creation)}>
              {`Créée le ${getDateWithoutHours(exhibition.createdAt)}`}
            </span>
            {checkFilterExhibition(
              exhibition.dateStart,
              exhibition.dateEnd,
              new Date(),
              exhibition.status
            ) == "refused" ? (
              <span className={cn(style.date, style.refused)}>
                {`Réfusée en modération`}
              </span>
            ) : checkFilterExhibition(
                exhibition.dateStart,
                exhibition.dateEnd,
                new Date()
              ) == "incoming" ? (
              <span className={cn(style.date, style.incoming)}>
                {`Sera exposée du ${getDateWithoutHours(
                  exhibition.dateStart
                )} au ${getDateWithoutHours(exhibition.dateEnd)}`}
              </span>
            ) : checkFilterExhibition(
                exhibition.dateStart,
                exhibition.dateEnd,
                new Date()
              ) == "completed" ? (
              <span className={cn(style.date, style.completed)}>
                {`Terminée depuis le ${getDateWithoutHours(
                  exhibition.dateEnd
                )}`}
              </span>
            ) : checkFilterExhibition(
                exhibition.dateStart,
                exhibition.dateEnd,
                new Date()
              ) == "remaining" ? (
              <span className={cn(style.date, style.remaining)}>
                {`Exposée jusqu’au  ${getDateWithoutHours(exhibition.dateEnd)}`}
              </span>
            ) : (
              ""
            )}

            <div className={style.actionsWrapper}>
              <Button
                label="Modifier l'exposition"
                bg="light"
                color="black"
                onClick={() => {}}
              />
              <Button
                label="Supprimer l'exposition"
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

export default ExhibitionPage
