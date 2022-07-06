import React, { useState } from "react"
import { TemplatePage, Text, CreateWorkForm, InputFile } from "@components"
import { axiosInstance } from "@utility/index"
import {
  isLoggedIn,
  setAuthTokens,
  clearAuthTokens,
  getAccessToken,
  getRefreshToken,
} from "axios-jwt"

const CreateWork: React.FC = () => {
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false)
  const handleFormSubmit = async (form: any) => {
    if (hasSubmittedForm) return
    setHasSubmittedForm(() => {
      console.log({ form })
      axiosInstance
        .post("/works", {
          title: form.title,
          description: form.description,
        })
        .then((response) => {
          console.log(response)
        })

      return true
    })
  }
  return (
    <TemplatePage isLogged={true}>
      {/* PAGE CONTENT */}
      <Text tag="h1" typo="paragraph-md">
        Page de création d'une oeuvre
      </Text>
      <CreateWorkForm
        onFormSubmit={handleFormSubmit}
        hasSubmittedForm={hasSubmittedForm}
      />
    </TemplatePage>
  )
}

export default CreateWork
