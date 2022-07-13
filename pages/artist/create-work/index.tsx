import React from "react"
import { isLoggedIn } from "axios-jwt"
import { TemplatePage, CreateWorkForm, Unauthorized } from "@components"
import { windowIsNotReady } from "../../../src/utility"
import { axiosInstance } from "@utility/index"

async function createWorkRequest(formData) {
  try {
    const workBaseCreateRes = await axiosInstance.post("/works", {
      title: formData.title,
      description: formData.description,
    })
    const workId = workBaseCreateRes.data.id

    const multiPartFileForm = new FormData()
    multiPartFileForm.append("mainFile", formData["primary-image"][0])
    if (formData["secondary-image-1"][0]) {
      multiPartFileForm.append("file", formData["secondary-image-1"][0])
    }
    if (formData["secondary-image-2"][0]) {
      multiPartFileForm.append("file", formData["secondary-image-2"][0])
    }
    if (formData["secondary-image-3"][0]) {
      multiPartFileForm.append("file", formData["secondary-image-3"][0])
    }

    const workImageCreateRes = await axiosInstance.post(
      `/works/${workId}`,
      multiPartFileForm
    )
    return {
      res: workImageCreateRes,
    }
  } catch (error) {
    return { error }
  }
}

const CreateWork: React.FC = () => {
  if (windowIsNotReady()) {
    return null
  }

  return (
    <TemplatePage>
      {isLoggedIn() ? (
        <CreateWorkForm onSubmit={createWorkRequest} />
      ) : (
        <Unauthorized />
      )}
    </TemplatePage>
  )
}

export default CreateWork
