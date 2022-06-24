import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Forms, IProps } from "./index"

export default {
    title: "Forms",
    component: Forms,
} as ComponentMeta<typeof Forms>

const Template: ComponentStory<typeof Forms> = (args: IProps) => <Forms {...args} />

const Default = Template.bind({})

export { Default }
