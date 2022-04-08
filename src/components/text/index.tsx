import React from "react";
import styles from "./index.module.scss";
import { HTMLTextTag, TextTypography, ColorsType } from "../../types";

export interface IProps {
  tag: HTMLTextTag;
  content: string;
  typo: TextTypography;
  color?: ColorsType;
  attributes?: any;
}
export function Text({
  tag = "p",
  content = "content",
  typo = "paragraph-md",
  color = "black",
  attributes = {},
}: IProps) {
  const element = React.createElement(
    tag,
    { className: `text ${styles[typo]} ${styles[color]}`, ...attributes },
    content
  );
  return element;
}
