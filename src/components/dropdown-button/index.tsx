import React, { useState, useRef } from "react"
import cn from "classnames"
import s from "./index.module.scss"
import { Button } from "@components/button"
export type IProps = {

}

export const DropdownButton: React.FC<IProps> = (props: IProps) => {
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

    function handleClick(e: MouseEventHandler<HTMLButtonElement>) {
        e.preventDefault()
    }

    function handleMouseEnter(e: MouseEventHandler<HTMLDivElement>) { 
        setIsOpen(true)
    }

    function handleMouseLeave(e: MouseEventHandler<HTMLDivElement>) { 
        console.log("leave", e.target);
        if (dropdownRef.current) { 
            console.log(e.relatedTarget)
            if (isDescendant(dropdownRef.current, e.relatedTarget) || dropdownRef.current === e.relatedTarget) return
            setIsOpen(false)
        }
    }   


    return (
        <div className={cn(s.container, {[s.isOpen] : isOpen})}>
            <button className={s.button} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>test</button>
            <div ref={dropdownRef} className={s.dropdown} onMouseLeave={handleMouseLeave}>
                <ul className={cn(s.list, {[s.isOpen] : isOpen})}>
                    <li className={s.item}> Choice 1 </li>
                    <li className={s.item}> Choice 2 </li>
                </ul>
            </div>
        </div>
    )
}
