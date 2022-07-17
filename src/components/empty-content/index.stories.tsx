import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ContentEmpty, IProps } from "./index"

export default {
    title: "ContentEmpty",
    component: ContentEmpty,
} as ComponentMeta<typeof ContentEmpty>

const Template: ComponentStory<typeof ContentEmpty> = (args: IProps) => <ContentEmpty {...args} />

const Default = Template.bind({})

export { Default }
