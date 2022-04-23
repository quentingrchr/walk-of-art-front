import React from "react"
import { Text, LoginForm, SplitScreen, Link, } from "@components"
import { signInInputs, signInInputsSchema } from "../../data/form"

const Form = () => { 
  return (
    <LoginForm inputs={signInInputs} schema={signInInputsSchema} onSubmit={() => { alert('submit') }} submitText="Se connecter" title="Connexion">
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
