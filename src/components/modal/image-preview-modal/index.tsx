import React from "react"
import styles from "./index.module.scss"
import { Modal as BaseModal } from "../index"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {
  IMAGE_PREVIEW_MODAL_ID,
  activeModalState,
} from "@recoil/modal/atom"

import { Text } from '@components'

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
      title='&nbsp;'
      fullScreen={true}
      background="artist-black"
      iconColor="white"
    >
      <div className={styles.container}>
        <Text tag="h2" typo="heading-md">Voila le titre de l'exposition que je visite</Text>
      </div>
    </BaseModal>
  )
}
