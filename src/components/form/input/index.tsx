import React from "react"
import styles from "./index.module.scss"
import  cx  from "classnames";
import { Icon } from "@components"
import { InputTypes } from "@interfaces/index";

export type IProps = {
    placeholder: string
    value: string,
    type?: InputTypes,
    register: any,
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

export const Input: React.FC<IProps> = ({placeholder, value, type = 'text', register, onClick}: IProps) => {
    return (
        <div className={styles.container} onClick={(e) => onClick && onClick(e)}>
            <input  placeholder={placeholder} className={styles.input} type={type} {...register} />
            {type === "password" &&
                <div className={cx('icon', { 'cta': onClick })}>
                    <Icon type="avatar" size="large" />
                </div>
            }
        </div>
    )
}
