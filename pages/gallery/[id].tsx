import React, { useState, useEffect, useRef, ReactElement } from "react"
import { useRouter } from "next/router"
import s from "./index.module.scss"
import { Icon } from "@components"
import { Smiley } from "../../src/types"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const smileyTypes: Smiley[] = [
    "smiley-smile",
    "smiley-lol",
    "smiley-love",
    "smiley-like",
    "smiley-wow",
]

const data = {
    images: [
        'https://iili.io/A7NDAP.jpg',
        'https://iili.io/dwagF2.png',
        'https://iili.io/hy8bLv.jpg'
    ],
}

interface IEmoji {
    type: Smiley,
    offset: number,
    isVisible: boolean
}

const getRandomSmiley = ():Smiley => {
    const randomIndex: number = Math.round(Math.random() * smileyTypes.length)
    return smileyTypes[randomIndex]
}

const Artist: React.FC = () => {
    SwiperCore.use([Autoplay])
    const router = useRouter()
    const { id } = router.query
    const [emojiList, setEmojiList] = useState<IEmoji[]>([])

    const createNewEmoji = (type: Smiley, offset: number): void =>
    {
        setEmojiList(prev => [...prev, { type, offset, isVisible: true }])
    }

    const renderEmoji = (element, index): ReactElement | null => {
        if(!element.isVisible) return null
        return (
            <div className={s.emoji} style={{left: `${element.offset}%`}} key={index} onAnimationEnd={() => handleAnimationEnd(index)}>
                <Icon type={element.type} size="xlarge" />
            </div>
        )
    }

    const handleAnimationEnd = (index) => {
        setEmojiList(prev => {
            prev[index].isVisible = false
            return prev
        })
    }

    return (
        <>
            <section className={s.gallery} onClick={() => createNewEmoji(getRandomSmiley(), Math.random() * 90)}>
                <div className={s.gallery__container}>
                    <Swiper
                        loop={true}
                        slidesPerView={'auto'}
                        autoplay={{delay: 3000}}   
                        speed={600} 
                    >
                        {
                            data.images.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <figure>
                                        <img src={src} alt="" />
                                    </figure>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                {
                    emojiList.map((element, index) =>
                    (
                        renderEmoji(element, index)
                    ))
                }
            </section>
        </>
    )
}

export default Artist
