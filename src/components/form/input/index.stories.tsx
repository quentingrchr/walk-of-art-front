import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Input, IProps } from "./index"

export default {
    title: "Input",
    component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: IProps) => <Input {...args} />

const Text = Template.bind({})
Text.args = {
    id: "text",
    placeholder: "Text",
    type: "text",
    register: () => {},
}

const Password = Template.bind({})
Password.args = {
    id: "text",
    placeholder: "Password",
    type: "password",
    register: () => {},
}


export { Text, Password }
