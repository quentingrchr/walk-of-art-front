import { ComponentStory, ComponentMeta } from "@storybook/react"
import { NotificationWrapper, IProps } from "./index"

export default {
    title: "NotificationWrapper",
    component: NotificationWrapper,
} as ComponentMeta<typeof NotificationWrapper>

const Template: ComponentStory<typeof NotificationWrapper> = (args: IProps) => <NotificationWrapper {...args} />

const Default = Template.bind({})

export { Default }
