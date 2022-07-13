import React, { useState } from "react"
import style from "./index.module.scss"
import NextLink from "next/link"
import { Text } from "@components"
import { ExhibitionForWork } from "../../types"
import { getDateWithoutHours } from "../../utility"


export type IProps = {
	exhibition: ExhibitionForWork
}

export const ReservationInfo: React.FC<IProps> = ({exhibition}: IProps) => {

	return (
		<NextLink href={`/artist/exhibition/${exhibition.id}`}>
			<a className={style.exhibitionLink}>
				<li className={style.exhibition}>
					<Text tag="p" typo="paragraph-md-bold">
						{`Du ${getDateWithoutHours(
							exhibition.dateStart
						)} au ${getDateWithoutHours(
							exhibition.dateEnd
						)}`}
					</Text>
					<span>
						<Text tag="p" typo="paragraph-md">
							{`Galerie n°${exhibition.board.gallery.id}`}
						</Text>
						<NextLink href={`https://maps.google.com/?q=${exhibition.board.gallery.latitude},${exhibition.board.gallery.longitude}`}>
							<a onClick={e => e.stopPropagation()} className={style.mapsLink}>Voir sur google maps</a>
						</NextLink>
					</span>
				</li>
			</a>
		</NextLink>
	)
}
