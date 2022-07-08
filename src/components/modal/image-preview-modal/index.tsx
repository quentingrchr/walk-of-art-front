import React from "react"
import styles from "./index.module.scss"
import { Modal as BaseModal } from "../index"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {
  IMAGE_PREVIEW_MODAL_ID,
  activeModalState,
} from "@recoil/modal/atom"
import { Button } from "@components"

export type IProps = {}

export const ImagePreviewModal: React.FC<IProps> = (props: IProps) => {
  const setActiveModal = useSetRecoilState(activeModalState)

  function closeModal() {
    setActiveModal((s) => {
      return null
    })
  }

  return (
    <BaseModal
      id={IMAGE_PREVIEW_MODAL_ID}
      title="Êtes vous sûrs de vouloir supprimer cette oeuvre ?"
    >
      hello world
    </BaseModal>
  )
}
