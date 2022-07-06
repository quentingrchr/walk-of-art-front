import React from "react";
import { TemplatePage, Text, CreateWorkForm, InputFile } from "@components";

const CreateWork: React.FC = () => {
  return (
    <TemplatePage>
      {/* PAGE CONTENT */}
      <Text tag="h1" typo="paragraph-md">
        Page de création d'une oeuvre
      </Text>
    <CreateWorkForm />
    </TemplatePage>
  );
};

export default CreateWork;
