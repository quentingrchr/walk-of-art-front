import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ButtonArrow, IProps } from "./index"

export default {
    title: "ButtonArrow",
    component: ButtonArrow,
} as ComponentMeta<typeof ButtonArrow>

const Template: ComponentStory<typeof ButtonArrow> = (args: IProps) => <ButtonArrow {...args} />

const Default = Template.bind({})

export { Default }
