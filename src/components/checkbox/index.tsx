import React from "react"
import styles from "./index.module.scss"
import { Text } from "../text/index"

export type IProps = {
    checkboxName: string,
    checkboxLabel?: string,
    checkboxSize?: number
}

export const Checkbox: React.FC<IProps> = ({
    checkboxName,
    checkboxLabel,
    checkboxSize = 24
}: IProps) => {
    return (
        <div className={styles.container}>
            <label className={styles.custom} htmlFor={checkboxName}>
                <input className={styles.input} type="checkbox" name={checkboxName} id={checkboxName} />
                <div tabIndex={0} className={styles.checkbox} style={{width: `${checkboxSize}px`, height: `${checkboxSize}px`}}></div>
                {
                    checkboxLabel && <Text tag="p" typo="label">{checkboxLabel}</Text>
                }
            </label>
        </div>
    )
}
