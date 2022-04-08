import React from "react"

import { Button, Text, HeadingStrong, InputGroup, LoginForm } from "@components"

const Home: React.FC = () => {
    return (
        <div>
            <Button>Bouton</Button>
            <HeadingStrong content="Inscription" elementColor="error" />
            <Text tag="h1" content="Inscription" typo="heading-lg" />
            <LoginForm />
        </div>
    )
}

export default Home
