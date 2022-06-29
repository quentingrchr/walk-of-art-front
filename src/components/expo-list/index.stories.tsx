import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ExpoList, IProps } from "./index"

export default {
    title: "ExpoList",
    component: ExpoList,
} as ComponentMeta<typeof ExpoList>

const Template: ComponentStory<typeof ExpoList> = (args: IProps) => <ExpoList {...args} />

const Default = Template.bind({})

export { Default }
