import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Navbar, IProps } from "./index"

export default {
    title: "Navbar",
    component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args: IProps) => <Navbar {...args} />

const Default = Template.bind({})

export { Default }
