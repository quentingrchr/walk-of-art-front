import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Input, IProps } from "./index"

export default {
    title: "Input",
    component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: IProps) => <Input {...args} />

const Default = Template.bind({})

export { Default }
