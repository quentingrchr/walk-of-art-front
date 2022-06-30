import React from "react";
import { TemplatePage, Text, HeadingStrong } from "@components"

const Works: React.FC = () => {
    return (
        <TemplatePage isLogged={true}>
            {/* PAGE CONTENT */}
            <Text tag="h1" typo="paragraph-md">Page des Oeuvres</Text>
            <HeadingStrong content="Mes oeuvres" elementColor="pink" size="md" />
        </TemplatePage>
    )
}

export default Works;