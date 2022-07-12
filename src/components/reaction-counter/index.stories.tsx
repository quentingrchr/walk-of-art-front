import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ReactionCounter, IProps } from "./index"

export default {
    title: "ReactionCounter",
    component: ReactionCounter,
} as ComponentMeta<typeof ReactionCounter>

const Template: ComponentStory<typeof ReactionCounter> = (args: IProps) => <ReactionCounter {...args} />

const Default = Template.bind({})

export { Default }
