import { ComponentStory, ComponentMeta } from "@storybook/react"
import { EditProfile, IProps } from "./index"

export default {
    title: "EditProfile",
    component: EditProfile,
} as ComponentMeta<typeof EditProfile>

const Template: ComponentStory<typeof EditProfile> = (args: IProps) => <EditProfile {...args} />

const Default = Template.bind({})

export { Default }
