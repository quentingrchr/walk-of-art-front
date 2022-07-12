import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { TemplatePage, Text, EditWorkForm, Tooltip } from "@components"
import { axiosInstance } from "@utility/index"
import styles from "./index.module.scss"
import { IWorkDataApi } from "../../../src/types"

interface IPageError {
  message: string
}

const EditWork: React.FC = () => {
  const [workData, setWorkData] = React.useState<null | IWorkDataApi>(null)
  const [pageError, setPageError] = React.useState<null | IPageError>(null)
  const router = useRouter()

  const { id } = router.query

  function editWork(formData: any) {
    // call api
    console.log({ formData })
  }

  const getWorkData = async () => {
    if (!id) return
    console.log("getWorkData")
    try {
      // 1ed01c7f-b907-67d0-ac52-653c8b2e8a29
      const res = await axiosInstance.get(`/works/${id}`)
      setWorkData(res.data)
    } catch (error: any) {
      if (error?.response?.status === 404) {
        setPageError({
          message: "Oups, on dirait que cette oeuvre n'existe pas 🙁",
        })
      } else {
        setPageError({
          message: "Oups, une erreur est survenue 😢",
        })
      }
    }
  }

  // TODO BLOCK EDIT IF WORK IS IN EXIBITION

  useEffect(() => {
    if (!router.isReady) return
    getWorkData()

    // codes using router.query
  }, [router.isReady])
  return (
    <TemplatePage>
      {pageError && (
        <div className={styles.error}>
          <Tooltip type="error" text={pageError.message} />
        </div>
      )}
      {!!workData && <EditWorkForm onSubmit={editWork} workData={workData} />}
    </TemplatePage>
  )
}

export default EditWork

/*
createdAt: "2022-07-12T09:49:54+00:00"
description: "zerze"
exhibitions: []
id: "1ed01c7f-b907-67d0-ac52-653c8b2e8a29"
mainFile: {id: '1ed01c7f-bcc5-658e-9533-e538ca3e6445', fileUrl: '/files/work_files/img-7159-62cd43c344fe1072449911.jpg'}
title: "zerzer"
workFiles: [{…}]
*/
