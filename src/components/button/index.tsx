import React from "react";
import NextLink from 'next/link'
import cn from 'classnames'
import styles from "./index.module.scss";
import { ColorsType } from "../../types";
import { isEternalUrl } from '../../utility'
import { Icon } from "..";


export interface IProps {
    label: string,
    to?: any,
    target?: string,
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void | undefined,
    color?: ColorsType,
    bg?: "dark" | "light",
    type?: "submit" | "button"
    iconButton?: boolean,
    fullWidth?: boolean,
    icon?: string
}

export const Button: React.FC<IProps> = ({ label, icon, iconButton = true, to, target, onClick, color = "white", type = "button", bg = "dark", fullWidth = true}: IProps) => {

  const handleClick = (e :any) => { 
    if(onClick) {
      onClick(e)
    }
  }

  const internalStyle = cn(styles.button, styles[color], styles[bg], { [styles.fullWidth] : fullWidth })
  console.log(internalStyle);

  if (typeof to === "string") {
    return (
      isEternalUrl(to) ?
        (<a className={internalStyle} href={to} target={target}>{label}</a>)
        : <div className={cn(styles.button, styles[color], { [styles.fullWidth] : fullWidth } )}>
          <NextLink href={to}>{label}</NextLink>
        </div>
    )
  } else if (onClick || type === 'submit') {
    return <button type={type} className={internalStyle} onClick={handleClick} >{label}</button>
  } else if (iconButton === true) {
    return <button type={type} className={internalStyle}>
      <Icon type={`${icon}`} size="medium"/>
      {label}
      </button>
  }else { 
      throw new Error("Button: 'to' or 'onClick' must be defined")
  }
    
};
