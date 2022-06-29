import React from "react"
import { TemplatePage, Text, Cards } from "@components"


const Dashboard: React.FC = () => {

    return (
        <TemplatePage isLogged={true}>
            {/* PAGE CONTENT */}
            <Text tag="h1" typo="paragraph-md">Page de dashboard (Principale)</Text>
            <Cards />
        </TemplatePage>
    )
}

export default Dashboard;