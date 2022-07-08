export type Semantic = "success" | "info" | "error";
export type Colors = Semantic | "black" | "white" | "dark";
export type sizeIcon = "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
export type Icons =
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
  | "smiley"
  | "";
export type NotificationType = "success" | "error" | "commentary";

export interface SelectOption {
  label: string;
  value: string;
}
