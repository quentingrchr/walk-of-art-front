import React, { Children, useEffect } from "react"
import cn from "classnames"
import style from "./index.module.scss"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { activeModalState } from "@recoil/modal/atom"
import { scrollDisabledState } from "@recoil/scroll/atom"

import { Icon, Text } from "@components"

export type IProps = {
  id: string
  children: React.ReactNode
  title?: string
}

export const Modal: React.FC<IProps> = ({ id, children, title }: IProps) => {
  const activeModal = useRecoilValue(activeModalState)
  const setActiveModal = useSetRecoilState(activeModalState)
  const setScrollDisabled = useSetRecoilState(scrollDisabledState)

  function closeModal() {
    setActiveModal((s) => {
      return null
    })
  }

  useEffect(() => {
    if (activeModal === id) {
      // Modal is open
      setScrollDisabled(true)
    } else {
      // Modal is closed
      setScrollDisabled(false)
    }
  }, [activeModal])

  return (
    <div className={cn(style.container, { [style.open]: id === activeModal })}>
      <div className={style.overlay} onClick={closeModal}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            {title && (
              <Text tag="p" typo="paragraph-md">
                {title}
              </Text>
            )}
            <span className={style.cross}>
              <Icon type="cross" size="medium" onClick={closeModal} />
            </span>
          </div>
          <div className={style.modalBody}>{children}</div>
        </div>
      </div>
    </div>
  )
}
