import React, { useState } from "react"
import style from "./index.module.scss"
import { Text } from "@components"
import { AttachedExhibition, AttachedReservation } from "../../types"
import { getDateWithoutHours } from "../../utility"


export type IProps = {
	exhibition: AttachedExhibition
}

export const ReservationInfo: React.FC<IProps> = ({exhibition}: IProps) => {

	const lastReservation: AttachedReservation = exhibition.reservations[exhibition.reservations.length - 1]

	return (
		<a
			href={`artist/exhibition/${exhibition.id}`}
			className={style.exhibitionLink}
		>
			<li className={style.exhibition}>
				<Text tag="p" typo="paragraph-md-bold">
					{`Du ${getDateWithoutHours(
						lastReservation.dateStart
					)} au ${getDateWithoutHours(
						lastReservation.dateEnd
					)}`}
				</Text>
				<Text tag="p" typo="paragraph-md">
					{`Galerie n°${lastReservation.board.gallery.id}`}
				</Text>
				<a href={`https://maps.google.com/?q=${lastReservation.board.gallery.latitude},${lastReservation.board.gallery.longitude}`} target="_blank">Voir sur google maps</a>
			</li>
		</a>
	)
}
