import React, { useState, useRef } from "react"
import cn from "classnames"
import s from "./index.module.scss"
import Link from "next/link"
import { Colors, Icons } from "@interfaces/index";
import { Icon } from "@components";

interface Choice { 
    label: string
    onClick?: () => void
    to?: string
}
export interface IProps {
    className?: string
    label: string
    choices: Choice[]
    icon?: Icons
    fullWidth?: boolean
}

export const DropdownButton: React.FC<IProps> = ({ icon = '' , label = 'Label', fullWidth = false, choices = [{label: 'Choice', onClick: () => {}}], className}: IProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = React.useRef<HTMLDivElement>(null)

    function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

    function handleClick(e: any) {
        e.preventDefault()
    }

    function handleMouseEnter(e: any) { 
        setIsOpen(true)
    }

    function handleMouseLeave(e: any) { 
        if (dropdownRef.current) { 
            if (isDescendant(dropdownRef.current, e.relatedTarget) || dropdownRef.current === e.relatedTarget) return
            setIsOpen(false)
        }
    }  



    return (
        <div className={cn(s.container, { [s.isOpen]: isOpen }, { [s.fw] : fullWidth}, className)}>
            <button className={s.button} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span>
                {label}
                </span>
                {icon && <span className={s.icon}>
                    <Icon type={icon} size="small" color="none" />
                </span>}
            </button>
            <div ref={dropdownRef} className={s.dropdown} onMouseLeave={handleMouseLeave}>
                <ul className={cn(s.list, {[s.isOpen] : isOpen})}>
                    {
                        choices.map((choice, index) => {
                            if (choice.to) {
                                return (
                                    <li key={index} className={s.item}>
                                        <Link href={choice.to}>{choice.label}</Link>
                                    </li>
                                )
                            } else if (choice.onClick) { 
                                return (
                                    <li key={index} className={s.item}>
                                        <button onClick={() => {
                                            setIsOpen(false)
                                            if(choice.onClick) choice.onClick()
                                        }}>
                                            {choice.label}</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
