import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Landing, IProps } from "./index"

export default {
    title: "Landing",
    component: Landing,
} as ComponentMeta<typeof Landing>

const Template: ComponentStory<typeof Landing> = (args: IProps) => <Landing {...args} />

const Default = Template.bind({})

export { Default }
