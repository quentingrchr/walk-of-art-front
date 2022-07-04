import { ComponentStory, ComponentMeta } from "@storybook/react"
import { ImagesPreview, IProps } from "./index"

export default {
    title: "ImagesPreview",
    component: ImagesPreview,
} as ComponentMeta<typeof ImagesPreview>

const Template: ComponentStory<typeof ImagesPreview> = (args: IProps) => <ImagesPreview {...args} />

const Default = Template.bind({})

export { Default }
