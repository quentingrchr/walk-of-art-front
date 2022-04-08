import { ComponentStory, ComponentMeta } from "@storybook/react"
import { LoginForm, IProps } from "./index"

export default {
    title: "LoginForm",
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args: IProps) => <LoginForm {...args} />

const Default = Template.bind({})

export { Default }
