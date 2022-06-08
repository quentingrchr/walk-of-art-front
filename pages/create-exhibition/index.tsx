import React from "react";
import { TemplatePage, Text } from "@components"

const CreateExhibition: React.FC = () => {
return (
    <TemplatePage isLogged={true}>
        {/* PAGE CONTENT */}
        <Text tag="h1" typo="paragraph-md">Page de création d'une exposition</Text>
    </TemplatePage>
)
}

export default CreateExhibition;