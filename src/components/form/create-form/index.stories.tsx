import { ComponentStory, ComponentMeta } from "@storybook/react"
import { CreateForm, IProps } from "./index"

export default {
    title: "CreateForm",
    component: CreateForm,
} as ComponentMeta<typeof CreateForm>

const Template: ComponentStory<typeof CreateForm> = (args: IProps) => <CreateForm {...args} />

const Default = Template.bind({})

export { Default }
