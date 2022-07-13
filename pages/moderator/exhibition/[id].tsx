import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useForm, FormProvider } from "react-hook-form"
import axios from "axios"
import { isLoggedIn } from "axios-jwt"
import style from "./index.module.scss"
import cn from "classnames"
import {
	TemplatePage,
  Text,
  ImagesPreview,
  Button,
  Unauthorized,
  ButtonArrow,
	InputGroup,
	Tooltip
} from "@components"
import NextLink from "next/link"
import cardImg from "../../../src/assets/images/cardImg.png"
import { getDateWithoutHours, windowIsNotReady } from "../../../src/utility"
import { Exhibition, ColorsType } from "../../../src/types"
import { SelectOption } from "../../../src/interfaces"
import { BASE_API_URL } from "../../../src/const"

enum moderationChoices {
  valid = "validated",
  refuse = "refused"
}

interface FormatData {
	status: moderationChoices,
	reason?: string,
	description?: string,
	exhibition: string
}

interface Error {
	general: null | string
	reason: null | string
	description: null | string
}

interface Time {
	color: ColorsType,
	time: string
}


const data: Exhibition = {
	id: "1",
	title: "Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi, au milieu du mois de mai mille977 au mouroir memor",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue vestibulum diam elit pretium amet risus sed blandit. Vulputate et cras purus lobortis. Adipiscing at ut volutpat proin tempus fermentum faucibus. Senectus massa tortor eget sit non eleifend orci nulla. Id est ut id augue sapien risus ornare eget. Ipsum quis arcu, viverra gravida at sed. Pulvinar ut lobortis mauris vel purus pulvinar lacus volutpat quam. Nullam in purus viverra lorem mauris. Blandit faucibus nulla lobortis enim.",
	dateStart: "2022-07-27T23:09:10.693Z",
	dateEnd: "2022-07-30T23:09:10.693Z", 
	reaction: false,
	reactions: [],
	comment: false,
	createdAt: "2022-06-27T23:09:10.693Z",
	status: [{}],
	work: {
		id: "2343",
		title: "Titre de l'oeuvre",
		mainFile: {
			id: "",
			fileUrl: ""
		}
	},
	board: {
		id: "48",
		gallery: {
			id: "5",
			name: "Nom de gallery",
			latitude: 48.87391471364133, 
			longitude: 2.295116384360164
		},
		orientation: {}
	},
	snapshot: [
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
	],
}

const ExhibitionPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

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
				fileUrl: ""
			}
		},
		board: {
			id: "",
			gallery: {
				id: "",
				name: "",
				latitude: 0, 
				longitude: 0
			},
			orientation: {}
		},
		snapshot: [
			{
				name: "",
				url: ""
			},
			{
				name: "",
				url: ""
			},
			{
				name: "",
				url: ""
			},
		],
  })

	const [formError, setFormError] = useState<Error>({
		general: null,
		reason: null,
		description: null,
	})

	const [time, setTime] = useState<Time>({color: "black", time: ""})

	const elementOptions: SelectOption[] = [
		{
			label: "Médias",
			value: "Medias"
		},
		{
			label: "Titre",
			value: "Titre"
		},
		{
			label: "Description",
			value: "Description"
		},
		{
			label: "Liens",
			value: "Liens"
		},
	]

	const methods = useForm()
	const { handleSubmit, watch, control, register } = methods

	const handleClick = (choice: moderationChoices) => {

		setFormError({
			general: null,
			reason: null,
			description: null,
		})

		if(choice === moderationChoices.valid) {
			handleSubmit(onSubmitValid)()
		} else {
			handleSubmit(onSubmitInvalid)()
		}
	}

	const onSubmitValid = () => {
		const formatData: FormatData = {
			status: moderationChoices.valid,
			exhibition: `/api/exhibition/${id}`
		}

		postModeration(formatData)
		
	}

	const onSubmitInvalid = (data) => {
		console.log(data)

		if(typeof data.reason === "object") {
			setFormError(prev => {
				return {
					...prev, 
					reason: "Le choix d'un élément est obligatoire."
				} as Error
			})

			return
		}

		if(data.description === "") {
			setFormError(prev => {
				return {
					...prev, 
					description: "Expliquer votre motif de refus en quelques lignes."
				} as Error
			})

			return
		}

		const formatData: FormatData = {
			status: moderationChoices.refuse,
			reason: data.reason,
			description: data.description,
			exhibition: `/api/exhibition/${id}`
		}

		postModeration(formatData)
	}

	const postModeration = (data: FormatData) => {
		axios
		.post(`${BASE_API_URL}/moderation/exhibitions`, data)
		.then((res: { status: number; data: any }) => {
			if (res.status === 201) {
				router.push("/moderator/dashboard")
			} else {
				setFormError(prev => {
					return {
						...prev, 
						general: "Une erreur s'est produite lors de la transmission de votre modération."
					} as Error
				})
			}
		})
		.catch((err: any) => {
			setFormError(prev => {
				return {
					...prev, 
					general: "Une erreur s'est produite lors de la transmission de votre modération."
				} as Error
			})
		})
	}

	const calculateTime = () => {
		const date1 = new Date()
		const date2 = new Date('2022-07-15T20:09:10.693Z')

		const diffTime = date2 - date1
		const diffDays = diffTime / (1000 * 60 * 60 * 24)

		if(diffDays < 1 ) {
			let diffHours = Math.floor(diffTime / (1000 * 60 * 60))
			setTime({color: "error", time: `dans ${diffHours}h`})	
		} else if(diffDays > 1 && diffDays <= 2) {
			setTime({color: "warning", time: `dans ${Math.floor(diffDays)}j`})	
		} else {
			setTime({color: "success", time: `dans ${Math.floor(diffDays)}j`})	
		}
	}

	useEffect(() => {
		setExhibition(data)
	}, [])
	
	useEffect(() => {
		calculateTime()
	}, [exhibition])

  if (windowIsNotReady()) {
    return null
  }

  return (
    <TemplatePage>
      {isLoggedIn() ? (
        <>
          <span className={style.backLink}>
            <ButtonArrow label="Retour à la liste des expositions" side="left" to="/moderator/dashboard"/>
          </span>
          <section className={style.mainSection}>
						<p className={cn(style.time, style[time.color])}>
							Cette exposition sera plubliée dans {time.time}
						</p>
            <ImagesPreview
              primaryImage={cardImg.src}
              secondaryImages={[cardImg.src, cardImg.src]}
            />
            <Text tag="h1" typo="heading-lg">
              {exhibition.title}
            </Text>
						<span className={style.description}>
							<Text tag="p" typo="paragraph-md-semi">
								{exhibition.description}
							</Text>
						</span>
						{exhibition.snapshot &&
							<ul className={style.linksList}>
							{exhibition.snapshot.map((snap) => (
								<li className={style.link}>
									<Text tag="p" typo="paragraph-md-bold">Votre {snap.name} :</Text>
									<a href={snap.url}><Text tag="p" typo="paragraph-md">{snap.url}</Text></a>
								</li>
							))}
						</ul>
						}
						<span className={style.maps}>
							<Text tag="p" typo="paragraph-md-bold">
								L'exposition aura lieu :
							</Text>
							<NextLink href={`https://maps.google.com/?q=${exhibition.board.gallery.latitude},${exhibition.board.gallery.longitude}`}>
								<a onClick={e => e.stopPropagation()} className={style.mapsLink}><Text tag="p" typo="paragraph-md">Voir sur google maps</Text></a>
							</NextLink>
						</span>
						<span className={style.date}>
							<Text tag="p" typo="paragraph-md">
								L'exposition aura lieu du <b>{getDateWithoutHours(exhibition.dateStart)}</b> au <b>{getDateWithoutHours(exhibition.dateEnd)}</b>
							</Text>
						</span>

						<FormProvider {...methods}>
							<InputGroup 
								id="reason"
								label="Motif du refus"
								type="select"
								placeholder="Choisir l'élement de l'exposition"
								guidance={formError.reason ? {type: "error", message: formError.reason} : null}
								control={control}
								selectOptions={elementOptions}
							/>
							<InputGroup 
								id="description"
								type="textarea"
								placeholder="Expliquer le motif de refus"
								guidance={formError.description ? {type: "error", message: formError.description} : null}
								register={register}
							/>
						</FormProvider>
						
						{formError.general &&
							<Tooltip text={formError.general} icon="cross" type="error" />
						}

						<div className={style.actionsWrapper}>
							<Button
								label="Valider l'exposition"
								bg="dark"
								onClick={() => handleClick(moderationChoices.valid)}
							/>
							<Button
								label="Refuser l'exposition"
								bg="light"
								color="black"
								onClick={() => handleClick(moderationChoices.refuse)}
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
