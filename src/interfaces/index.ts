export type Semantic = "success" | "info" | "error";
export type Colors = Semantic | "black" | "white" | "dark";
export type sizeIcon = "none" | "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
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
  | "smiley"
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
  | "smiley-like"
  | "smiley-love"
  | "smiley-lol"
  | "smiley-wow"
  | "";
export type NotificationType = "success" | "error" | "commentary";

export interface SelectOption {
  label: string;
  value: string;
}
