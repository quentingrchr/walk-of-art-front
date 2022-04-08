import React from "react"

import { Button, Text, HeadingStrong, InputGroup, LoginForm } from "@components"

const Home: React.FC = () => {
    return (
        <div style={{
            maxWidth: "50vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div style={{
                width: "40rem",
                paddingTop: "8rem"
            }}>
                <LoginForm />
            </div>
        </div>
    )
}

export default Home
