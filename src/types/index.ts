import { ReactNode } from "react"

export type ColorsType =
  | "black"
  | "white"
  | "beige"
  | "error"
  | "error-light"
  | "success"
  | "success-light"
  | "info"
  | "info-light"
  | "violet"
  | "pink"

export type HTMLTextTag =
  | "p"
  | "span"
  | "div"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "b"
  | "i"
  | "u"
  | "label"

export type TextTypography =
  | "heading-xl"
  | "heading-lg"
  | "heading-md"
  | "heading-sm"
  | "heading-xs"
  | "heading-xxs"
  | "paragraph-md"
  | "paragraph-md-semi"
  | "paragraph-md-bold"
  | "paragraph-sm"
  | "label"
  | "guidance"
  | "notification"

export type InputTypes = "password" | "email" | "text" | "textarea" | "select"

export type BadgeTypes = "completed" | "progress"

export enum scrollDirType  {
	up = "up",
	down = "down"
}

export interface ExpoStates {
  label: string
  listComponent: any
}

export type displayTimeType = "completed" | "remaining" | "incoming"

export interface Exhibition {
	id: string,
	title: string,
	description: string | null,
	reaction: boolean,
	created_at: string,
	revision_id: number,
	work_id: number,
	user_id: number
}

export interface Work {
  id: string
  title: string
  description: string
  created_at: string
  exhibitions?: AttachedExhib[]
}

interface AttachedExhib {
  id: string
  date_start : string,
  date_end: string,
  adress: string,
  gallerie: string
}

export interface Reservation {
	id: string,
	dateStart: string,
	duration: number,
	createdAt: string,
	exhibitionId: number,
	galleryId: number
}

export interface ReservationWithExposition extends Reservation {
	title: string,
	description: string | null,
	reaction: boolean,
}

export type UserRolesType = "ROLE_USER" | "ROLE_ARTIST" | "ROLE_MODERATOR"

export interface IUser {
  id: string
  email: string
  iat: number
  exp: number
  roles: [UserRolesType]
}
