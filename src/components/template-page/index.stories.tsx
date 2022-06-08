import { ComponentStory, ComponentMeta } from "@storybook/react"
import { TemplatePage, IProps } from "./index"

export default {
    title: "TemplatePage",
    component: TemplatePage,
} as ComponentMeta<typeof TemplatePage>

const Template: ComponentStory<typeof TemplatePage> = (args: IProps) => <TemplatePage {...args} />

const Default = Template.bind({})

export { Default }
