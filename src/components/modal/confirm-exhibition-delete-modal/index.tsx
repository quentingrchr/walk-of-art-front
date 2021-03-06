import React, { useState } from "react"
import styles from "./index.module.scss"
import { Modal as BaseModal } from "../index"
import { axiosInstance } from "@utility/index"
import { useRouter } from "next/router"

import { useRecoilValue, useSetRecoilState } from "recoil"
import {
  CONFIRM_EXHIBITION_DELETE_MODAL_ID,
  activeModalState,
  modalDataState,
} from "@recoil/modal/atom"
import { Button, Tooltip } from "@components"

export type IProps = {}

export const ConfirmExhibitionDeleteModal: React.FC<IProps> = (
  props: IProps
) => {
  const setActiveModal = useSetRecoilState(activeModalState)
  const modalData = useRecoilValue(modalDataState)
  const [modalError, setModalError] = useState<null | string>(null)
  const [modalLoading, setModalLoading] = useState<boolean>(false)
  const router = useRouter()

  function closeModal() {
    setActiveModal((s) => {
      return null
    })
  }

  const handleDelete = async (id: string) => {
    // call api
    setModalError(null)
    setModalLoading(true)
    try {
      const response = await axiosInstance.delete(`/exhibition/${id}`)
      setModalLoading(false)
      if (response.status === 200) {
        setActiveModal((s) => {
          return null
        })
        router.push("/artist/exhibitions")
      }
    } catch (error) {
      setModalLoading(false)
      if (error) {
        setModalError("Oups, une erreur est survenue 😢")
      }
    }
  }

  return (
    <BaseModal
      id={CONFIRM_EXHIBITION_DELETE_MODAL_ID}
      title="Êtes vous sûrs de vouloir supprimer cette exposition ?"
    >
      <section className={styles.modalContent}>
        {modalLoading && (
          <Tooltip text="Suppression de votre exposition..." type="info" />
        )}
        {modalError && <Tooltip text={modalError} type="error" />}
        <div className={styles.modalActionsWrapper}>
          <Button
            label="Oui"
            bg="dark"
            onClick={(): any =>
              !!modalData?.data?.id
                ? handleDelete(modalData.data?.id)
                : setModalError("Oups, une erreur est survenue 😢")
            }
          />
          <Button label="Non" bg="light" color="black" onClick={closeModal} />
        </div>
      </section>
    </BaseModal>
  )
}
