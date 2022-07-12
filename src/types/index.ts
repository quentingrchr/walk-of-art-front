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
  | "artist-black"

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

export enum scrollDirType {
  up = "up",
  down = "down",
}

export interface ExpoStates {
  label: string
  listComponent: any
}

export type displayTimeType = "completed" | "remaining" | "incoming"

interface Link {
  name: string
  url: string
}

interface File {
  id: string
  fileUrl: string
}

interface Board {
  id: string
  gallery: Gallery
  orientation: object
}

interface Gallery {
  id: string
  name: string
  latitude: number
  longitude: number
}

export interface Exhibition {
  id: string
  title: string
  description: string
  dateStart: string
  dateEnd: string
  reaction: boolean
  comment: boolean
  createdAt: string
  status: [{}]
  work: AttachedWork
  board: Board
  snapshot?: Link[]
}

export interface Work {
  id: string
  title: string
  description: string
  createdAt: string
  mainFile: File
  workFiles: File[]
  exhibitions?: AttachedExhibition[]
}

export type AttachedExhibition = ExhibitionForWorks | ExhibitionForWork

interface ExhibitionForWorks {
  id: string
}

interface ExhibitionForWork {
  id: string
  title: string
  dateStart: string
  dateEnd: string
  createdAt: string
  work: string
  board: Board
}

interface AttachedWork {
  id: string
  title: string
  mainFile: File
}

export interface Reservation {
  id: string
  dateStart: string
  duration: number
  createdAt: string
  exhibitionId: number
  galleryId: number
}

export interface ReservationWithExposition extends Reservation {
  title: string
  description: string | null
  reaction: boolean
}

export type UserRolesType = "ROLE_USER" | "ROLE_ARTIST" | "ROLE_MODERATOR"

export interface IUser {
  id: string
  email: string
  iat: number
  exp: number
  roles: [UserRolesType]
}

export interface IWorkDataApi {
  id: string
  title: string
  description: string
  mainFile: string
  createdAt: string
  exhibition: [any]
  workFiles: [any]
}
