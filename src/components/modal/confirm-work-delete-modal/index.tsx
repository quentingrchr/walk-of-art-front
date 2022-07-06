import React from "react"
import styles from "./index.module.scss"
import { Modal as BaseModal } from "../index"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {
  CONFIRM_WORK_DELETE_MODAL_ID,
  activeModalState,
} from "@recoil/modal/atom"
import { Button } from "@components"

export type IProps = {}

export const ConfirmWorkDeleteModal: React.FC<IProps> = (props: IProps) => {
  const setActiveModal = useSetRecoilState(activeModalState)

  function closeModal() {
    setActiveModal((s) => {
      return null
    })
  }

  return (
    <BaseModal
      id={CONFIRM_WORK_DELETE_MODAL_ID}
      title="Êtes vous sûrs de vouloir supprimer cette oeuvre ?"
    >
      <section className={styles.modalContent}>
        <div className={styles.modalActionsWrapper}>
          <Button
            label="Oui"
            bg="dark"
            onClick={() => console.log("supprimer")}
          />
          <Button label="Non" bg="light" color="black" onClick={closeModal} />
        </div>
      </section>
    </BaseModal>
  )
}
