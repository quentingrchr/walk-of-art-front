import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Badge, IProps } from "./index"

export default {
    title: "Badge",
    component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args: IProps) => <Badge {...args} />

const Default = Template.bind({})
const Completed = Template.bind({})
Completed.args = {
    type: "completed",
}
const InProgress = Template.bind({})
InProgress.args = {
    type: "progress",
}

export { Default, Completed, InProgress }
