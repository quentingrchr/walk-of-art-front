import React from "react"
import { useRouter } from "next/router"
import jwt from "jsonwebtoken"
import axios from "axios"
import { BASE_API_URL } from "@const/index"

import { Text, LoginForm, SplitScreen, Link } from "@components"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { userState } from "@recoil/user/atom"
import { signInInputs, signInInputsSchema } from "../../data/form"
import { axiosInstance } from "@utility/index"
import {
  isLoggedIn,
  setAuthTokens,
  clearAuthTokens,
  getAccessToken,
  getRefreshToken,
} from "axios-jwt"

interface ILoginRequest {
  email: string
  password: string
}

const Form = () => {
  const router = useRouter()
  const setUser = useSetRecoilState(userState)

  const login = async (params: ILoginRequest) => {
    const response = await axios.post(`${BASE_API_URL}/login_check`, params)
    const { status, data } = response
    if (status === 200) {
      console.log(response.data.token)
      setUser(jwt.decode(response.data.token))
      setAuthTokens({
        accessToken: response.data.token,
        refreshToken: response.data.refresh_token,
      })
      if (isLoggedIn()) {
        router.push("/")
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
