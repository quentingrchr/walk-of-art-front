export type Semantic = "success" | "info" | "error"
export type Colors = Semantic | "black" | "white"
export type sizeIcon =
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"

export type Icons =
  | "avatar"
  | "notification"
  | "logout"
  | "profile"
  | "cross"
  | "checkbox"
  | "check"
  | "commentary"
  | "informations"
  | "drop-file"
  | "down-arrow"
  | "top-arrow"
  | "left-arrow"
  | "right-arrow"
  | "search"
  | "plus"
  | "pen"
  | "bin"
  | "calendar"
  | "chrono"
  | ""
export type NotificationType = "success" | "error" | "commentary"

export interface SelectOption {
  label: string
  value: string
}
