import React, { useEffect } from "react"
import cn from "classnames"
import { Header, ConfirmWorkDeleteModal } from "@components"
import styles from "./index.module.scss"
import { scrollDisabledState } from "@recoil/scroll/atom"
import { useRecoilValue } from "recoil"

export type IProps = {
  children: React.ReactNode
}

export const TemplatePage: React.FC<IProps> = ({ children }: IProps) => {
  const scrollDisabled = useRecoilValue(scrollDisabledState)

  useEffect(() => {
    let body = document.querySelector("body")
    if (scrollDisabled) {
      body?.classList.add("no-scroll")
    } else {
      body?.classList.remove("no-scroll")
    }
  }, [scrollDisabled])

  return (
    <>
      <div>
        <Header />
        <main className={cn(styles.mainContainer)}>{children}</main>
      </div>
      {/* All modals */}
      <ConfirmWorkDeleteModal />
    </>
  )
}
