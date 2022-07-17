import React from "react"
import { useRouter } from "next/router"
import jwt from "jsonwebtoken"
import axios from "axios"
import { BASE_API_URL } from "@const/index"

import { Text, LoginForm, SplitScreen, Link } from "@components"
import { useSetRecoilState } from "recoil"
import { userState } from "@recoil/user/atom"
import { signInInputs, signInInputsSchema } from "../../data/form"
import { setCookie } from "@utility/index"
import { IUser } from "../../src/types"
import {
  isLoggedIn,
  setAuthTokens,
} from "axios-jwt"

interface ILoginRequest {
  email: string
  password: string
}

const Form = () => {
  const router = useRouter()
  const setUser = useSetRecoilState(userState)
  const [globalError, setGlobalError] = React.useState<string | null>(null)

  const login = async (params: ILoginRequest) => {
    setGlobalError(null)
    try {
      const response = await axios.post(`${BASE_API_URL}/login_check`, params)
      const { status, data } = response
      if (status === 200) {
        const user = jwt.decode(response.data.token) as IUser
        setUser(user)
        setAuthTokens({
          accessToken: response.data.token,
          refreshToken: response.data.refresh_token,
        })
        setCookie("token", response.data.token, 10000000)
        if (isLoggedIn()) {
          router.push("/")
        }
      }
    } catch (error: any) {
      console.error("Error on login request", error)
      if (error.response.status === 401) {
        setGlobalError("Email ou mot de passe incorrect")
      } else {
        setGlobalError("Une erreur est survenue")
      }
    }
  }

  return (
    <LoginForm
      inputs={signInInputs}
      schema={signInInputsSchema}
      onSubmit={(data) => {
        login(data)
      }}
      submitText="Se connecter"
      title="Connexion"
      globalFormError={globalError}
    >
      <Text color="black" tag="div" typo="paragraph-md">
        Vous n'avez pas de compte ? &nbsp;
        <Link to="/sign-up" label="Créez un compte" />
      </Text>
    </LoginForm>
  )
}

const SignIn: React.FC = () => {
  return <SplitScreen component={<Form />} image="./sign-in-image.png" />
}

export default SignIn
