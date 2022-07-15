import React, { Children, useEffect } from "react"
import cn from "classnames"
import style from "./index.module.scss"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { activeModalState, modalDataState } from "@recoil/modal/atom"
import { scrollDisabledState } from "@recoil/scroll/atom"
import { ColorsType, TextTypography } from "./../../types"
import { Colors } from "@interfaces/index"

import { Icon, Text } from "@components"

export type IProps = {
  id: string
  children: React.ReactNode
  title?: string
  fullScreen?: boolean
  background?: ColorsType
  color?: Colors
  typo?: TextTypography
}

export const Modal: React.FC<IProps> = ({
  id,
  children,
  title,
  fullScreen = false,
  background,
  color,
  typo = "paragraph-md",
}: IProps) => {
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
      <div className={style.overlay} onClick={closeModal}></div>
      <div className={style.wrapper}>
        <div
          className={cn(
            style.modal,
            fullScreen && style.fullScreen,
            background && style[background]
          )}
        >
          <div className={cn(style.modalHeader, color && style[color])}>
            {fullScreen && <div style={{ width: "38px" }}></div>}
            {title && (
              <Text tag="p" typo={typo}>
                {title}
              </Text>
            )}
            <span className={style.cross}>
              <Icon
                color={color}
                type="cross"
                size="medium"
                onClick={closeModal}
              />
            </span>
          </div>
          <div className={style.modalBody}>{children}</div>
        </div>
      </div>
    </div>
  )
}
