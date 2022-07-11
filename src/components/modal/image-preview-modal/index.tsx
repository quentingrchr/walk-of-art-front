import React from "react"
import styles from "./index.module.scss"
import { Modal as BaseModal } from "../index"
import { useRecoilValue, useSetRecoilState } from "recoil"
import {
    IMAGE_PREVIEW_MODAL_ID,
    activeModalState,
} from "@recoil/modal/atom"

import { Text } from '@components'

export type IProps = {
    title: string,
    images: string[]
}

export const ImagePreviewModal: React.FC<IProps> = ({ title, images }: IProps) => {
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
            <div className={styles.images}>
                {/* {
                    images.map((src, index) =>
                    (
                        <figure key={index}>
                            <img src={src} alt="" />
                        </figure>
                    ))
                } */}
                <figure>
                    <img src={images[0]} alt="" />
                </figure>
            </div>
            <Text tag="h2" typo="heading-md">{title}</Text>
        </div>
    </BaseModal>
    )
}
