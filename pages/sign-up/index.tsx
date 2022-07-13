import React from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { Text, LoginForm, SplitScreen, Link } from "@components"
import { signUpInputs, signUpInputsSchema } from "../../data/form"

import { BASE_API_URL } from "@const/index"

const Form = () => {
  const router = useRouter()
  const [globalFormError, setGlobalFormError] =
    React.useState<string | null>(null)
  const onSubmit = (data: any) => {
    setGlobalFormError(null)
    const formattedData = {
      email: data.email,
      password: data.password,
      firstname: data.firstName,
      lastname: data.lastName,
    }
  }

  return (
    <LoginForm
      inputs={signUpInputs}
      schema={signUpInputsSchema}
      onSubmit={onSubmit}
      submitText="Je m'inscris"
      title="Inscription"
      globalFormError={globalFormError}
    >
      <Text color="black" tag="div" typo="paragraph-md">
        Vous avez déjà un compte ? &nbsp;
        <Link to="/sign-in" label="Connectez-vous" />
      </Text>
    </LoginForm>
  )
}

const SignUp: React.FC = () => {
  return <SplitScreen component={<Form />} image="./sign-up-image.png" />
}

export default SignUp
