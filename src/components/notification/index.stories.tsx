import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Notification, IProps } from "./index"

export default {
    title: "Notification",
    component: Notification,
} as ComponentMeta<typeof Notification>

const Template: ComponentStory<typeof Notification> = (args: IProps) => <Notification {...args} />

const Default = Template.bind({})

export { Default }
