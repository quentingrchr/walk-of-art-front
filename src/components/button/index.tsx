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
    bg?: "dark" | "light",
    type?: "submit" | "button"
}

export const Button: React.FC<IProps> = ({ label, to, target, onClick, color = "white", type = "button", bg = "dark" }: IProps) => {

  const handleClick = (e :any) => { 
    if(onClick) {
      onClick(e)
    }
  }

  if (typeof to === "string") {
    return (
      isEternalUrl(to) ?
        (<a className={cn(styles.button, styles[color], styles[bg])} href={to} target={target}  >{label}</a>)
        : <div className={cn(styles.button, styles[color])}>
          <NextLink href={to}>{label}</NextLink>
        </div>
    )
  } else if (onClick || type === 'submit') {
    return <button type={type} className={cn(styles.button, styles[color], styles[bg])} onClick={handleClick} >{label}</button>
  } else { 
      throw new Error("Button: 'to' or 'onClick' must be defined")
  }
    
};
