import React, { useState, useEffect,  useRef } from "react"
import styles from "./index.module.scss"
import cn from "classnames"


interface InputOption {
    label: string;
    value: string;
}

export type IProps = {
    register: any;
    id: string;
    placeholder: string;
    options: InputOption[];
    required: boolean;
}

export const InputDropdown: React.FC<IProps> = (props: IProps) => {

    let selectRef: any = useRef()

    let { register, id, placeholder, options, required } = props

    const [openDropdown, setOpenDropdown] = useState(false)
    const [valueSelected, setValueSelected] = useState(null)


    const handleSelect = (e, value) => {
        e.stopPropagation()
        selectRef.current.value = value
        
        setValueSelected(e.target.innerText)
        setOpenDropdown(false)
    }


    return (
        <fieldset className={styles.container}>
            <button 
                className={cn(valueSelected ? styles.hasValue : null)} 
                onClick={() => setOpenDropdown(prev => !prev)}
            >
                {valueSelected ? valueSelected : placeholder}
            </button>
                
            <ul className={cn(openDropdown ? styles.open : null)} style={{maxHeight: openDropdown ? `${options.length * 100}%` : '0%'}}>
                {options.map((option, index) => (
                    <li 
                        key={index} 
                        onClick={(e) => handleSelect(e, option.value)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>

            <select 
                id={id} 
                ref={selectRef} 
                style={{display: "none"}} 
                {...register(id, { required: required})}
            >
                {options.map((option, index) => (
                    <option key={`option-hidden-${index}`}  value={option.value}>{option.label}</option>
                ))}
            </select>
        </fieldset>
    )
}
