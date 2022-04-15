import React from "react"
import { InputGroup, Text, HeadingStrong, Link } from "@components"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from "./index.module.scss"

import { IFormInput } from "./interfaces"
interface IProps { 

}


const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null])
}).required();

export const LoginForm: React.FC<IProps> = (props: IProps) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        criteriaMode: "all",
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: any) => {
        console.log(data)
    };

    const formInputs: Array<IFormInput>= [
        {
            register: register('email'),
            type: "email",
            label: "Email",
            placeholder: "Entrez votre email",
            guidance: (errors) =>  errors.email ?  ({ type: "error", message: "L'email n'est pas valide" })  : null
        },
        {
            register: register('password'),
            type: "password",
            label: "Mot de passe",
            placeholder: "Entrez votre mot de passe",
            guidance: (errors) =>  errors.password ?  ({ type: "error", message: "Le mot de passe doit contenir au moins 8 caractères" })  : null
        },
        {
            register: register('passwordConfirmation'),
            type: "password",
            label: "Confirmation de mot de passe",
            placeholder: "Confirmez votre mot de passe",
            guidance: (errors) =>  errors.passwordConfirmation ? ({ type: "error", message: "Les mots de passe ne correspondent pas" }) : null 
        }
    ] 
    
    return (
        <div className={styles.container}>  
            <div className={styles.title}>
                <HeadingStrong content="Inscription" elementColor="success" color="black" />
            </div>
            <div>
                <Text color="black" tag="p" typo="paragraph-md" >
                    Vous n'avez pas encore de compte ?
                </Text>
                <Link to="/" label="Connectez-vous"/>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                {formInputs.map((input, index) => (
                    <InputGroup {...input} guidance={input.guidance(errors)} key={index} />
                ))}
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
