import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ExpoStateBar, IProps } from "./index"

export default {
    title: "ExpoStateBar",
    component: ExpoStateBar,
} as ComponentMeta<typeof ExpoStateBar>

const Template: ComponentStory<typeof ExpoStateBar> = (args: IProps) => <ExpoStateBar {...args} />

const Default = Template.bind({})

export { Default }
