import React from "react"
import { Text, LoginForm, SplitScreen, Link, } from "@components"
import { inputs, inputsSchema } from "./data"

const Form = () => { 
  return (
    <LoginForm inputs={inputs} schema={inputsSchema} onSubmit={() => { alert('submit') }} submitText="Se connecter" title="Connexion">
      <Text  color='black' tag='div' typo='paragraph-md' >
        Vous n'avez pas de compte ? &nbsp;
        <Link to='/sign-up' label='Créez un compte'/>
      </Text>
    </LoginForm>
  )
}


const SignIn: React.FC = () => {
    return (
        <SplitScreen component={<Form />} image="./sign-in-image.png"/>
    )
}

export default SignIn
