import React, { useState } from "react"
import styles from "./index.module.scss"
import { Modal as BaseModal } from "../index"
import { axiosInstance } from "@utility/index"
import { useRouter } from "next/router"

import { useRecoilValue, useSetRecoilState } from "recoil"
import {
  CONFIRM_WORK_DELETE_MODAL_ID,
  activeModalState,
  modalDataState,
} from "@recoil/modal/atom"
import { Button, Tooltip } from "@components"

export type IProps = {}

export const ConfirmWorkDeleteModal: React.FC<IProps> = (props: IProps) => {
  const setActiveModal = useSetRecoilState(activeModalState)
  const modalData = useRecoilValue(modalDataState)
  const [modalError, setModalError] = useState<null | string>(null)
  const [modalLoading, setModalLoading] = useState<boolean>(false)
  const router = useRouter()

  function closeModal() {
    setActiveModal(() => {
      return null
    })
  }

  const handleDelete = async (id: string) => {
    setModalError(null)

    setModalLoading(true)
    try {
      const response = await axiosInstance.delete(`/works/${id}`)
      setModalLoading(false)
      if (response.status === 200) {
        setActiveModal(() => {
          return null
        })
        router.push("/artist/works")
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
      id={CONFIRM_WORK_DELETE_MODAL_ID}
      title="Êtes vous sûrs de vouloir supprimer cette oeuvre ?"
    >
      <section className={styles.modalContent}>
        {modalLoading && (
          <Tooltip text="Suppression de votre oeuvre..." type="info" />
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
