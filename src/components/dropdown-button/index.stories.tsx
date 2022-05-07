import { ComponentStory, ComponentMeta } from "@storybook/react"
import { DropdownButton, IProps } from "./index"

export default {
    title: "DropdownButton",
    component: DropdownButton,
} as ComponentMeta<typeof DropdownButton>

const Template: ComponentStory<typeof DropdownButton> = (args: IProps) => <DropdownButton {...args} />

const Default = Template.bind({})

export { Default }
