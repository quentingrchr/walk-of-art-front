import React from "react"
import { Text, LoginForm, SplitScreen, Link, } from "@components"
import { inputs, inputsSchema } from "./data"

const Form = () => { 
  return (
    <LoginForm inputs={inputs} schema={inputsSchema} onSubmit={() => { alert('submit') }} submitText="Je m'inscris" title="Inscription">
      <Text  color='black' tag='div' typo='paragraph-md' >
        Vous avez déjà un compte ?
        <Link to='/' label='Connectez-vous'/>
      </Text>
    </LoginForm>
  )
}


const SignUp: React.FC = () => {
    return (
        <SplitScreen component={<Form />} image="./sign-up-image.png"/>
    )
}

export default SignUp
