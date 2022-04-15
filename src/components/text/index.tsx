import React from "react";
import styles from "./index.module.scss";
import { HTMLTextTag, TextTypography, ColorsType } from "../../types";

export interface IProps {
  tag: HTMLTextTag;
  typo: TextTypography;
  color?: ColorsType;
  attributes?: any;
  children?: any;
}
export function Text({
  tag = "p",
  typo = "paragraph-md",
  color = "black",
  attributes = {},
  children,
}: IProps) {
  const element = React.createElement(
    tag,
    { className: `text ${styles[typo]} ${styles[color]}`, ...attributes },
    children
  );
  return element;
}
