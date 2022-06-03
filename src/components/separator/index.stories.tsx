import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Separator, IProps } from "./index"

export default {
    title: "Separator",
    component: Separator,
} as ComponentMeta<typeof Separator>

const Template: ComponentStory<typeof Separator> = (args: IProps) => <Separator {...args} />

const Default = Template.bind({})

export { Default }
