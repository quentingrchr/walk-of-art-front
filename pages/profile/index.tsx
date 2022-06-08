import React from "react";
import { TemplatePage, Text } from "@components"

const Profile: React.FC = () => {
    return (
        <TemplatePage isLogged={true}>
            {/* PAGE CONTENT */}
            <Text tag="h1" typo="paragraph-md">Page Profile</Text>
        </TemplatePage>
    )
}

export default Profile;