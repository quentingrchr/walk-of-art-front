import React from "react"
import styles from "./index.module.scss"
import { Button, InputGroup } from "@components"
import { useForm } from "react-hook-form"

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
export const FormOne: React.FC<IProps> = ({
  handleStepSubmit,
  defaultValues = {},
}: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues })

  const onSubmit = (e: any) => {
    e.preventDefault()

    handleSubmit((d) => {
      handleStepSubmit(d)
    })(e)
  }

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <InputGroup
        placeholder="ex: Le radeau de la méduse"
        register={register}
        required={true}
        id="title"
        type="text"
        label="Titre de l'oeuvre"
        guidance={
          errors.title
            ? {
                type: "error",
                message:
                  "Le titre doit être rempli pour passer à l’étape suivante",
              }
            : null
        }
      />
      <InputGroup
        placeholder="Descriptif de mon oeuvre"
        register={register}
        id="description"
        type="text"
        label="Descriptif"
        guidance={null}
      />
      <div className={styles.ctaContainer}>
        <Button label={"Suivant"} color="white" bg="dark" type="submit" />
      </div>
    </form>
  )
}
