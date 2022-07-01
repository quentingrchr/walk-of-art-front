import React from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { Text, LoginForm, SplitScreen, Link } from "@components"
import { signUpInputs, signUpInputsSchema } from "../../data/form"

const Form = () => {
  const router = useRouter()
  const onSubmit = (data: any) => {
    const formattedData = {
      email: data.email,
      password: data.password,
      fisrtname: data.firstName,
      lastname: data.lastName,
    }
    console.log(formattedData)
    axios
      .post(`${process.env.API_BASE_URL}/register`, data)
      .then((res: { status: number; data: any }) => {
        console.log(res.data)

        // if (res.status === 200) {
        //   router.push("/")
        // }
      })
  }

  return (
    <LoginForm
      inputs={signUpInputs}
      schema={signUpInputsSchema}
      onSubmit={onSubmit}
      submitText="Je m'inscris"
      title="Inscription"
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
