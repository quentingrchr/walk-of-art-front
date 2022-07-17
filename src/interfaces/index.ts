import { Smiley } from '../types'
export type Semantic = "success" | "info" | "error"
export type Colors = Semantic | "black" | "white" | "dark" | "grey-500"
export type sizeIcon =
  | "none"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
export type Icons =
  | Smiley
  | "avatar"
  | "notification"
  | "logout"
  | "profile"
  | "cross"
  | "checkbox"
  | "check"
  | "commentary"
  | "rightArrow"
  | "information"
  | "littleDownArrow"
  | "drop-file"
  | "downArrow"
  | "searchIcon"
  | "chrono"
  | "calendar"
  | "leftArrow"
  | "bellNotification"
  | "warning"
  | "twitter"
  | "facebook"
  | "selectCheck"
  | "trash"
  | "chevronRight"
  | "chevronLeft"
  | "topArrow"
  | "leftArrow"
  | "hasNotification"
  | "bellNotification"
  | "warning"
  | "selectCheck"
  | "trash"
  | "chevronRight"
  | "chevronLeft"
  | "eye-opened"
  | "eye-closed"
  | ""
export type NotificationType =
  | "success"
  | "error"
  | "commentary"
  | ""

export interface SelectOption {
  label: string
  value: string
}

export interface IGuidance {
  type: Semantic;
  message: string;
}