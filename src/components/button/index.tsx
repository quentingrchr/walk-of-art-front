import React from "react";
import NextLink from 'next/link'
import cn from 'classnames'
import styles from "./index.module.scss";
import { ColorsType } from "../../types";
import { isEternalUrl } from '../../utility'


export interface IProps {
    label: string,
    to?: any,
    target?: string,
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | undefined,
    color?: ColorsType,
    type?: "submit" | "button"
}

export const Button: React.FC<IProps> = ({ label, to, target, onClick, color = "white", type = "button" }: IProps) => {
  if (typeof to === "string") {
        return (
          isEternalUrl(to) ?
            (<a className={cn(styles.button, styles[color])} href={to} target={target}  >{label}</a>)
            : <div className={cn(styles.button, styles[color])}>
              <NextLink href={to}>{label}</NextLink>
            </div>
        )
    } else if (onClick) {
        return <button type={type} className={cn(styles.button, styles[color])} onClick={(e) => onClick(e)}  >{label}</button>
    } else { 
        throw new Error("Button: 'to' or 'onClick' must be defined")
    }
};
