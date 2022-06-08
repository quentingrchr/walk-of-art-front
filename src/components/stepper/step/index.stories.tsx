import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Step, IProps } from "./index"

export default {
    title: "Step",
    component: Step,
} as ComponentMeta<typeof Step>

const Template: ComponentStory<typeof Step> = (args: IProps) => <Step {...args} />

const defaultProps = {
    active: false,
    completed: false,
    label: "Step 1",
    number: 1,
    onClick: () => {
        alert("clicked")
    },
    disable: false,
}

const Default = Template.bind({})

Default.args = {
    ...defaultProps
}

const Disabled = Template.bind({})
Disabled.args = {
    ...defaultProps,
    disable: true
}

const Completed = Template.bind({})
Completed.args = {
    ...defaultProps,
    completed: true
}

const Active = Template.bind({})
Active.args = {
    ...defaultProps,
    active: true
}

export { Default, Disabled, Completed, Active }
