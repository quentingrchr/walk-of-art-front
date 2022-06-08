import { ComponentStory, ComponentMeta } from "@storybook/react"
import { NavLink, IProps } from "./index"

export default {
    title: "NavLink",
    component: NavLink,
} as ComponentMeta<typeof NavLink>

const Template: ComponentStory<typeof NavLink> = (args: IProps) => <NavLink {...args} />

const Default = Template.bind({})

export { Default }
