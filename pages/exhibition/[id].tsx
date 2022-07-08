import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { isLoggedIn } from "axios-jwt"
import style from "./index.module.scss"
import cn from "classnames"
import { useSetRecoilState } from "recoil"
import {
  activeModalState,
  CONFIRM_EXHIBITION_DELETE_MODAL_ID,
} from "@recoil/modal/atom"
import {
	TemplatePage,
  Text,
  ImagesPreview,
  Button,
  Unauthorized,
  ButtonArrow
} from "@components"
import cardImg from "../../src/assets/images/cardImg.png"
import { getDateWithoutHours, windowIsNotReady } from "../../src/utility"
import { Reservation } from "../../src/types"


type Link = { name: string, url: string }

interface Exhibition {
	id: string,
	title: string,
	description: string,
	createdAt: string,
	links: Link[],
	reservation: Reservation
}


const data: Exhibition = {
  id: "1",
  title:
    "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue vestibulum diam elit pretium amet risus sed blandit. Vulputate et cras purus lobortis. Adipiscing at ut volutpat proin tempus fermentum faucibus. Senectus massa tortor eget sit non eleifend orci nulla. Id est ut id augue sapien risus ornare eget. Ipsum quis arcu, viverra gravida at sed. Pulvinar ut lobortis mauris vel purus pulvinar lacus volutpat quam. Nullam in purus viverra lorem mauris. Blandit faucibus nulla lobortis enim.",
  createdAt: "2022-06-27T23:09:10.693Z",
	links: [
		{
			name: "Facebook",
			url: "https://facebook.com/mon-profil"
		},
		{
			name: "Site personnel",
			url: "https://mon-site-personnel.com"
		},
		{
			name: "Portfolio",
			url: "https://mon-portoflio.com/"
		},
	]
}

const ExhibitionPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query
  const setActiveModal = useSetRecoilState(activeModalState)

  const [exhibition, setExhibition] = useState<Exhibition>({
    id: "",
		title: "",
		description: "",
		createdAt: "",
		reservation: {
			id: "",
			dateStart: "",
			duration: number,
			createdAt: string,
			exhibitionId: number,
			galleryId: number
		}
  })
	

  const openModal = () => {
    setActiveModal(CONFIRM_EXHIBITION_DELETE_MODAL_ID)
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
            <ButtonArrow label="Retour à la liste des expositions" side="left" to="/exhibitions"/>
          </span>
          <section className={style.mainSection}>
            <ImagesPreview
              primaryImage={cardImg.src}
              secondaryImages={[cardImg.src, cardImg.src]}
            />
            <Text tag="h1" typo="heading-lg">
              {exhibition.title}
            </Text>
            <Text tag="p" typo="paragraph-md-semi">
              {exhibition.description}
            </Text>
            <span className={cn(style.date, style.creation)}>
							{`Créée le ${getDateWithoutHours(exhibition.createdAt)}`}
						</span>
						<span className={cn(style.date, style.exposition)}>
							{`Sera exposée du ${getDateWithoutHours(exhibition.createdAt)} au ${getDateWithoutHours(exhibition.createdAt)}`}
						</span>

            <div className={style.actionsWrapper}>
              <Button
                label="Modifier l'exposition"
                bg="light"
                color="black"
                onClick={() => console.log("modifier")}
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
