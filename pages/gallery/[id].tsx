import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import s from "./index.module.scss"

const Artist: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <section className={s.gallery}>
                <div className={s.emoji}></div>
            </section>
        </>
    )
}

export default Artist
