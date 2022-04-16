import React from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import styles from "./index.module.scss"
import { InputGroup, Text, HeadingStrong, Link, Button} from "@components"
import { formInputs, inputsSchema} from "./data"
interface IProps { 

}


export const LoginForm: React.FC<IProps> = (props: IProps) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        criteriaMode: "all",
        resolver: yupResolver(inputsSchema)
    });
    const onSubmit = (data: any) => {
        console.log(data)
    };
    
    return (
        <div className={styles.container}>  
            <div className={styles.title}>
                <HeadingStrong content="Inscription" elementColor="success" color="black" />
            </div>
            <div className={styles.text}>
                <Text  color="black" tag="div" typo="paragraph-md" >
                    Vous avez déjà un compte ?
                    <Link to="/" label="Connectez-vous"/>
                </Text>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                {formInputs.map((input, index) => (
                    <InputGroup {...input} register={register} guidance={input.guidance(errors)} key={index} />
                ))}
                <Button onClick={onSubmit} label="Je m'inscris" type="submit"/>
            </form>
        </div>
    )
}
