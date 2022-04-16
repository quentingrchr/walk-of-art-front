import React from "react"

import { Button, Text, HeadingStrong, InputGroup, LoginForm, SplitScreen } from "@components"

const Home: React.FC = () => {
    return (
        <SplitScreen component={<LoginForm />} image="https://source.unsplash.com/1600x900/?art"/>
    )
}

export default Home
