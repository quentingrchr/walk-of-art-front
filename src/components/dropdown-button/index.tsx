import React, { useState, useRef } from "react"
import cn from "classnames"
import s from "./index.module.scss"
import Link from "next/link"

interface Choice { 
    label: string
    onClick?: () => void
    to?: string
}
export interface IProps {
    className?: string
    label: string
    choices: Choice[]
}

export const DropdownButton: React.FC<IProps> = ({label = 'Label', choices = [{label: 'Choice', onClick: () => {}}]}: IProps) => {
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
            console.log(e.relatedTarget)
            if (isDescendant(dropdownRef.current, e.relatedTarget) || dropdownRef.current === e.relatedTarget) return
            setIsOpen(false)
        }
    }  



    return (
        <div className={cn(s.container, {[s.isOpen] : isOpen})}>
            <button className={s.button} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{label}</button>
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
