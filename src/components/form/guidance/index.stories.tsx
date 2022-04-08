import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Guidance, IProps } from "./index"

export default {
    title: "Guidance",
    component: Guidance,
} as ComponentMeta<typeof Guidance>

const Template: ComponentStory<typeof Guidance> = (args: IProps) => <Guidance {...args} />

const Default = Template.bind({})

export { Default }
