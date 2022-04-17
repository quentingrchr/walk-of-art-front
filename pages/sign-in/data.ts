import * as yup from "yup";
import { IFormInput } from "@components/form/login-form/interfaces";


export const inputsSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null])
}).required();

export const inputs: Array<IFormInput> = [
        {
            id: 'email',
            type: "email",
            label: "Email",
            placeholder: "Entrez votre email",
            guidance: (errors: any) =>  errors.email ?  ({ type: "error", message: "L'email n'est pas valide" })  : null
        },
        {
            id: 'password',
            type: "password",
            label: "Mot de passe",
            placeholder: "Entrez votre mot de passe",
            guidance: (errors: any) =>  errors.password ?  ({ type: "error", message: "Le mot de passe doit contenir au moins 8 caractères" })  : null
        },
        /* todo add checkbox */
    ] 