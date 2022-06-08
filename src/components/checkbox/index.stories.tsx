import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Checkbox, IProps } from "./index"

export default {
    title: "Checkbox",
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args: IProps) => <Checkbox {...args} />

const Default = Template.bind({})

export { Default }
