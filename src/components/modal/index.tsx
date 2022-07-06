import React, { useEffect } from "react"
import style from "./index.module.scss"
import { Icon } from "@components"

export type IProps = {
    isOpen: boolean
    closeModal: () => void
    children: React.ReactNode
}

export const Modal: React.FC<IProps> = ({isOpen, closeModal, children}: IProps) => {

    useEffect(() => {
        let body = document.querySelector("body")
        
        if(isOpen) body?.classList.add("modal-open")
            
        return () => body?.classList.remove("modal-open")
        
    }, [isOpen])

    return (
        <div className={style.overlay}>
            <div className={style.modal}>
                <span className={style.cross}>
                    <Icon type="cross" size="medium" onClick={() => closeModal()}/>
                </span>
                {children}
            </div>
        </div>
    )
}
