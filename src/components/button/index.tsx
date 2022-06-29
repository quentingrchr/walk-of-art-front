import React from "react";
import NextLink from "next/link";
import cn from "classnames";
import styles from "./index.module.scss";
import { ColorsType } from "../../types";
import { isEternalUrl } from "../../utility";
import { Icons } from "@interfaces/index";
import { Icon } from "..";

export interface IProps {
  label: string;
  to?: any;
  target?: string;
  onClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void | undefined;
  color?: ColorsType;
  bg?: "dark" | "light";
  type?: "submit" | "button";
  fullWidth?: boolean;
  icon?: Icons;
}

export const Button: React.FC<IProps> = ({
  label,
  icon,
  to,
  target,
  onClick,
  color = "white",
  type = "button",
  bg = "dark",
  fullWidth = true,
}: IProps) => {
  const handleClick = (e: any) => {
    if (onClick) {
      onClick(e);
    }
  };

  const internalStyle = cn(styles.button, styles[color], styles[bg], {
    [styles.fullWidth]: fullWidth,
  });

  if (typeof to === "string") {
    return isEternalUrl(to) ? (
      <a className={internalStyle} href={to} target={target}>
        {icon && <Icon type={icon} size="medium" />}
        {<span>{label}</span>}
      </a>
    ) : (
      <div>
        <div
          className={cn(styles.icon, styles.button, styles[color], styles[bg], {
            [styles.fullWidth]: fullWidth,
          })}
        >
          <NextLink href={to}>
            <>
              {icon && <Icon type={icon} size="medium" color={bg === "dark" ? "white" : "black"} />}
              {<span>{label}</span>}
            </>
          </NextLink>
        </div>
      </div>
    );
  } else if (onClick || type === "submit") {
    return (
      <button type={type} className={internalStyle} onClick={handleClick}>
        {icon && <Icon type={icon} size="medium" />}
        {<span>{label}</span>}
      </button>
    );
  } else {
    throw new Error("Button: 'to' or 'onClick' must be defined");
  }
};
