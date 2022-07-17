import React, { useState } from "react"
import styles from "./index.module.scss"
import cn from "classnames"
import { useController } from "react-hook-form"
import { SelectOption } from "@interfaces/index"


export type IProps = {
    control: any;
    id: string;
    placeholder: string;
    defaultValue?: SelectOption;
    options?: SelectOption[];
    required: boolean;
}

export const InputDropdown: React.FC<IProps> = (props: IProps) => {

    let { control, id, placeholder, defaultValue, options, required } = props

    const [openDropdown, setOpenDropdown] = useState(false)
    const [optionSelected, setOptionSelected] = useState <SelectOption | null>(null)

    const {
        field: { onChange, ref },
    } = useController({
        name: id,
        control,
        rules: { required: required },
        defaultValue: defaultValue,
    })

    const handleSelect = (e: any, option: SelectOption) => {
        e.stopPropagation()
        
        onChange(option.value)
        
        setOptionSelected(option)
        setOpenDropdown(false)
    }


    return (
        <fieldset className={styles.container} ref={ref}>
            <button 
                className={cn(optionSelected ? styles.hasValue : null)} 
                onClick={() => setOpenDropdown(prev => !prev)}
            >
                {optionSelected ? optionSelected.label : placeholder}
            </button>
                
            <ul className={cn(openDropdown ? styles.open : null)} style={{maxHeight: openDropdown ? `${options && options.length * 100}%` : '0%'}}>
                {options?.map((option, index) => (
                    <li 
                        key={index} 
                        onClick={(e) => handleSelect(e, option)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </fieldset>
    )
}
