import * as yup from "yup";
import { IFormInput } from "./interfaces"


export const inputsSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null])
}).required();

export const formInputs: Array<IFormInput> = [
        {
            id: 'email',
            type: "email",
            label: "Email",
            placeholder: "Entrez votre email",
            guidance: (errors) =>  errors.email ?  ({ type: "error", message: "L'email n'est pas valide" })  : null
        },
        {
            id: 'password',
            type: "password",
            label: "Mot de passe",
            placeholder: "Entrez votre mot de passe",
            guidance: (errors) =>  errors.password ?  ({ type: "error", message: "Le mot de passe doit contenir au moins 8 caractères" })  : ({ type: "info", message: "Il ne doit contenir au minimum 8 caractères dont au moins une lettre majuscule, un chiffre et un caractère spécial." })
        },
        {
            id: 'passwordConfirmation',
            type: "password",
            label: "Confirmation de mot de passe",
            placeholder: "Confirmez votre mot de passe",
            guidance: (errors) =>  errors.passwordConfirmation ? ({ type: "error", message: "Les mots de passe ne correspondent pas" }) : null 
        }
    ] 