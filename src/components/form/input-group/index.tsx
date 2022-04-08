import React from "react"
import styles from "./index.module.scss"
import { Input, Text, Guidance } from "@components"
import { Semantic } from "@interfaces/index"
import { InputTypes } from "../../../types"


export interface IGuidance {
    type: Semantic,
    message: string
}

export type IProps = {
    label?: string,
    type: InputTypes;
    placeholder?: string,
    register: any,
    guidance: IGuidance | null
}

export const InputGroup: React.FC<IProps> = ({ label, type, placeholder = "", register, guidance }: IProps) => {
    return (
        <div className={styles.container}>
            {label != undefined &&
                <div className={styles.label}>
                    <Text typo="label" color="black" content={label} tag="label" />
                </div>
            }
            <Input register={register} placeholder={placeholder} value="" type={type} />
            {
                guidance != null &&
                <div className={styles.guidance}>
                    <Guidance type={guidance.type} >
                        {guidance.message}
                    </Guidance>
                </div>
                
            }
        </div>
    )
}
