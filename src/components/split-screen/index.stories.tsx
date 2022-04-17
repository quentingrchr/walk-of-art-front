import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SplitScreen, IProps } from "./index"

export default {
    title: "SplitScreen",
    component: SplitScreen,
} as ComponentMeta<typeof SplitScreen>

const Template: ComponentStory<typeof SplitScreen> = (args: IProps) => <SplitScreen {...args} />

const Default = Template.bind({})

export { Default }
