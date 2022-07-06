import React from "react";
import { EditProfile, TemplatePage, Text } from "@components";

const Profile: React.FC = () => {
  return (
    <TemplatePage>
      <Text tag="h1" typo="paragraph-md">
        Page Profile
      </Text>
      <EditProfile />
    </TemplatePage>
  );
};

export default Profile;
