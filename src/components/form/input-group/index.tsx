import React from "react"
import styles from "./index.module.scss"
import { Input, Text, Guidance } from "@components"

export type IProps = {
    label?: string,
    type: "email" | "password" | "text",
    placeholder?: string,
    register: any,
    guidance: {
        type: "error" | "success" | "info",
        message: string,
    } | null
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
