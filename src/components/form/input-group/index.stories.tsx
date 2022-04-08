import { ComponentStory, ComponentMeta } from "@storybook/react"
import { InputGroup, IProps } from "./index"

export default {
    title: "InputGroup",
    component: InputGroup,
} as ComponentMeta<typeof InputGroup>

const Template: ComponentStory<typeof InputGroup> = (args: IProps) => <InputGroup {...args} />

const Default = Template.bind({})

export { Default }
