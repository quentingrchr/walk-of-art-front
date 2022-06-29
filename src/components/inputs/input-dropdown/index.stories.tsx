import { ComponentStory, ComponentMeta } from "@storybook/react"
import { InputDropdown, IProps } from "./index"

export default {
    title: "InputDropdown",
    component: InputDropdown,
} as ComponentMeta<typeof InputDropdown>

const Template: ComponentStory<typeof InputDropdown> = (args: IProps) => <InputDropdown {...args} />

const Default = Template.bind({})

export { Default }
