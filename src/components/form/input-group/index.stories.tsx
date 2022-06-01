import { ComponentStory, ComponentMeta } from "@storybook/react"
import { InputGroup, IProps } from "./index"

export default {
    title: "InputGroup",
    component: InputGroup,
} as ComponentMeta<typeof InputGroup>

const Template: ComponentStory<typeof InputGroup> = (args: IProps) => <InputGroup {...args} />

const Default = Template.bind({})
//  id, label, type, placeholder = "", register, guidance
Default.args = {
    id: "text",
    label: "Label",
    type: "text",
    placeholder: "Placeholder",
    register: () => { },
    guidance: {
        type: "info",
        message: "Guidance info message"
    },
}

const Error = Template.bind({})
Error.args = {
    id: "text",
    label: "Label",
    type: "text",
    placeholder: "Placeholder",
    register: () => { },
    guidance: {
        type: "error",
        message: "Guidance error message"
    },
}

const Success = Template.bind({})
Success.args = {
    id: "text",
    label: "Label",
    type: "text",
    placeholder: "Placeholder",
    register: () => { },
    guidance: {
        type: "success",
        message: "Guidance success message"
    },
}

const Password = Template.bind({})
Password.args = {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "My password",
    register: () => { },
}

const Email = Template.bind({})
Email.args = {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "My email",
    register: () => { },
}




export { Default, Error, Success, Password, Email }
