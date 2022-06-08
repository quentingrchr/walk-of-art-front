import React from "react";
import styles from "./index.module.scss";
import { HTMLTextTag, TextTypography, ColorsType } from "../../types";

export interface IProps {
  tag: HTMLTextTag;
  typo: TextTypography;
  color?: ColorsType;
  attributes?: any;
  display?: string;
  children?: any;
}
export function Text({
  tag = "p",
  typo = "paragraph-md",
  color = "black",
  display = "block",
  attributes = {},
  children,
}: IProps) {

  const element = React.createElement(
    tag,
    { className: `text ${styles[typo]} ${styles[color], styles[display]}`, ...attributes },
    children
  );
  return element;
}
