import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import style from "./index.module.scss"
import { Text } from '@components'

const Artist: React.FC = () => {
    const router = useRouter()

    return (
        <>
            <Text tag="p" typo="paragraph-md">Hello World</Text>
        </>
    )
}

export default Artist