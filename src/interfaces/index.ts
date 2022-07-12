import { Smiley } from '../types'
export type Semantic = "success" | "info" | "error"
export type Colors = Semantic | "black" | "white" | "dark"
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
<<<<<<< HEAD
<<<<<<< HEAD
  | "eye-opened"
  | "eye-closed"
  | ""
export type NotificationType =
  | "success"
  | "error"
  | "commentary"
  | ""
=======
  | "";
export type NotificationType = "success" | "error" | "commentary";
>>>>>>> c448f47 (add type Smiley)
=======
  | "eye-opened"
  | "eye-closed"
  | ""
export type NotificationType = "success" | "error" | "commentary"
>>>>>>> ad6ccf9 (wip)

export interface SelectOption {
  label: string
  value: string
<<<<<<< HEAD
}

export interface IGuidance {
  type: Semantic;
  message: string;
=======
>>>>>>> ad6ccf9 (wip)
}

export interface IGuidance {
  type: Semantic;
  message: string;
}
