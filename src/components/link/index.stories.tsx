import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Link, IProps } from "./index"

export default {
    title: "Link",
    component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args: IProps) => <Link {...args} />

const Default = Template.bind({})

export { Default }
