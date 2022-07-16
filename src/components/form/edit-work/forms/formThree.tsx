import React, { useEffect } from "react"
import styles from "./index.module.scss"
import cn from "classnames"
import { Button, ImagesPreview } from "@components"
import { useForm, useFormContext, FormProvider } from "react-hook-form"
import { getBlopUrlFromFile } from "../../../../utility"

export interface IProps {
  handleStepSubmit: (data: any) => void
  handleBack: () => void
  defaultValues?: any
}

export interface IRecapProps {
  handleStepSubmit: (data: any) => void
  handleBack: () => void
  formState: any
  imagesUrls: string[]
}

export const FormThree: React.FC<IRecapProps> = ({
  handleStepSubmit,
  handleBack,
  formState,
  imagesUrls,
}: IRecapProps) => {
  return (
    <div className={cn(styles.formContainer, styles.recap)}>
      <ImagesPreview
        primaryImage={imagesUrls[0]}
        secondaryImages={imagesUrls.splice(0)}
      />
      <p className={styles.title}>{formState.title}</p>
      <p className={styles.description}>{formState.description}</p>
      <div className={styles.ctaContainer}>
        <Button
          label={"Précédent"}
          color="white"
          bg="dark"
          onClick={handleBack}
        />
        <Button
          label={"Valider"}
          color="white"
          bg="dark"
          onClick={() => {
            handleStepSubmit(null)
          }}
        />
      </div>
    </div>
  )
}
