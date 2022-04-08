import React from "react"
import { InputGroup, Text } from "@components"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from "./index.module.scss"

export type IProps = {

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
    
    return (
        <div className={styles.container}>  
            <div className={styles.title}>
                <Text tag="h3" content="Title" typo="heading-lg" />
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                <InputGroup register={register('email')} type="email" label="Email" guidance={errors.email ? { type: "error", message: "L'email n'est pas valide" } : null} />
                <InputGroup register={register('password')} type="password" label="Mot de passe" guidance={errors.password ? { type: "error", message: "Il ne doit contenir au minimum 8 caractères dont au moins une lettre majuscule, un chiffre et un caractère spécial." } : { type: "info", message: "Il ne doit contenir au minimum 8 caractères dont au moins une lettre majuscule, un chiffre et un caractère spécial." }} />
                <InputGroup register={register('passwordConfirmation')} type="password" label="Confirmation mot de passe"  guidance={errors.passwordConfirmation ? {type: "error", message: "Les mots de passe doivent être identiques" } : null} />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
