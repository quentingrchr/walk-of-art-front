import React from "react";
import { TemplatePage, Text } from "@components"

const Exhibitions: React.FC = () => {
    return (
        <TemplatePage isLogged={true}>
            {/* PAGE CONTENT */}
            <Text tag="h1" typo="paragraph-md">Page des Expositions</Text>
        </TemplatePage>
    )
}

export default Exhibitions;