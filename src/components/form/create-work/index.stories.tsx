import { ComponentStory, ComponentMeta } from "@storybook/react"
import { CreateWork, IProps } from "./index"

export default {
    title: "CreateWork",
    component: CreateWork,
} as ComponentMeta<typeof CreateWork>

const Template: ComponentStory<typeof CreateWork> = (args: IProps) => <CreateWork {...args} />

const Default = Template.bind({})

export { Default }
