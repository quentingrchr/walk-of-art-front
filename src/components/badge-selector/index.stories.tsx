import { ComponentStory, ComponentMeta } from "@storybook/react"
import { BadgeSelector, IProps } from "./index"

export default {
    title: "BadgeSelector",
    component: BadgeSelector,
} as ComponentMeta<typeof BadgeSelector>

const Template: ComponentStory<typeof BadgeSelector> = (args: IProps) => <BadgeSelector {...args} />

const Default = Template.bind({})

export { Default }
