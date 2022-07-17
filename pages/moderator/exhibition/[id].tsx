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
import primaryImage from "../../../src/assets/images/landing-1.png"
import secondaryImage from "../../../src/assets/images/landing-2.png"
import thirdImage from "../../../src/assets/images/landing-3.png"
import { getDateWithoutHours, windowIsNotReady, axiosInstance } from "../../../src/utility"
import { Exhibition, ColorsType } from "../../../src/types"
import { SelectOption } from "../../../src/interfaces"
import { BASE_API_URL } from "../../../src/const"

enum moderationChoices {
  valid = "validated",
  refuse = "refused"
}

interface IFormatData {
	status: moderationChoices,
	reason?: string,
	description?: string,
	exhibition: string
}

interface IError {
	general: null | string
	reason: null | string
	description: null | string
}

interface ITime {
	color: ColorsType,
	time: string
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

	const [formError, setFormError] = useState<IError>({
		general: null,
		reason: null,
		description: null,
	})

	const [time, setTime] = useState<ITime>({color: "black", time: ""})

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
		const IFormatData: IFormatData = {
			status: moderationChoices.valid,
			exhibition: `/api/exhibition/${id}`
		}

		postModeration(IFormatData)
		
	}

	const onSubmitInvalid = (data) => {

		if(typeof data.reason === "object") {
			setFormError(prev => {
				return {
					...prev, 
					reason: "Le choix d'un élément est obligatoire."
				} as IError
			})

			return
		}

		if(data.description === "") {
			setFormError(prev => {
				return {
					...prev, 
					description: "Expliquer votre motif de refus en quelques lignes."
				} as IError
			})

			return
		}

		const IFormatData: IFormatData = {
			status: moderationChoices.refuse,
			reason: data.reason,
			description: data.description,
			exhibition: `/api/exhibition/${id}`
		}

		postModeration(IFormatData)
	}

	const postModeration = (data: IFormatData) => {
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
					} as IError
				})
			}
		})
		.catch((err: any) => {
			setFormError(prev => {
				return {
					...prev, 
					general: "Une erreur s'est produite lors de la transmission de votre modération."
				} as IError
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

	const getExhibitionById = () => {
		return axiosInstance.get(`/exhibitions/${id}`)
		  .then(response => {
			if(response.status === 200) {
			  setExhibition(response.data)
			}
		  }).catch((error) => {
			return error
		  })
	  }

	useEffect(() => {
		getExhibitionById()
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
              primaryImage={primaryImage.src}
              secondaryImages={[secondaryImage.src, thirdImage.src]}
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
							<NextLink href={`https://maps.google.com/?q=${exhibition.board?.gallery.latitude},${exhibition.board?.gallery.longitude}`}>
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