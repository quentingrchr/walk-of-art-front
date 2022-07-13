import React, { useEffect } from "react"
import styles from "./index.module.scss"
import cn from "classnames"
import { Button, Input, InputGroup, InputFile } from "@components"
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
}

export const FormThree: React.FC<IRecapProps> = ({
  handleStepSubmit,
  handleBack,
  formState,
}: IRecapProps) => {
  return (
    <div className={cn(styles.formContainer, styles.recap)}>
      <div className={styles.imagesContainer}>
        {/* IMAGES */}

        {/* PRIMARY IMAGE  */}
        <div className={cn(styles.imageContainer, styles.primary)}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${getBlopUrlFromFile(
                formState["primary-image"][0]
              )})`,
            }}
          ></div>
        </div>

        {/* SECONDARY IMAGES */}
        {formState["secondary-image-1"][0] && (
          <div
            className={cn(
              styles.imageContainer,
              styles.secondary,
              styles.secondary1
            )}
          >
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${getBlopUrlFromFile(
                  formState["secondary-image-1"][0]
                )})`,
              }}
            ></div>
          </div>
        )}

        {formState["secondary-image-2"][0] && (
          <div
            className={cn(
              styles.imageContainer,
              styles.secondary,
              styles.secondary2
            )}
          >
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${getBlopUrlFromFile(
                  formState["secondary-image-2"][0]
                )})`,
              }}
            ></div>
          </div>
        )}

        {formState["secondary-image-3"][0] && (
          <div
            className={cn(
              styles.imageContainer,
              styles.secondary,
              styles.secondary3
            )}
          >
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${getBlopUrlFromFile(
                  formState["secondary-image-3"][0]
                )})`,
              }}
            ></div>
          </div>
        )}
      </div>

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
