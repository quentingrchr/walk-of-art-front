import React, { useState, useEffect, useRef, ReactElement } from "react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import s from "./index.module.scss"
import { Icons } from "@interfaces/index"
import { Icon } from "@components"
import { Smiley } from "../../src/types"

const smileyTypes: Smiley[] = [
    "smiley-smile",
    "smiley-lol",
    "smiley-love",
    "smiley-like",
    "smiley-wow",
]

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
