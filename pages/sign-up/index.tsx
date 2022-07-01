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
    axios
      .post(`${BASE_API_URL}/register`, formattedData)
      .then((res: { status: number; data: any }) => {
        if (res.status === 201) {
          router.push("/")
        } else if (res.status === 409) {
          setGlobalFormError("Cet email existe déjà")
        } else {
          console.log("error")
        }
      })
      .catch((err: any) => {
        if (err.response.status) {
          setGlobalFormError("Cet email existe déjà")
        } else {
          setGlobalFormError(
            "Oups il semblerait que quelque chose se soit mal passé"
          )
        }
      })
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
