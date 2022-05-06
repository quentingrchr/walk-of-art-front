import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Header, IProps } from "./index"

export default {
    title: "Header",
    component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args: IProps) => <Header {...args} />

const Default = Template.bind({})

export { Default }
