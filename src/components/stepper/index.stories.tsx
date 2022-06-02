import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Stepper, IProps } from "./index"

export default {
    title: "Stepper",
    component: Stepper,
} as ComponentMeta<typeof Stepper>

const Template: ComponentStory<typeof Stepper> = (args: IProps) => <Stepper {...args} />

const Default = Template.bind({})

export { Default }
