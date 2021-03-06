import React from "react"
import styles from "./index.module.scss"
import { Text } from "../text/index"
import { Guidance } from "../form/guidance/index"
import { Semantic } from "@interfaces/index";


export type IProps = {
    checkboxName: string,
    checkboxLabel?: string,
    guidanceLabel?: string,
    guidanceType?: Semantic,
    isDisabled?: boolean,
    isChecked?: boolean,
    onChange?: (e) => void 
}

export const Checkbox: React.FC<IProps> = ({
    checkboxName,
    checkboxLabel,
    isDisabled = false,
    isChecked = false,
    guidanceLabel,
    guidanceType = 'success',
    onChange
}: IProps) => {
    return (
        <div className={styles.container}>
            <label className={styles.custom} htmlFor={checkboxName} data-guidance={guidanceLabel ? true : false} data-disabled={isDisabled}>
                <input 
                    className={styles.input} 
                    type="checkbox" 
                    //defaultChecked={isChecked ?? 'checked'}
                    checked={isChecked}
                    name={checkboxName}
                    id={checkboxName} 
                    onChange={onChange ? (e) => onChange(e) : undefined}
                />
                <div tabIndex={0} className={styles.box} ></div>
                {
                    checkboxLabel && (
                        <>
                            <Text tag="p" typo="label">{checkboxLabel}</Text>
                            <div className={styles.guidance_container}>
                                {
                                    guidanceLabel && <Guidance type={guidanceType}>{guidanceLabel}</Guidance>
                                }
                            </div>
                        </>
                    )
                }
            </label>
        </div>
    )
}
