import { Smiley } from '../types'
<<<<<<< HEAD
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
=======
export type Semantic = "success" | "info" | "error";
export type Colors = Semantic | "black" | "white" | "dark";
export type sizeIcon = "none" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
>>>>>>> c448f47 (add type Smiley)
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

export interface SelectOption {
  label: string
  value: string
}

export interface IGuidance {
  type: Semantic;
  message: string;
}
