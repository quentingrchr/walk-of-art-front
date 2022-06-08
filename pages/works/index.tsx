import React from "react";
import { TemplatePage, Text } from "@components"

const Works: React.FC = () => {
    return (
        <TemplatePage isLogged={true}>
            {/* PAGE CONTENT */}
            <Text tag="h1" typo="paragraph-md">Page des Oeuvres</Text>
        </TemplatePage>
    )
}

export default Works;