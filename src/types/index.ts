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

export type HTMLTextTag = "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "b" | "i" | "u" | "label"

export type TextTypography = "heading-lg" | "heading-md" | "heading-sm" | "paragraph-md" | "label" | "guidance" | "notification"

export type InputTypes = "password" | "email" | "text" | "textarea" | "select"

export type BadgeTypes = "completed" | "progress"

export interface ExpoStates {
    label: string,
    listComponent: any
}

export type displayTimeType = "completed" | "remaining" | "incoming";


export interface Exposition {
    id: string,
    title: string,
    description: string | null,
    reaction: boolean,
    created_at: string,
    revision_id: number,
    work_id: number,
    user_id: number
}

export interface Reservation {
    id: string,
    date_start: string,
    duration: number,
    created_at: string,
    exhibition_id: number,
    gallery_id: number
}

export interface ReservationWithExposition extends Reservation {
    title: string,
    description: string | null,
    reaction: boolean,
}