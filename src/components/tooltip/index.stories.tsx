import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Tooltip, IProps } from "./index"

export default {
    title: "tooltip",
    component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args: IProps) => <Tooltip {...args} />

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
