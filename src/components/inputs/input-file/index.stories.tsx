import { ComponentStory, ComponentMeta } from "@storybook/react"
import { InputFile, IProps } from "./index"

export default {
    title: "InputFile",
    component: InputFile,
} as ComponentMeta<typeof InputFile>

const Template: ComponentStory<typeof InputFile> = (args: IProps) => <InputFile {...args} />

const Default = Template.bind({})

export { Default }
