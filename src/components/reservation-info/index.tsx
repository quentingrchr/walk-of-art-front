import React, { useState } from "react"
import style from "./index.module.scss"
import NextLink from "next/link"
import { Text } from "@components"
import { AttachedExhibition, AttachedReservation } from "../../types"
import { getDateWithoutHours } from "../../utility"


export type IProps = {
	exhibition: AttachedExhibition
}

export const ReservationInfo: React.FC<IProps> = ({exhibition}: IProps) => {

	const lastReservation: AttachedReservation = exhibition.reservations[exhibition.reservations.length - 1]

	return (
		<NextLink href={`/artist/exhibition/${exhibition.id}`}>
			<a className={style.exhibitionLink}>
				<li className={style.exhibition}>
					<Text tag="p" typo="paragraph-md-bold">
						{`Du ${getDateWithoutHours(
							lastReservation.dateStart
						)} au ${getDateWithoutHours(
							lastReservation.dateEnd
						)}`}
					</Text>
					<span>
						<Text tag="p" typo="paragraph-md">
							{`Galerie n°${lastReservation.board.gallery.id}`}
						</Text>
						<NextLink href={`https://maps.google.com/?q=${lastReservation.board.gallery.latitude},${lastReservation.board.gallery.longitude}`}>
							<a onClick={e => e.stopPropagation()} className={style.mapsLink}>Voir sur google maps</a>
						</NextLink>
					</span>
				</li>
			</a>
		</NextLink>
	)
}
