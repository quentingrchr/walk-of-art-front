import React, { useEffect } from "react"
import styles from "./index.module.scss"
import { Input, Text, Guidance } from "@components"
import { Semantic } from "@interfaces/index"
import { InputTypes } from "../../../types"


export interface IGuidance {
    type: Semantic,
    message: string
}

export type IProps = {
    id: string
    label?: string
    type: InputTypes
    placeholder?: string
    guidance: IGuidance | null
    register: any
}

export const InputGroup: React.FC<IProps> = ({id, label, type, placeholder = "", register, guidance }: IProps) => {
    useEffect(() => { 
        register(id)
    }, [])
    return (
        <div className={styles.container}>
            {label != undefined &&
                <div className={styles.label}>
                    <Text typo="label" color="black" tag="label" >{label}</Text>
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
