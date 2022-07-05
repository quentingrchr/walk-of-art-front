import React, { useState } from "react"
import { TemplatePage, Text, CreateWorkForm, InputFile } from "@components"

const CreateWork: React.FC = () => {
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false)
  const handleFormSubmit = (values: any) => {
    if (hasSubmittedForm) return
    setHasSubmittedForm((state) => {
      // console.log(values, hasSubmittedForm)
      // todo : handle form submit
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
