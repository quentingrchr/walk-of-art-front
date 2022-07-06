import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Unauthorized, IProps } from "./index"

export default {
    title: "Unauthorized",
    component: Unauthorized,
} as ComponentMeta<typeof Unauthorized>

const Template: ComponentStory<typeof Unauthorized> = (args: IProps) => <Unauthorized {...args} />

const Default = Template.bind({})

export { Default }
