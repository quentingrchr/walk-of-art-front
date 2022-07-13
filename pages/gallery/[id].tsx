import React, { useState, useEffect, ReactElement } from "react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import s from "./index.module.scss"
import { Icons } from "@interfaces/index"
import { Icon } from "@components"

interface IEmoji {
    type: Icons,
    offset: number
}

const Artist: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    const [emojiList, setEmojiList] = useState<IEmoji[]>([])

    const createNewEmoji = (type: Icons, offset: number): void =>
    {
        setEmojiList(prev => [...prev, { type, offset }])
        // console.log(emojiList)
    }

    return (
        <>
            <section className={s.gallery} onClick={() => createNewEmoji('smiley-smile', Math.random() * 90)}>
                {
                    emojiList.map((element, index) =>
                    (
                        <div className={s.emoji} style={{left: `${element.offset}%`}} key={index}>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default Artist
