import React, { useState, useEffect } from "react"
import styles from "./index.module.scss"
import { Modal as BaseModal } from "../index"
import {
    IMAGE_PREVIEW_MODAL_ID,
} from "@recoil/modal/atom"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Text } from '@components'

export type IProps = {
    title: string,
    images: string[]
}

export const ImagePreviewModal: React.FC<IProps> = ({ title, images }: IProps) => {
    const [slideIndex, setSlideIndex] = useState<number>(0)

    return (
    <BaseModal
        id={IMAGE_PREVIEW_MODAL_ID}
        title={`${slideIndex + 1}/${images.length}`}
        fullScreen={true}
        background="artist-black"
        color="white"
        typo="heading-md"
    >
        <div className={styles.container}>
            <div className={styles.images}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={'auto'}
                        onSlideChange={(index) => setSlideIndex(index.activeIndex)}
                        onSwiper={(swiper) => { return swiper}}
                    >
                        {
                            images.map((src, index) =>
                            (
                                <SwiperSlide key={index}>
                                    <figure>
                                        <img src={src} alt="" />
                                    </figure>
                                </SwiperSlide>
                            ))  
                        }
                    </Swiper>
            </div>
            <Text tag="h2" typo="heading-md">{title}</Text>
        </div>
    </BaseModal>
    )
}
