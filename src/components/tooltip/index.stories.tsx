import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Tooltip, IProps } from "./index"

export default {
    title: "tooltip",
    component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args: IProps) => <Tooltip {...args} />

const Default = Template.bind({})
const Info = Template.bind({})
Info.args = {
    type: "info",
}
const Success = Template.bind({})
Success.args = {
    type: "success",
}
const Error = Template.bind({})
Error.args = {
    type: "error",
}

export { Default, Success, Error }
