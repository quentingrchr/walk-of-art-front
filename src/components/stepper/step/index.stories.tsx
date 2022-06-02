import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Step, IProps } from "./index"

export default {
    title: "Step",
    component: Step,
} as ComponentMeta<typeof Step>

const Template: ComponentStory<typeof Step> = (args: IProps) => <Step {...args} />

const Default = Template.bind({})

export { Default }
