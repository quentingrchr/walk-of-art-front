import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Stepper, IProps } from "./index"

export default {
    title: "Stepper",
    component: Stepper,
} as ComponentMeta<typeof Stepper>

const STEPS = [
    {
        id: 1,
        label: "Step 1",
        number: 1,
        completed: false,
    },
    {
        id: 2,
        label: "Step 2",
        number: 2,
        completed: false,
    },
    {
        id: 3,
        label: "Step 3",
        number: 3,
        completed: false,
    },
    
]

const Template: ComponentStory<typeof Stepper> = (args: IProps) => <Stepper {...args} />

const Default = Template.bind({})
Default.args = {
    activeStep: 0,
    steps: STEPS,
    completeOne: (index) => { },
    variant : "default"
}

export { Default }
