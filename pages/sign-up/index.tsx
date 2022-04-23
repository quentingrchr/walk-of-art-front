import React from "react"
import { Text, LoginForm, SplitScreen, Link, } from "@components"
import { signUpInputs, signUpInputsSchema } from "../../data/form"

const Form = () => { 
  return (
    <LoginForm inputs={signUpInputs} schema={signUpInputsSchema} onSubmit={() => { alert('submit') }} submitText="Je m'inscris" title="Inscription">
      <Text  color='black' tag='div' typo='paragraph-md' >
        Vous avez déjà un compte ? &nbsp;
        <Link to='/sign-in' label='Connectez-vous'/>
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
