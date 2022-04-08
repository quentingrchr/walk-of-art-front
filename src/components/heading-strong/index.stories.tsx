import { ComponentStory, ComponentMeta } from "@storybook/react"
import { HeadingStrong, IProps } from "./index"

export default {
    title: "HeadingStrong",
    component: HeadingStrong,
} as ComponentMeta<typeof HeadingStrong>

const Template: ComponentStory<typeof HeadingStrong> = (args: IProps) => <HeadingStrong {...args} />

const Default = Template.bind({})

export { Default }
