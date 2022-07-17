import React, { useEffect, useState } from "react"
import cn from "classnames"
import s from "./index.module.scss"
import { Icon } from "@components"
import { getBlopUrlFromFile } from "../../../utility"
interface InputData {
  name: string
  required?: boolean
}

export type IProps = {
  register: any
  primaryInput: InputData
  secondaryInputs?: [InputData, InputData, InputData]
  primaryValue?: any
  secondaryValues?: [any, any, any]
  label?: string
  fileType?: string
}

export const InputFile: React.FC<IProps> = ({
  register,
  primaryInput,
  secondaryInputs,
  label = "fichiers acceptés : .jpg, .png, .pdf, .stl, .etc",
  fileType = "image/png, image/jpeg",
  primaryValue,
  secondaryValues,
}: IProps) => {
  const [primaryImagePreview, setPrimaryImagePreview] =
    useState<null | string>(null)
  const [secondaryImagesPreview, setSecondaryImagesPreview] = useState<any>([
    null,
    null,
    null,
  ])

  useEffect(() => {
    const log = async () => {
      if (primaryValue && primaryValue[0]) {
        setPrimaryImagePreview(getBlopUrlFromFile(primaryValue[0] as any))
      }
      if (secondaryValues) {
        setSecondaryImagesPreview(
          secondaryValues.map((value) => {
            if (value && value[0]) {
              return getBlopUrlFromFile(value[0] as any)
            } else {
              return null
            }
          })
        )
      }
    }
    log()
  }, [primaryValue, secondaryValues])

  return (
    <div className={s.container}>
      <label
        className={cn(s.input, s.primary, {
          [s.hasPreview]: primaryImagePreview !== null,
        })}
      >
        <div className={s.inputContent}>
          <div className={s.inputIcon}>
            <Icon type="drop-file" size="xxlarge" />
          </div>
          <div className={s.inputLabel}>{label}</div>
          <input
            {...register(primaryInput.name, {
              required: !!primaryInput.required,
            })}
            type="file"
            accept={fileType}
            name={primaryInput.name}
          />
        </div>
        {primaryImagePreview && (
          <div
            className={s.preview}
            style={{
              backgroundImage: `url(${primaryImagePreview})`,
            }}
          ></div>
        )}
      </label>
      {!!secondaryInputs?.length &&
        secondaryInputs.map(({ name, required }, index) => {
          return (
            <label
            key={index}
              className={cn(s.input, s.secondary, s[`secondary${index + 1}`], {
                [s.hasPreview]: secondaryImagesPreview[index] !== null,
              })}
            >
              <div className={s.inputContent}>
                <div className={s.inputIcon}>
                  <Icon type="drop-file" size="xlarge" />
                </div>
                <input
                  {...register(name, { required: !!required })}
                  type="file"
                  accept={fileType}
                  name={name}
                />
              </div>
              {secondaryImagesPreview[index] && (
                <div
                  className={s.preview}
                  style={{
                    backgroundImage: `url(${secondaryImagesPreview[index]})`,
                  }}
                ></div>
              )}
            </label>
          )
        })}
    </div>
  )
}
